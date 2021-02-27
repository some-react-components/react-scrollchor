## master (unreleased)

## 7.0.0

This new major version contains breaking changes.

- Everything has been rewritten in TypeScript, which brings with it published type definitions
- The default export has been removed in favor of a named export; `import Scrollchor` must be replaced with `import { Scrollchor }`
- The `simulateClick()` API has been removed entirely
- Scrollchor is now a function component and makes use of hooks introduced in React v16.8, which necessitated a minimum version bump for this `peerDependency`
- `animation.easing` configuration is now documented and compatible with all the easing functions provided by [jquery-easing](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js)
- Added two additional built-in easing types for _ease_ of use, borrowed from jQuery (`linear`, `swing`)

## 6.0.0

`Scrollchor` React component now belong to `Some React Component` Organization Team. This move will ensure its future development and manteniance.

- Added configurable `scrollable container` feature, `target` prop. Thanks to @xephuk dedicated effort.
- [@xehpuk](https://github.com/xehpuk) join `React-Schollchor` Team
- minor Doc corrections

## 5.1.0

- Replace internal function `updateHistory` implementation for prevent scroll jumps on browser history update


## 5.0.2

- Now each `Scrollchor` instance has its own `animateScroll` function that track animation state and eliminates the possibility of multiple animations interfering with each other, thanks to @xehpuk PR

## 5.0.1

- Fix a state bug introduced on release `5.0.0`
- `animateScroll` is now asynchronous, thanks to @xehpuk PR

## 5.0.0

- Add support for React 16.3.x new API
- Prevent warning on React 16.3.x deprecated `componentWillReceiveProps`

## 4.2.1

- Prevent error when clicking a link to an anchor that does not exist. Thanks to @SBRK contribution

## 4.2.0

- Implemented animation using `requestAnimationFrame`. Thanks to @kambing86 PR

## 4.1.0

- Add `disableHistory` prop for enable/disable update browser history with scroll behaviours. Default is `false`

## 4.0.0

- Add support to changeable props. All props become responsive
- Add simulateClick API for animate scroll programmatically
- On childrenless Scrollchor render to `null`, useful for programmatically scroll
- Add track to `window.location.bash` needed by browser history, `back/forward` buttons
- Source refactored
- Update Example and Demo
- Update Doc
- Add Credits

## 3.0.0

- Add React 15.5.x support
- Deprecate React 0.14 peer dependencie

## 2.2.0

- Add beforeAnimate/afterAnimate hooks to scroll handler

## 2.1.3

- Fix incorrect passed props to tag

## 2.1.2

- add fbjs peer dependencie
- improved doc

## 2.0.0

- Update package
- `to` prop work with and without `#
- Add example
- Add demo

## 1.0.0

- Initial release
