import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Item({ item }) {
    const divStyle = {
        backgroundImage: `url(${item.image})`,
    };
    const saveStorage = () => {
        localStorage.setItem('id', item.id);
        localStorage.setItem('name', item.name);
        localStorage.setItem('title', item.title);
        localStorage.setItem('price_old', item.price_old);
        localStorage.setItem('price_current', item.price_current);
        localStorage.setItem('like', item.like);
        localStorage.setItem('star', item.star);
        localStorage.setItem('image', item.image);
    };
    const renderedStar = [];
    for (let index = 0; index < item.star; index++) {
        renderedStar.push(<FontAwesomeIcon icon={faStar} />);
    }
    return (
        <div className={cx('grid__column')}>
            <Link to="/order" className={cx('product-item')} onClick={saveStorage}>
                <div className={cx('product-item__img')} style={divStyle}></div>
                <h4 className={cx('product-item__name')}>{item.title}</h4>
                <div className={cx('product-item__price')}>
                    <span className={cx('product-item__price-old')}>{item.price_old}$</span>
                    <span className={cx('product-item__price-current')}>{item.price_current}$</span>
                </div>
                <div className={cx('product-item__action')}>
                    {item.like && <FontAwesomeIcon className={cx('product-item__like')} icon={faHeart} />}
                    <div className={cx('product-item__rating')}>{renderedStar}</div>
                </div>
            </Link>
        </div>
    );
}

export default Item;
