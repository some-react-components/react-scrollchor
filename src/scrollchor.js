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

    const { animate } = this.props;

    animateScroll(this._to, animate);
  };

  componentWillMount() {
    const { to = '#' } = this.props;
    this._to = /^#/.test(to) ?  to : `#${to}`;
  }

  render() {
    return <a { ...this.props } href={this._to} onClick={this.handleClick}/>;
  }
}
