/* eslint-disable react/jsx-no-bind,jsx-a11y/anchor-is-valid,react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn-lite';

import Link from '../components/link/link.jsx';
import { translate } from '../i18n/i18n';
import './header.css';

const cn = block('header');

export default class Header extends React.Component {
  static propTypes = {
    languages: PropTypes.arrayOf(PropTypes.string),
    onChangeLanguage: PropTypes.func,
    onChangePage: PropTypes.func,
    page: PropTypes.string,
    lang: PropTypes.string,
  };

  static defaultProps = {
    languages: ['en', 'ru'],
    page: 'About',
    // eslint-disable-next-line no-unused-vars
    onChangeLanguage: (language) => {},
    // eslint-disable-next-line no-unused-vars
    onChangePage: (page) => {},
  };

  render() {
    return (
      <nav className={cn()}>
        <ul className={cn('menu')}>
          <li className={cn('link')}>
            <Link
              active={this.props.page === 'About'}
              text={translate('m-about')}
              header
              onClick={this.props.onChangePage.bind(this, 'About')}
            />
          </li>
          <li className={cn('link')}>
            <Link
              active={this.props.page === 'Links'}
              text={translate('m-links')}
              header
              onClick={this.props.onChangePage.bind(this, 'Links')}
            />
          </li>
          <li className={cn('link')}>
            <Link
              active={this.props.page === 'Projects'}
              text={translate('m-projects')}
              header
              onClick={this.props.onChangePage.bind(this, 'Projects')}
            />
          </li>
        </ul>
        <span className={cn('settings')}>
          {
            this.props.languages.map(language => (
              <Link
                header
                active={this.props.lang === language}
                key={language}
                text={translate(language)}
                onClick={this.props.onChangeLanguage.bind(this, language)}
              />
            ))
          }
        </span>
      </nav>
    );
  }
}
