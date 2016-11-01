import React, { PropTypes } from 'react';
import warning from 'fbjs/lib/warning';
import { getScrollTop, setScrollTop, getOffsetTop } from './utils';

export default class Scrollchor extends React.Component {
  constructor(props) {
    super(props);
    this._to = props.to && props.to.replace(/^#/, '') || '';
    const {
      offset = 0, duration = 400, easing = easeOutQuad,
      beforeHook = () => {},
      afterHook = () => {}
    } = props.animate || {};
    this._beforeHook = beforeHook;
    this._afterHook = afterHook;
    this._animate = { offset, duration, easing };
  }

  static propTypes = {
    to: PropTypes.string.isRequired,
    animate: PropTypes.shape({
      offset: PropTypes.number,
      duration: PropTypes.number,
      easing: PropTypes.func,
      beforeHook: PropTypes.func,
      afterHook: PropTypes.func
    })
  };

  handleClick = (event) => {
    this._beforeHook(event);

    event.preventDefault();
    animateScroll(this._to, this._animate);

    this._afterHook(event);
  }

  render() {
    const { to, animate, ...props } = this.props;  // eslint-disable-line no-unused-vars
    return <a {...props} href={'#' + this._to} onClick={this.handleClick} />;
  }
}

function animateScroll(id, animate) {
  const element = id ? document.getElementById(id) : document.body;

  warning(element, `Cannot find element: #${id}`);

  scrollTo(element, animate);
}

function scrollTo(element, { offset, duration, easing }) {
  const start = getScrollTop();
  const to = getOffsetTop(element) + offset;
  const change = to - start;
  const increment = 20;

  function animate(elapsedTime) {
    const elapsed = elapsedTime + increment;
    const position = easing(null, elapsed, start, change, duration);

    setScrollTop(position);

    if (elapsed < duration) {
      setTimeout(function() {
        animate(elapsed);
      }, increment);
    }
  }

  animate(0);
}

// Default easing function
// jQuery easing 'swing'
function easeOutQuad(x, t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}
