import type { AnchorHTMLAttributes, FC, MouseEventHandler } from 'react';
import React, { useCallback, useMemo } from 'react';
import { AnimateConfig, animateScroll, normalizeId, updateHistory } from './helpers';
import { easeOutQuad } from './easing';

export interface ScrollchorProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> {
  /**
   * The anchor (id) to which this link should scroll to, leading # will be stripped
   */
  to: string;
  /**
   * The element scrolling will be performed on when clicked, leading # will be stripped
   *
   * Defaults to scrolling both the `<html>` and `<body>` elements of the page
   */
  target?: string;
  /**
   * The smooth scrolling animation can be customized using this prop. Three pre-defined
   * easing functions are exported by the package: `easeOutQuad`, `swing`, `linear`.
   *
   * @example ```
   * { offset: 0, duration: 400, easing: easeOutQuad }
   * ```
   */
  animate?: Partial<AnimateConfig>;
  /**
   * Callback function triggered before scroll to #hash
   */
  beforeAnimate?: MouseEventHandler;
  /**
   * Callback function triggered after scroll to #hash
   */
  afterAnimate?: MouseEventHandler;
  /**
   * Enable/disable updating the browser history with scroll behaviours
   *
   * Default to `false`
   */
  disableHistory?: boolean;
}

export const Scrollchor: FC<ScrollchorProps> = ({
  to: inTo,
  target: inTarget,
  animate: inAnimate = {},
  beforeAnimate,
  afterAnimate,
  disableHistory = false,
  children,
  ...anchorProps
}) => {
  const to = useMemo<string>(() => normalizeId(inTo), [inTo]);
  const target = useMemo<string>(() => normalizeId(inTarget), [inTarget]);
  const animate = useMemo<AnimateConfig>(() => {
    const {
      offset = 0,
      duration = 400,
      easing = easeOutQuad,
    } = inAnimate;
    return {
      offset,
      duration,
      easing,
    };
  }, [inAnimate]);

  const handleClick: MouseEventHandler = useCallback((event) => {
    if (beforeAnimate) {
      beforeAnimate(event);
    }
    event.preventDefault();
    void animateScroll(to, target, animate)
      .then((id) => {
        if (!id) return;
        if (!disableHistory) updateHistory(id);
        if (afterAnimate) afterAnimate(event);
      });
  }, [afterAnimate, animate, beforeAnimate, disableHistory, target, to]);

  if (!children) return null;

  return (
    <a href={`#${to}`} onClick={handleClick} {...anchorProps}>
      {children}
    </a>
  );
};
