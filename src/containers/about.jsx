import React from 'react';

import Link from '../components/link/link.jsx';
import { translate } from '../../i18n/i18n';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <img
          src="/images/me.png"
          alt={translate('me')}
        />
        <br />
        <br />
        {translate('hello')}
        <br />
        <br />
        {translate('my-name')}
        <br />
        {translate('i-am')} <Link
        text={translate('funcorp')}
        href="https://www.linkedin.com/company/funcorp"
        target="_blank"
      />.
      </div>
    );
  }
}
