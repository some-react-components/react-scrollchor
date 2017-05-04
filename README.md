# react-scrollchor (React Scrollchor)

[![npm version](https://badge.fury.io/js/react-scrollchor.svg)](https://badge.fury.io/js/react-scrollchor)
[![npm downloads](https://img.shields.io/npm/dm/react-scrollchor.svg?style=flat-square)](https://www.npmjs.com/package/react-scrollchor)
[![bitHound Overall Score](https://www.bithound.io/github/bySabi/react-scrollchor/badges/score.svg)](https://www.bithound.io/github/bySabi/react-scrollchor)
[![Donate](https://img.shields.io/badge/$-support-green.svg?style=flat-square)](https://paypal.me/bySabi/10)

> A React component for scroll to `#hash` links with smooth animations. Scrollchor is a mix of `Scroll` and `Anchor`, a joke name for a useful component.

See it in action:
* demo [video](https://github.com/bySabi/react-scrollchor/blob/example/demo/scrollchor.webm?raw=true)
* example [page](https://bySabi.github.com/react-scrollchor/) and [source code](https://github.com/bySabi/react-scrollchor/tree/example)


## hash
`hash` is the `id` of a HTML tag on current page

## Installation

### npm

```bash
npm install react-scrollchor --save
```

### Dependencies
* User should provide its  own `React` package


#### `fbjs` package
[fbjs](https://www.npmjs.com/package/fbjs) is a collection of utility libraries created by React Team. It include useful modules like `warning` and `invariant`


## Usage

```javascript
import Scrollchor from 'react-scrollchor';
```
```javascript
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

# Prop types
```javascript
  propTypes: {

    /**
     * id of tag scroll target node
     * - starting `#` can be omited
     * - this prop is required
     * - let it blank, `to = ''`, for scroll to page top
     */
    to: PropTypes.string.isRequired,

    /**
     * scroll smooth animation can be customize
     * Accepted options:
     *  { offset: 0, duration: 400, easing: easeOutQuad }
     */
    animate: PropTypes.object,

    /**
     * callback function triggered before scroll to #hash
     */
    beforeAnimate: PropTypes.func,

    /**
     * callback function triggered after scroll to #hash
     */
    afterAnimate: PropTypes.func
}
```

# Custom animation

Animated behavior can be customize on each `#hash link` instance.

```javascript
<Scrollchor to="#aboutus" animate={{offset: 20, duration: 600}} className="nav-link">Home</Scrollchor>
```

## default animation config
```javascript
{ offset: 0, duration: 400, easing: easeOutQuad }
```
This setting is equivalent to default jQuery.animate `easing: swing`

## more `Easing` functions

* [jQuery easings](http://api.jqueryui.com/easings/)
* [Robert Penner's Easing Functions](http://robertpenner.com/easing/)
* [Javascript source code](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js)

## `before` and `after` animate callbacks
Use this callbacks to trigger behaviours like, for example, update state, load async stuffs, etc.
```javascript
<Scrollchor to="#aboutus" afterAnimate={() => updateState(this)}>Home</Scrollchor>
```

## Example

[react-scrollchor--example](https://github.com/bySabi/react-scrollchor/tree/example)

## Contributing

* Documentation improvement
* Feel free to send any PR

## License

[ISC][isc-license]

[isc-license]:./LICENSE
