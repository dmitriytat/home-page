import React from 'react';
import block from 'bem-cn-lite';
import PropTypes from 'prop-types';
import './link.css';

const cn = block('link');

const TARGETS = ['_blank', '_self', '_parent', '_top'];

export default class Link extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.oneOf(TARGETS),
    onClick: PropTypes.func,
  };

  static defaultProps = {
    text: '',
    href: '#',
    target: TARGETS[1],
    onClick: () => {},
  };

  render() {
    return (
      <a
        href={this.props.href}
        className={cn({ header: this.props.header, active: this.props.active })}
        onClick={this.props.onClick}
        target={this.props.target}
      >
        {this.props.text || this.props.href}
      </a>
    );
  }
}
