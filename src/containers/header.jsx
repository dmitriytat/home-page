import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn-lite';

import Link from '../components/link/link.jsx';
import { translate } from '../../i18n/i18n';
import './header.css';

const cn = block('header');

export default class Header extends React.Component {
  static propTypes = {
    languages: PropTypes.arrayOf(PropTypes.string),
    onChangeLanguage: PropTypes.func,
    onChangePage: PropTypes.func,
  };

  static defaultProps = {
    languages: ['en', 'ru'],
    onChangeLanguage: (language) => {
    },
    onChangePage: (page) => {
    },
  };

  render() {
    return (
      <div className={cn()}>
        <Link
          active={this.props.page === 'About'}
          text={translate('m-about')}
          header
          onClick={this.props.onChangePage.bind(this, 'About')}
        />
        <Link
          active={this.props.page === 'Links'}
          text={translate('m-links')}
          header
          onClick={this.props.onChangePage.bind(this, 'Links')}
        />
        <Link
          active={this.props.page === 'Projects'}
          text={translate('m-projects')}
          header
          onClick={this.props.onChangePage.bind(this, 'Projects')}
        />
        <span className={cn('settings')}>
          {
            this.props.languages.map(language => (
              <Link
                header
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
