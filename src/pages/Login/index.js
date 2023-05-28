import styles from '~/pages/SignUp/SignUp.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    useEffect(() => {
        document.title = 'Login';
    });
    // username
    const [selectedUserName, setSelectedUserName] = useState(true);
    const handleEmptyUserName = (e) => {
        if (!e.target.value.trim()) {
            setSelectedUserName(false);
        }
    };
    const handleInputUserName = () => {
        setSelectedUserName(true);
    };

    // password
    const [selectedPass, setSelectedPass] = useState(true);

    const handleEmptyPass = (e) => {
        const pass = e.target.value;
        if (!pass) {
            setSelectedPass(false);
        }
    };
    const handleInputPass = () => {
        setSelectedPass(true);
    };

    return (
        <div className={cx('main')}>
            <form to="/" method="post" className={cx('form')} id="form_sign-up">
                <h2 className={cx('heading')}>Login to Datu-Shop online store</h2>
                <p className={cx('description')}>
                    Cùng nhau chia sẻ kiến thức miễn phí tại đây.
                    <br />
                    Cho đi là còn mãi❤️
                </p>
                <div className={cx('spacer')}></div>

                {/* user name  */}
                <div className={cx('form-group', !selectedUserName ? 'invalid' : '')}>
                    <label for="fullname" className={cx('form-label')}>
                        User name
                    </label>
                    <input
                        onBlur={handleEmptyUserName}
                        onInput={handleInputUserName}
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="Enter your user name"
                    ></input>
                    <span className={cx('form-message')}>Please enter your user name</span>
                </div>

                {/* password */}
                <div className={cx('form-group', !selectedPass ? 'invalid' : '')}>
                    <label for="password" className={cx('form-label')}>
                        Password
                    </label>
                    <input
                        onBlur={handleEmptyPass}
                        onInput={handleInputPass}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                    ></input>
                    <span className={cx('form-message')}>Please enter your password</span>
                </div>

                {/* error message */}
                <span className={cx('error-message')}>
                    Your password or user name is incorrect. Please check again.
                </span>

                {/* button */}
                <Link to="/">
                    <input type="submit" value="Login" className={cx('form-submit')}></input>
                </Link>
            </form>
        </div>
    );
}

export default Login;
