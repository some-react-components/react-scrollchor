import { clearTimeout, setTimeout } from 'requestanimationframe-timer';

/**
 * @param percent     Percent completed of the animation (decimal, `0.0` to `1.0`)
 * @param elapsedTime Time elapsed since the animation began, in ms
 * @param startValue  Static value set to `0`
 * @param valueChange Static value set to `1`
 * @param duration    Duration of the animation, in ms
 * @returns Decimal indicating how close the animation is to the end value
 *          (0 = start, 1 = finished, 1.2 = 20% over the end value, think "bounce" effects)
 */
export type ScrollchorEasingFunction = (
  percent: number,
  elapsedTime: number,
  startValue: number,
  valueChange: number,
  duration: number,
) => number;

export interface AnimateConfig {
  /**
   * Additional pixels to scroll relative to the target element (supports negative values, e.g.
   * for fixed position headers)
   */
  offset: number;
  /**
   * Length of the animation in milliseconds
   */
  duration: number;
  /**
   * Easing function to calculate the animation steps. Pass a function that matches the exported
   * interface for a custom easing.
   */
  easing: ScrollchorEasingFunction;
}

/** @internal */
type ScrollAnimator = (
  id: string,
  targetId: string,
  animate: AnimateConfig,
) => Promise<string | void>;

/** @internal */
export const animateScroll: ScrollAnimator = ((): ScrollAnimator => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let resolvePrevious: (value: string | void | PromiseLike<string | void>) => void;

  return (id, targetId, animate): ReturnType<ScrollAnimator> => {
    let targetElement: HTMLElement | undefined;

    // Invalid values are normalized to empty string
    if (targetId !== '') {
      try {
        const el = document.getElementById(targetId);
        if (el !== null) {
          targetElement = el;
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(`Failed to get element by id ${targetId}, falling back to default`);
      }
    }

    function getScrollTop() {
      // like jQuery -> $('html, body').scrollTop
      return targetElement
        ? targetElement.scrollTop
        : document.documentElement.scrollTop || document.body.scrollTop;
    }

    function setScrollTop(position: number) {
      if (targetElement) {
        targetElement.scrollTop = position;
      } else {
        document.documentElement.scrollTop = position;
        document.body.scrollTop = position;
      }
    }

    function getOffsetTop<T extends Element>(element: T): number {
      const parentOffsetTop = targetElement
        ? targetElement.getBoundingClientRect().top
        : 0;
      return element.getBoundingClientRect().top - parentOffsetTop + getScrollTop();
    }

    return new Promise<string | void>((resolve, reject) => {
      const element = id ? document.getElementById(id) : document.body;

      if (!element) {
        reject(new Error(`Cannot find element: #${id}`));
        return;
      }

      const {
        offset,
        duration,
        easing,
      } = animate;
      const startTime = Date.now();
      const start = getScrollTop();
      const end = getOffsetTop(element) + offset;

      function animateFn() {
        const currentTime = Date.now();
        const remaining = Math.max(0, startTime + duration - currentTime);
        const percent = 1 - (remaining / duration || 0);
        const eased = easing(percent, duration * percent, 0, 1, duration);
        const now = (end - start) * eased + start;
        setScrollTop(now);

        if (percent < 1) {
          const increment = 20;
          timeoutId = setTimeout(animateFn, increment);
        } else {
          timeoutId = undefined;
          resolve(id);
        }
      }

      if (timeoutId) {
        clearTimeout(timeoutId);
        resolvePrevious();
      }
      resolvePrevious = resolve;
      animateFn();
    });
  };
})();

/** @internal */
export function updateHistory(id: string): void {
  const hashId = `#${id}`;
  if (typeof window.history.pushState === 'function') {
    window.history.pushState({}, '', hashId);
  } else {
    window.location.hash = hashId;
  }
}

/** @internal */
export function normalizeId(id?: unknown): string {
  if (typeof id === 'string') {
    // Trim leading hash symbol
    return id.replace(/^#/, '');
  }
  return '';
}
