import Filter from '~/components/Filter';
import Content from '~/Layout/components/Content';
import classNames from 'classnames/bind';
import styles from './Macbook.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function Macbook() {
    useEffect(() => {
        document.title = 'Macbook';
    });
    return (
        <div className={cx('wrapper')}>
            <Filter />
            <Content API="http://localhost:3000/macbooks" />
        </div>
    );
}

export default Macbook;
