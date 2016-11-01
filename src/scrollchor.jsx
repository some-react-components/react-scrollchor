import React, { PropTypes } from 'react';
import animateScroll from './animatescroll';

export default class Scrollchor extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    animate: PropTypes.object,
    callback: PropTypes.func
  };

  handleClick = (event) => {
    event.preventDefault();

    const { animate, callback } = this.props;
    animateScroll(this._to, animate);
    if (callback) {
      callback();
    }
  };

  componentWillMount() {
    const { to = '' } = this.props;
    this._to = to.replace(/^#/, '');
  }

  render() {
    const { to, animate, ...props } = this.props;  // eslint-disable-line no-unused-vars
    return <a {...props} href={'#' + this._to} onClick={this.handleClick} />;
  }
}
