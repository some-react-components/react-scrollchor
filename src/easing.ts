import { ScrollchorEasingFunction } from './helpers';

// noinspection JSUnusedGlobalSymbols
/**
 * Linear easing
 */
export const linear: ScrollchorEasingFunction = (p) => p;

// noinspection JSUnusedGlobalSymbols
/**
 * jQuery default "swing" easing
 *
 * @see https://github.com/jquery/jquery/blob/09f254361f1fe8a563b8a90fe6a4d269f4b11514/src/effects/Tween.js#L101-L103
 */
export const swing: ScrollchorEasingFunction = (p) => 0.5 - Math.cos(p * Math.PI) / 2;

/**
 * Quadratic "out" easing function based on jquery-easing plugin
 *
 * This is the default value for the animation `easing` option of the component if no
 * custom one is provided
 *
 * @see https://github.com/danro/jquery-easing/blob/a6f21ff77c84cee11562d36c51fb5b9c95f2eec0/jquery.easing.js#L25
 */
export const easeOutQuad: ScrollchorEasingFunction = (_, t, b, c, d) => {
  const tDivD = t / d;
  return -c * tDivD * (tDivD - 2) + b;
};
