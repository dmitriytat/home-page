import React from 'react';

const cn = require('bem-cn')('header');
import './header.css';

export default class Header extends React.Component {
    static sropTypes = {
        languages: React.PropTypes.arrayOf(React.PropTypes.string),
        onChangeLanguage: React.PropTypes.func,
    }

    static defaultProps = {
        languages: ['en', 'ru'],
        onChangeLanguage: language => {}
    }

    render() {
        return (
            <div className={cn()}>
                {
                    this.props.languages.map(language => (
                        <button
                            className={cn('button')}
                            key={language}
                            onClick={this.props.onChangeLanguage.bind(this, language)}
                        >
                            {language}
                        </button>
                    ))
                }
            </div>
        );
    }
}
