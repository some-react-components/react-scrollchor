import React from 'react';
import animateScroll from './animatescroll';

const { object, string } = React.PropTypes;

export default class Scrollchor extends React.Component {
  static propTypes = {
    to: string.isRequired,
    animate: object
  };

  handleClick = event => {
    event.preventDefault();

    const { to, animate } = this.props;

    animateScroll(to, animate);
  };

  render() {
    const { to, ...props } = this.props;

    return <a href={'#' + to} {...props} onClick={this.handleClick}/>;
  }
}
