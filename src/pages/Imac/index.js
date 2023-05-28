import Filter from '~/components/Filter';
import Content from '~/Layout/components/Content';
import classNames from 'classnames/bind';
import styles from './Imac.module.scss';
import { useEffect } from 'react';
const cx = classNames.bind(styles);
function Imac() {
    useEffect(() => {
        document.title = 'Imac';
    });
    return (
        <div className={cx('wrapper')}>
            <Filter />
            <Content API="http://localhost:3000/imacs" />
        </div>
    );
}

export default Imac;
