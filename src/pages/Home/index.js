import Filter from '~/components/Filter';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Content from '~/Layout/components/Content';

import { useEffect } from 'react';

const cx = classNames.bind(styles);
function Home() {
    useEffect(() => {
        document.title = 'DaTu Shop';
    });
    return (
        <div className={cx('wrapper')}>
            <Filter />
            <Content API="http://localhost:3000/iphones" />
        </div>
    );
}

export default Home;
