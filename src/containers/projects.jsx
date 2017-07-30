import React from 'react';

import Link from '../components/link/link.jsx';

const cn = require('bem-cn')('projects');
import './projects.css';
import { translate } from '../../i18n/i18n';

export default class Projects extends React.Component {
    render() {
        return (
            <div className={cn()}>
                <div className={cn('title')}>{translate('open-projects')}</div>
                <ul className={cn('list')}>
                    <li className={cn('point')}>
                        <span className={cn('desc')}>{translate('jedi-validate')}</span>
                        <Link
                            text="jedi-validate"
                            href="https://github.com/dmitriytat/jedi-validate"
                            target="_blank"
                        />
                        <a className={cn('badge')} href="https://www.npmjs.com/package/jedi-validate">
                            <img src="https://badge.fury.io/js/jedi-validate.svg" alt=""/>
                        </a>
                    </li>
                </ul>
                <div className={cn('title')}>{translate('projects')}</div>
                <ul>
                    <li className={cn('point')}>
                        <Link
                            text="webclinic.ru"
                            href="https://webclinic.ru"
                            target="_blank"
                        />
                        <span className={cn('desc')}>{translate('webclinic')}</span>
                    </li>
                    <li className={cn('point')}>
                        <Link
                            text="themoscowtimes.com"
                            href="https://themoscowtimes.com/"
                            target="_blank"
                        />
                        <span className={cn('desc')}>{translate('themoscowtimes')}</span>
                    </li>
                    <li className={cn('point')}>
                        <span className={cn('desc')}>...</span>
                    </li>
                    <li className={cn('point')}>
                        <span className={cn('desc')}>{translate('top-secret')}</span>
                    </li>
                </ul>
            </div>
        );
    }
}
