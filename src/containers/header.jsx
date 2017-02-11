import React from 'react';

import Link from '../components/link/link.jsx';
import { translate } from '../../i18n/i18n';

const cn = require('bem-cn')('header');
import './header.css';

export default class Header extends React.Component {
    static propTypes = {
        languages: React.PropTypes.arrayOf(React.PropTypes.string),
        onChangeLanguage: React.PropTypes.func,
        onChangePage: React.PropTypes.func,
    }

    static defaultProps = {
        languages: ['en', 'ru'],
        onChangeLanguage: language => {
        },
        onChangePage: page => {
        },
    }

    render() {
        return (
            <div className={cn()}>
                <Link
                    active={this.props.page === 'About'}
                    text={translate('m-about')}
                    header={true}
                    onClick={this.props.onChangePage.bind(this, 'About')}
                />
                <Link
                    active={this.props.page === 'Links'}
                    text={translate('m-links')}
                    header={true}
                    onClick={this.props.onChangePage.bind(this, 'Links')}
                />
                <span className={cn('settings')}>
                    {
                        this.props.languages.map(language => (
                            <Link
                                header={true}
                                key={language}
                                text={translate(language)}
                                onClick={this.props.onChangeLanguage.bind(this, language)}
                            />
                        ))
                    }
                </span>
            </div>
        );
    }
}
