import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import Button from '~/components/Button';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faGift, faShield, faTruckFast, faWindowRestore } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Order() {
    useEffect(() => {
        document.title = 'Order';
    });
    const item = {
        id: localStorage.getItem('id'),
        name: localStorage.getItem('name'),
        title: localStorage.getItem('title'),
        price_old: localStorage.getItem('price_old'),
        price_current: localStorage.getItem('price_current'),
        like: localStorage.getItem('like'),
        star: localStorage.getItem('star'),
        image: localStorage.getItem('image'),
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <h4 className={cx('heading-title')}>{item.title}</h4>
            </div>
            <div className={cx('row')}>
                <div className={cx('column')}>
                    <div className={cx('sample')}>
                        <img className={cx('sample-image')} src={item.image} alt="ảnh" />
                    </div>
                    <div className={cx('policies')}>
                        <div className={cx('policy')}>
                            <FontAwesomeIcon className={cx('policy-icon')} icon={faShield} />
                            <p className={cx('policy-content')}>12-month comprehensive warranty</p>
                        </div>
                        <div className={cx('policy')}>
                            <FontAwesomeIcon className={cx('policy-icon')} icon={faWindowRestore} />
                            <p className={cx('policy-content')}>Lifetime software support</p>
                        </div>
                        <div className={cx('underline')}></div>
                        <div className={cx('policy')}>
                            <FontAwesomeIcon className={cx('policy-icon')} icon={faBoxArchive} />
                            <p className={cx('policy-content')}>Free software installation</p>
                        </div>
                        <div className={cx('policy')}>
                            <FontAwesomeIcon className={cx('policy-icon')} icon={faTruckFast} />
                            <p className={cx('policy-content')}>Fast delivery</p>
                        </div>
                    </div>
                </div>
                <div className={cx('column')}>
                    <div className={cx('price')}>
                        <p className={cx('price-old')}>{item.price_old}$</p>
                        <p className={cx('price-current')}>{item.price_current}$</p>
                    </div>
                    <p>choose color:</p>
                    <div className={cx('color-btns')}>
                        <Button className={cx('color-btn')} outline small>
                            Silver
                        </Button>
                        <Button className={cx('color-btn')} outline small>
                            Gray
                        </Button>
                        <Button className={cx('color-btn')} outline small>
                            Gold
                        </Button>
                    </div>
                    <Button to="/pay" className={cx('buy-btn')} primary large>
                        BUY
                    </Button>
                </div>
                <div className={cx('column')}>
                    <div className={cx('gift')}>
                        <div className={cx('gift-heading')}>
                            <FontAwesomeIcon className={cx('gift-heading-icon')} icon={faGift} />
                            <p className={cx('gift-heading-name')}>Promotion policy</p>
                        </div>

                        <ul className={cx('gift-list')}>
                            <li className={cx('gift-item')}>
                                1. Offer up to <strong>50$</strong> for loyal customers of <strong>DaTu</strong>
                            </li>
                            <li className={cx('gift-item')}>
                                2. Old collection to renew, subsidize <strong>100$</strong>
                            </li>
                            <li className={cx('gift-item')}>3. Support 0% Installment via Credit Card</li>
                            <li className={cx('gift-item')}>
                                4. Instant discount of <strong>10$</strong> when buying with{' '}
                                <strong>headphones Apple Airpods 3, headphones</strong>
                            </li>
                            <li className={cx('gift-item')}>
                                5. Instant discount of <strong>10$</strong> when buying with{' '}
                                <strong>Airpods Pro 2</strong>
                            </li>
                            <li className={cx('gift-item')}>
                                6. Instant discount of <strong>10$</strong> when buying with{' '}
                                <strong>Shockproof Bag, Tomtoc Backpack</strong>
                            </li>
                            <li className={cx('gift-item')}>
                                7. Instant discount of <strong>10$</strong> when buying with{' '}
                                <strong>Apple Trackpad 2 Silver</strong>
                            </li>
                            <li className={cx('gift-item')}>
                                8. Instant discount of <strong>10$</strong> when buying with{' '}
                                <strong>Magic Mouse 2</strong>
                            </li>
                        </ul>
                    </div>
                    <p className={cx('hotline')}>
                        Hotline <strong>012.3456.789</strong> 08:30 - 22:00
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Order;
