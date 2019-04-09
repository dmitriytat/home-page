import React from 'react';
import block from 'bem-cn-lite';

import Link from '../components/link/link.jsx';
import './links.css';
import { translate } from '../i18n/i18n';

const cn = block('links');

export default class Links extends React.Component {
  render() {
    return (
      <div className={cn()}>
        <div className={cn('title')}>{translate('links')}</div>
        <ul>
          <li className={cn('point')}>
            <span className={cn('desc')}>{translate('my-projects')}</span>
            <Link
              text="github:dmitriytat"
              href="https://github.com/dmitriytat"
              target="_blank"
            />
          </li>
          <li className={cn('point')}>
            <span className={cn('desc')}>{translate('my-linkedin')}</span>
            <Link
              text="linkedin:dmitriytat"
              href="https://linkedin.com/in/dmitriytat"
              target="_blank"
            />
          </li>
          <li className={cn('point')}>
            <span className={cn('desc')}>{translate('my-facebook')}</span>
            <Link
              text="fb:dmitriytat"
              href="https://fb.com/dmitriytat"
              target="_blank"
            />
          </li>
          <li className={cn('point')}>
            <span className={cn('desc')}>{translate('my-codewars')}</span>
            <Link
              text="codewars:dmitriytat"
              href="https://www.codewars.com/users/dmitriytat"
              target="_blank"
            />
          </li>
        </ul>
      </div>
    );
  }
}
