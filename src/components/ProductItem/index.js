import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductItem({ data }) {
    return (
        <Link to={`/@${data.name}`} className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
            <div className={cx('info')}>
                <p className={cx('name')}>{data.title}</p>
            </div>
        </Link>
    );
}

export default ProductItem;
