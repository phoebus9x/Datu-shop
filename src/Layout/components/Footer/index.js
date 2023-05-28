import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('grid-1')}>
                    <h3 className={cx('heading')}>DaTu Shop</h3>
                    <p className={cx('info')}>
                        Welcome to DaTuShop, your one-stop online destination for all things Apple! At DaTuShop, we
                        pride ourselves on offering a wide range of premium Apple products, including iPhones, MacBooks,
                        iPads, Apple Watches, and more. With our passion for technology and commitment to customer
                        satisfaction, we strive to provide the best shopping experience for all Apple enthusiasts.
                    </p>
                </div>
                <div className={cx('grid-2')}>
                    <h3 className={cx('heading')}>Information about us</h3>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>Introduction about the company</li>
                        <li className={cx('item')}>Contact us</li>
                        <li className={cx('item')}>Store system</li>
                        <li className={cx('item')}>Recruitment information</li>
                        <li className={cx('item')}>Purchase policy</li>
                        <li className={cx('item')}>Warranty policy</li>
                    </ul>
                </div>
                <div className={cx('grid-3')}>
                    <h3 className={cx('heading')}>Contact phone number</h3>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            Call for purchase: <strong>0123456789</strong>
                        </li>
                        <li className={cx('item')}>
                            Call for warranty: <strong>0123456789</strong>
                        </li>
                        <li className={cx('item')}>
                            Technical support: <strong>0123456789</strong>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('content')}>
                <span className={cx('title')}>Copyright &copy; 2023. DaTu-Shop</span>
                <div className={cx('btn')}>
                    <a className={cx('icon')} href="https://www.facebook.com/doanhtu0512">
                        <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                    </a>
                    <a className={cx('icon')} href="https://www.facebook.com/doanhtu0512">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a className={cx('icon')} href="https://www.facebook.com/doanhtu0512">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className={cx('icon')} href="https://www.facebook.com/doanhtu0512">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
