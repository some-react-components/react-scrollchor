import React, { PropTypes } from 'react';
import animateScroll from './animatescroll';

export default class Scrollchor extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    animate: PropTypes.object
  };

  handleClick = (event) => {
    event.preventDefault();

    const { animate } = this.props;
    animateScroll(this._to, animate);
  };

  componentWillMount() {
    const { to = '' } = this.props;
    this._to = to.replace(/^#/, '');
  }

  render() {
    return <a {...this.props} href={'#' + this._to} onClick={this.handleClick} />;
  }
}
