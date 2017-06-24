import React from "react";
import PropTypes from "prop-types";
import { animateScroll } from "./utils";

export default class Scrollchor extends React.Component {
  constructor(props) {
    super(props);
    this._setup(props);
    this.simulateClick = this._handleClick;
  }

  static propTypes = {
    to: PropTypes.string.isRequired,
    animate: PropTypes.shape({
      offset: PropTypes.number,
      duration: PropTypes.number,
      easing: PropTypes.func
    }),
    beforeAnimate: PropTypes.func,
    afterAnimate: PropTypes.func
  };

  _setup = props => {
    this._to = (props.to && props.to.replace(/^#/, "")) || "";
    const {
      // default animate object
      offset = 0,
      duration = 400,
      easing = easeOutQuad
    } =
      props.animate || {};
    this._animate = { offset, duration, easing };
    this._beforeAnimate = props.beforeAnimate || function() {};
    this._afterAnimate = props.afterAnimate || function() {};
  };

  _handleClick = event => {
    this._beforeAnimate(event);
    event && event.preventDefault();
    animateScroll(this._to, this._animate);
    this._afterAnimate(event);
  };

  componentWillReceiveProps(props) {
    this._setup(props);
  }

  render() {
    const { to, animate, beforeAnimate, afterAnimate, ...props } = this.props; // eslint-disable-line no-unused-vars

    return !this.props.children
      ? null
      : <a {...props} href={"#" + this._to} onClick={this._handleClick} />;
  }
}

// Default easing function
// jQuery easing 'swing'
function easeOutQuad(x, t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}
