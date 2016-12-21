import React from 'react';

import Header from './containers/header.jsx';
import Link from './components/link/link.jsx';
import List from './components/list/list.jsx';

import './reset.css';

const cn = require('bem-cn')('app');
import './app.css';

import { translate, changeLanguage } from '../i18n/i18n';

export default class Application extends React.Component {
    state = {
        update: ''
    }

    render() {
        return (
            <div className={cn()}>
                <Header onChangeLanguage={this.handleChangeLanguage.bind(this)}/>
                <List
                    className={cn('list')}
                    title={translate('links')}
                    elements={[
                        <Link
                            href="https://github.com/dmitriytat"
                        />,
                        <Link
                            href="https://vk.com/dmitriytat"
                        />,
                        <Link
                            href="https://fb.com/dmitriytat"
                        />,
                        <Link
                            href="https://www.codewars.com/users/dmitriytat"
                        />
                    ]}
                />
            </div>
        );
    }

    handleChangeLanguage(language) {
        changeLanguage(language, () => {
            this.setState({
                update: Date.now(),
            })
        });
    }
}
