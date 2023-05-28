import Filter from '~/components/Filter';
import Content from '~/Layout/components/Content';
import classNames from 'classnames/bind';
import styles from './MacStudio.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function MacStudio() {
    useEffect(() => {
        document.title = 'Mac Studio';
    });
    return (
        <div className={cx('wrapper')}>
            <Filter />
            <Content API="http://localhost:3000/mac_studio" />
        </div>
    );
}

export default MacStudio;
