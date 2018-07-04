# react-scrollchor (React Scrollchor)

[![npm version](https://badge.fury.io/js/react-scrollchor.svg)](https://badge.fury.io/js/react-scrollchor)
[![npm downloads](https://img.shields.io/npm/dm/react-scrollchor.svg?style=flat-square)](https://www.npmjs.com/package/react-scrollchor)
[![bitHound Overall Score](https://www.bithound.io/github/some-react-components/react-scrollchor/badges/score.svg)](https://www.bithound.io/github/bySabi/react-scrollchor)
[![Donate](https://img.shields.io/badge/$-support-green.svg?style=flat-square)](https://paypal.me/bySabi/10)

> A React component for scroll to `#hash` links with smooth animations.
> Scrollchor is a mix of `Scroll` and `Anchor`, a joke name for a useful component.

See it in action:
* demo [video](https://github.com/some-react-components/react-scrollchor/blob/example/demo/scrollchor.webm?raw=true)
* example [page](https://some-react-components.github.com/react-scrollchor/) and [source code](https://github.com/some-react-components/react-scrollchor/tree/example)


`hash` is the `id` of a HTML tag on current page.



## Installation

### npm

```bash
npm install react-scrollchor --save
```

### Dependencies
* User should provide their own `React` package


## Usage

```js
import Scrollchor from 'react-scrollchor';
```
```js
export default (props) => (
  <Page>

    <Navbar brand={brand} className="navbar-fixed-top">
      <NavItem><Scrollchor to="" className="nav-link">Home</Scrollchor></NavItem>
      <NavItem><Scrollchor to="#sample-code" className="nav-link">Sample</Scrollchor></NavItem>
      <NavItem><Scrollchor to="#features" className="nav-link">Features</Scrollchor></NavItem>
      <NavItem><Scrollchor to="footer" className="nav-link">SignUp</Scrollchor></NavItem>
    </Navbar>


  <Section id="sample-code">

  </Section>

  <div id="features">

  </div>

  <footer id="footer">

  </footer>

</Page>
```

## Prop types
```js
  propTypes: {

    /**
     * id attribute of target DOM node
     * - `#` can be omited
     * - let it blank, `to = ''`, for scroll to page top
     * - this prop it's required
     */
    to: PropTypes.string.isRequired,

    /**
     * scroll smooth animation can be customize
     * Accepted options, Ex: (default)
     *  { offset: 0, duration: 400, easing: easeOutQuad }
     */
    animate: PropTypes.object,

    /**
     * callback function triggered before scroll to #hash
     * @param1 Received click event
     */
    beforeAnimate: PropTypes.func,

    /**
     * callback function triggered after scroll to #hash
     * @param1 Received click event
     */
    afterAnimate: PropTypes.func

    /**
     * enable/disable update browser history with scroll behaviours
     * Default to `false`
     */
    disableHistory: PropTypes.bool
}
```
### Reactive `props`
Update `props` will re-render `Scrollchor` element

Ex: [updating  "to" prop](https://github.com/some-react-components/react-scrollchor/blob/example/src/App.js#L28)

## Custom animation

Animated behavior can be customize:

```js
<Scrollchor to="#aboutus" animate={{offset: 20, duration: 600}} className="nav-link">Home</Scrollchor>
```

### default animation settings
```js
{ offset: 0, duration: 400, easing: easeOutQuad }
```
This setting is equivalent to default jQuery.animate `easing: swing`

### more `Easing` functions

* [jQuery easings](http://api.jqueryui.com/easings/)
* [Robert Penner's Easing Functions](http://robertpenner.com/easing/)
* [Javascript source code](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js)


## `before` and `after` Animate callbacks
Use this callbacks to trigger behaviours like, for example, update state, load async stuffs, etc.
```js
<Scrollchor to="#aboutus" afterAnimate={() => updateState(this)}>Home</Scrollchor>
```

## Simulate click API
Scrollchor include a dedicate API for init animate scroll programmatically that works like normal click events using `simulateClick()`

Ex: [using simulateClick](https://github.com/some-react-components/react-scrollchor/blob/example/src/App.js#L17)

When used programmatically some use-case don't need `anchor tags`. On this cases use childrenless `Scrollchor`

### Childrenless  `Scrollchor`
This component will render `null` and the user it's reponsible of store the component [reference](https://facebook.github.io/react/docs/refs-and-the-dom.html), Ex: [childrenless](https://github.com/some-react-components/react-scrollchor/blob/example/src/App.js#L24)
```js
<Scrollchor ref={ref => (this._back = ref)} to="_back" />
```
Ex: [calling `simulateClick()` on childrenless `ref`](https://github.com/some-react-components/react-scrollchor/blob/example/src/App.js#L17)
```js
_afterAnimate = () => {
  this.setState({ to: this._iterator.next().value });
    setTimeout(() => this._back.simulateClick(), 1000);
};
```

## Example

[react-scrollchor--example](https://github.com/some-react-components/react-scrollchor/tree/example)

## Credits

### author
* [@bySabi](https://github.com/bySabi)

### maintainers
* [@xehpuk](https://github.com/xehpuk)

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
