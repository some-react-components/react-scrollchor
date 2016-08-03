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

  componentWillMount() {
    const { to = '' } = this.props;
    this._href = /^#/.test(to) && to || `#{to}`;
  }

  render() {
    const { to, ...props } = this.props;

    return <a { ...this.props } href={this._href} onClick={this.handleClick}/>;
  }
}
