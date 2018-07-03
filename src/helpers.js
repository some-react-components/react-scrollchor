import { setTimeout, clearTimeout } from 'requestanimationframe-timer';

export const animateScroll = (function () {
  let timeoutId;
  let resolvePrevious;

  return function animateScroll (id, targetId, animate) {
    let targetElement = document.getElementById(targetId);
    if (!targetElement) {
      targetElement = 'scrollTop' in document.documentElement
        ? document.documentElement
        : document.body;
    }

    function getScrollTop () {
      // like jQuery -> $('html, body').scrollTop
      return targetElement.scrollTop;
    }

    function setScrollTop (position) {
      targetElement.scrollTop = position;
    }

    return new Promise((resolve, reject) => {
      const element = id ? document.getElementById(id) : document.body;

      if (!element) {
        return reject(`Cannot find element: #${id}`);
      }

      function getOffsetTop () {
        return element.getBoundingClientRect().top - targetElement.getBoundingClientRect().top + getScrollTop();
      }

      const { offset, duration, easing } = animate;
      const start = getScrollTop();
      const to = getOffsetTop(element) + offset;
      const change = to - start;

      function animateFn (elapsedTime = 0) {
        const increment = 20;
        const elapsed = elapsedTime + increment;
        const position = easing(null, elapsed, start, change, duration);
        setScrollTop(position);
        if (elapsed < duration) {
          timeoutId = setTimeout(function () {
            animateFn(elapsed);
          }, increment);
        } else {
          timeoutId = undefined;
          return resolve(id);
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

export function updateHistory (id) {
  id = '#' + id;
  if (history.pushState) {
    history.pushState(null, null, id);
  } else {
    location.hash = id;
  }
}
