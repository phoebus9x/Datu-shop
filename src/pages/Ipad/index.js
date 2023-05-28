import Filter from '~/components/Filter';
import Content from '~/Layout/components/Content';
import classNames from 'classnames/bind';
import styles from './Ipad.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function Ipad() {
    useEffect(() => {
        document.title = 'Ipad';
    });
    return (
        <div className={cx('wrapper')}>
            <Filter />
            <Content API="http://localhost:3000/ipads" />
        </div>
    );
}

export default Ipad;
