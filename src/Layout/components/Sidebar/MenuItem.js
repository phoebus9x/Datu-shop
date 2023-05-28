import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Link className={cx('menu-item')} to={data.to}>
            <div className={cx('menu-icon')}>{data.icon}</div>
            {data.title}
        </Link>
    );
}

export default MenuItem;
