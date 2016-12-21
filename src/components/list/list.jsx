import React from 'react';

const cn = require('bem-cn')('list');
import './list.css';

export default class List extends React.Component {
    static sropTypes = {
        title: React.PropTypes.string,
        elements: React.PropTypes.array,
    }

    static defaultProps = {
        title: '',
        elements: [],
    }

    render() {
        return (
            <div className={cn.mix(this.props.className)}>
                <h4 className={cn('title')}>{this.props.title}</h4>
                <ul className={cn('list')}>
                    {this.props.elements.map((element, i) => (
                        <li 
                            key={i} 
                            className={cn('element')}
                        >
                            {element}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
