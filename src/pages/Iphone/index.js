import Filter from '~/components/Filter';
import Content from '~/Layout/components/Content';
import classNames from 'classnames/bind';
import styles from './Iphone.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function Iphone() {
    useEffect(() => {
        document.title = 'Iphone';
    });
    return (
        <div className={cx('wrapper')}>
            <Filter />
            <Content API="http://localhost:3000/iphones" />
        </div>
    );
}

export default Iphone;
