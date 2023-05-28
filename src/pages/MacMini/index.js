import Filter from '~/components/Filter';
import Content from '~/Layout/components/Content';
import classNames from 'classnames/bind';
import styles from './MacMini.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function MacMini() {
    useEffect(() => {
        document.title = 'Mac Mini';
    });
    return (
        <div className={cx('wrapper')}>
            <Filter />
            <Content API="http://localhost:3000/mac_mini" />
        </div>
    );
}

export default MacMini;
