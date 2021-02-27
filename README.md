# react-scrollchor (React Scrollchor)

[![npm version](https://badge.fury.io/js/react-scrollchor.svg)](https://badge.fury.io/js/react-scrollchor)
[![npm downloads](https://img.shields.io/npm/dm/react-scrollchor.svg?style=flat-square)](https://www.npmjs.com/package/react-scrollchor)
[![Donate](https://img.shields.io/badge/$-support-green.svg?style=flat-square)](https://paypal.me/bySabi/10)

> A React component for scrolling to `#hash` links with smooth animations.
> Scrollchor is a mix of `Scroll` and `Anchor`, a joke name for a useful component.

See it in action:
* demo [video](https://github.com/some-react-components/react-scrollchor/blob/example/demo/scrollchor.webm?raw=true)

`hash` is the `id` attribute of an HTML tag on the current page.

## Installation

### npm

```bash
npm install react-scrollchor --save
```

### yarn

```bash
yarn add react-scrollchor
```

### Dependencies

You must have React (≥16.8.0) installed in your project before trying to use this component. This minimum version constraint represents the React version which [introduced hooks](https://reactjs.org/docs/hooks-intro.html).


## Usage

```js
import { Scrollchor } from 'react-scrollchor';
import { Navbar, NavItem, Page, Section } from './components';

const LandingPage = (props) => (
  <Page>

    <Navbar brand={brand} className="navbar-fixed-top">
      <NavItem><Scrollchor to="" className="nav-link">Home</Scrollchor></NavItem>
      <NavItem><Scrollchor to="#sample-code" className="nav-link">Sample</Scrollchor></NavItem>
      <NavItem><Scrollchor to="#features" className="nav-link">Features</Scrollchor></NavItem>
      <NavItem><Scrollchor to="footer" className="nav-link">SignUp</Scrollchor></NavItem>
    </Navbar>


    <Section id="sample-code">
      <div style={{ height: '100vh' }} />
    </Section>

    <div id="features">
      <div style={{ height: '100vh' }} />
    </div>

    <footer id="footer">
      <div style={{ height: '100vh' }} />
    </footer>

  </Page>
);

export default LandingPage;
```

## Props

The package ships with TypeScript type definitions to help with IDE autocompletion, but the sections below should give you a quick rundown of each prop if you prefer this format. Any props not listed below are passed directly on to the underlying `<a>` tag, except for `href` and `onClick`.

The `to` prop controls the final `href` prop, and `onClick` is used internally to perform the scrolling. If you need to run some code when the link is clicked use the `beforeAnimate` prop instead.

### `to: string`

The anchor (id) to which this link should scroll to. Any leading `#` will be stripped from this value.

### `target?: string`

The element scrolling will be performed on when clicked. Leading `#` will be stripped here as well.

Scrollchor works within any scrollable parent container. If no target is provided (or the target element is not found on the page), the default is scrolling both the `<html>` and `<body>` elements simultaneously.

### `animate?: Partial<AnimateConfig>`

The smooth scrolling animation can be customized using this prop. Three pre-defined easing functions are exported by the package: `easeOutQuad`, `swing`, `linear`. When not provided, the default looks like this:

```ts
import { AnimateConfig, easeOutQuad } from 'react-scrollchor';

const defaultAnimate: AnimateConfig = {
  offset: 0,
  duration: 400,
  easing: easeOutQuad,
};
```

 * `offset?: number` &mdash; Additional pixels to scroll relative to the target element (supports negative values, e.g. for fixed position headers)
 * `duration?: number` &mdash; Length of the animation in milliseconds
 * `easing?: ScrollchorEasingFunction` &mdash; Easing function to calculate the animation steps. Pass a function that matches the exported interface for a custom easing.

    | # | Parameter | Meaning |
    |---|-----------|---------|
    |0|percent|Percent completed of the animation (decimal, `0.0` to `1.0`)|
    |1|elapsedTime|Time elapsed since the animation began, in ms|
    |2|startValue|Static value set to `0`|
    |3|valueChange|Static value set to `1`|
    |4|duration|Duration of the animation, in ms|

    Returns a decimal indicating how close the animation is to the end value (`0` = start, `1` = finished, `1.2` = 20% over the end value, think "bounce" effects)

The default values can be customized all at once or individually by providing only the properties you want to override. For example:

```jsx
import { Scrollchor, linear } from 'react-scrollchor';

const HomeLink = () => (
  <Scrollchor to="home" animate={{ duration: 1000, easing: linear }}>
    Home
  </Scrollchor>
);
```

You can find additional easing functions at these links:

* [Robert Penner's Easing Functions](http://robertpenner.com/easing/)
* [Javascript source code](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js)


### `beforeAnimate: MouseEventHandler` / `afterAnimate: MouseEventHandler`

You can use these callbacks to trigger behaviors like: update state, load async stuff, etc. when either stage happens. The functions receive the originating `MouseEvent` as their only argument, the return value is not used.

`beforeAnimate` is triggered before the animation starts, i.e. immediately when the link is clicked, while `afterAnimate` is called once the animation has finished.

```js
<Scrollchor to="#aboutus" afterAnimate={() => setActive('home')}>Home</Scrollchor>
```

## Credits

### author
* bySabi Files <> [@bySabi](https://github.com/bySabi)

### maintainers
* xehpuk <> [@xehpuk](https://github.com/xehpuk)
* SeinopSys <> [@SeinopSys](https://github.com/SeinopSys)

### contributors
* Jean Chung <> [@jeanchung](https://github.com/jeanchung)
* Chua Kang Ming <> [@kambing86](https://github.com/kambing86)
* Benjamin MICHEL <> [@SBRK](https://github.com/SBRK)

## Contributing

* Documentation improvement
* Feel free to send any PR

## License

[ISC][isc-license]

[isc-license]:./LICENSE
