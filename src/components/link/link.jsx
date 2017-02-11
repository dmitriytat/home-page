import React from 'react';

const cn = require('bem-cn')('link');
import './link.css';

const TARGETS = ['_blank', '_self', '_parent', '_top'];

export default class Link extends React.Component {
    static sropTypes = {
        text: React.PropTypes.string,
        href: React.PropTypes.string,
        target: React.PropTypes.oneOf(TARGETS),
        onClick: React.PropTypes.func,
    }

    static defaultProps = {
        text: '',
        href: '#',
        target: TARGETS[1],
        onClick: () => {},
    }

    render() {
        return (
            <a
                href={this.props.href}
                className={cn({header: this.props.header, active: this.props.active})}
                onClick={this.props.onClick}
                target={this.props.target}
            >
                {this.props.text || this.props.href}
            </a>
        );
    }
}
