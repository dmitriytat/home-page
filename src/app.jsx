import React from 'react';

import Header from './containers/header.jsx';
import About from './containers/about.jsx';
import Links from './containers/links.jsx';
import Projects from "./containers/projects.jsx";

const cn = require('bem-cn')('app');
import './app.css';

import { translate, changeLanguage } from '../i18n/i18n';

export default class Application extends React.Component {
    state = {
        update: '',
        page: 'About',
    }

    render() {
        return (
            <div className={cn()}>
                <Header
                    onChangeLanguage={this.handleChangeLanguage.bind(this)}
                    onChangePage={this.handleChangePage.bind(this)}
                    page={this.state.page}
                />
                <div className={cn('content')}>
                    {this.state.page === 'About' && <About />}
                    {this.state.page === 'Links' && <Links />}
                    {this.state.page === 'Projects' && <Projects />}
                </div>
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

    handleChangePage(page) {
        this.setState({
            page,
        });
    }
}
