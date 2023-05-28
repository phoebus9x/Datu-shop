import classNames from 'classnames/bind';
import styles from './Pay.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Order() {
    useEffect(() => {
        document.title = 'Pay';
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

    const [selectedUserName, setSelectedUserName] = useState(true);
    const handleEmptyUserName = (e) => {
        if (!e.target.value.trim()) {
            setSelectedUserName(false);
        }
    };
    const handleInputUserName = () => {
        setSelectedUserName(true);
    };

    const [selectedNumber, setSelectedNumber] = useState(true);
    const handleEmptyNumber = (e) => {
        if (!e.target.value.trim()) {
            setSelectedNumber(false);
        }
    };
    const handleInputNumber = () => {
        setSelectedNumber(true);
    };

    const [selectedAddress, setSelectedAddress] = useState(true);
    const handleEmptyAddress = (e) => {
        if (!e.target.value.trim()) {
            setSelectedAddress(false);
        }
    };
    const handleInputAddress = () => {
        setSelectedAddress(true);
    };

    const [selectedMail, setSelectedMail] = useState(true);
    const handleEmptyMail = (e) => {
        const mail = e.target.value;
        console.log(mail);
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!mail) {
            setSelectedMail(false);
        } else if (!regex.test(mail)) {
            setSelectedMail(false);
        }
    };
    const handleInputMail = () => {
        setSelectedMail(true);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <img src={item.image} alt="photoooo" className={cx('heading-img')} />
                <div className={cx('heading-title-price')}>
                    <h4 className={cx('heading-title')}>{item.title}</h4>
                    <span className={cx('heading-price')}>{item.price_current}$</span>
                </div>
                <Link
                    className={cx('heading-del')}
                    to="/"
                    onClick={() => {
                        localStorage.clear();
                    }}
                >
                    <p className={cx('heading-del')}>Delete</p>
                </Link>
            </div>
            <div className={cx('content')}>
                <div className={cx('content-price')}>
                    <span className={cx('content-price-title')}>Total payment:</span>
                    <span className={cx('content-price-current')}>{item.price_current}$</span>
                </div>
                <h4>CUSTOMER INFORMATION</h4>
                {/* full name */}
                <div className={cx('form-group', !selectedUserName ? 'invalid' : '')}>
                    <label for="fullname" className={cx('form-label')}>
                        Your full name
                    </label>
                    <input
                        onBlur={handleEmptyUserName}
                        onInput={handleInputUserName}
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="Enter your full name"
                    ></input>
                    <span className={cx('form-message')}>Please enter your full name</span>
                </div>

                {/* phone number */}
                <div className={cx('form-group', !selectedNumber ? 'invalid' : '')}>
                    <label for="phonenumber" className={cx('form-label')}>
                        Your phone number
                    </label>
                    <input
                        onBlur={handleEmptyNumber}
                        onInput={handleInputNumber}
                        type="text"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="Enter your phone number"
                    ></input>
                    <span className={cx('form-message')}>Please enter your phone number</span>
                </div>

                {/* Email */}
                <div className={cx('form-group', !selectedMail ? 'invalid' : '')}>
                    <label for="email" className={cx('form-label')}>
                        Your Email
                    </label>
                    <input
                        onBlur={handleEmptyMail}
                        onInput={handleInputMail}
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Example: abc.123@gmail.com"
                    ></input>
                    <span className={cx('form-message')}>Please enter your Email</span>
                </div>

                <h4>Choose a delivery method</h4>
                <div className={cx('form-check')}>
                    <input type="radio" name="delivery" id="home" value="home" checked />
                    <label for="home">Assigned site</label>
                    <input type="radio" name="delivery" id="store" value="store" />
                    <label for="store">Pick up at the store</label>
                    <br />
                </div>

                {/* address */}
                <div className={cx('form-group', !selectedAddress ? 'invalid' : '')}>
                    <label for="address" className={cx('form-label')}>
                        Your address
                    </label>
                    <input
                        onBlur={handleEmptyAddress}
                        onInput={handleInputAddress}
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Enter your address"
                    ></input>
                    <span className={cx('form-message')}>Please enter your address</span>
                </div>

                {/* request */}
                <div className={cx('form-group')}>
                    <input
                        type="text"
                        name="request"
                        id="request"
                        placeholder="Do you have any other requests? (optional)"
                    ></input>
                </div>
            </div>
            <Link
                to="/"
                onClick={() => {
                    localStorage.clear();
                }}
            >
                <input type="submit" value="Pay" className={cx('form-submit')}></input>
            </Link>
        </div>
    );
}

export default Order;
