# react-scrollchor
A React component for animate scroll to #hash link

## Installation

```
$ npm install react-scrollchor --save
```

## Description
Scrollchor is the mix of `Scroll` and `Anchor`, more funny joke name that anyone would found. It can be change if you want, just:
```
import MyBetterScrollchorNanme from 'react-scrollchor' 
```

## Usage

```
...
import Scrollchor from 'react-scrollchor';
...
export default (props) => (
  <Page>

    <Head />

    <Navbar brand={brand} className="navbar-fixed-top">
      <NavItem><Scrollchor to="" className="nav-link">Home</Scrollchor></NavItem>
      <NavItem><Scrollchor to="#sample-code" className="nav-link">Sample</Scrollchor></NavItem>
      <NavItem><Scrollchor to="#features" className="nav-link">Features</Scrollchor></NavItem>
      <NavItem><Scrollchor to="#signup" className="nav-link">SignUp</Scrollchor></NavItem>
    </Navbar>

  ....
  <Section id="sample-code">
  ....
  </Section>

  <Section id="features">
  ....
  </Section>

  <Section id="signup">
  ....
  </Section>

</Page>
```

# Custom animation

Animate behavior can be customize per each `#hash link`.

Ex:

```
<Scrollchor to="#aboutus" animate={{offset: 20, duration: 600}} className="nav-link">Home</Scrollchor>
```

### default animation
```
{ offset: 0, duration: 400, easing: easeOutQuad }
```
This setting is equivalent to default jQuery.animate `easing: swing`

## Easing functions links

* [jQuery easings](http://api.jqueryui.com/easings/)
* [Robert Penner's Easing Functions](http://robertpenner.com/easing/)
* [Javascript source code](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js)

## Contributing
* Documentation improvement
* Feel free to send any PR

## LICENSE
MIT
