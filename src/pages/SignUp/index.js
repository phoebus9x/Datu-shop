import styles from './SignUp.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SignUp() {
    useEffect(() => {
        document.title = 'Sign Up';
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

    // mail
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

    // password
    const [selectedPass, setSelectedPass] = useState(true);
    const [passValue, setPassValue] = useState('');
    const handleEmptyPass = (e) => {
        const pass = e.target.value;
        if (!pass) {
            setSelectedPass(false);
        } else if (pass.length <= 8) {
            setSelectedPass(false);
        } else {
            setPassValue(pass);
        }
    };
    const handleInputPass = () => {
        setSelectedPass(true);
    };

    //re-password
    const [selectedRePass, setSelectedRePass] = useState(true);
    const handleEmptyRePass = (e) => {
        const rePass = e.target.value;
        if (!rePass) {
            setSelectedRePass(false);
        } else if (rePass.length <= 8) {
            setSelectedRePass(false);
        } else if (!(rePass === passValue)) {
            setSelectedRePass(false);
        }
    };
    const handleInputRePass = () => {
        setSelectedRePass(true);
    };

    return (
        <div className={cx('main')}>
            <form to="/" method="post" className={cx('form')} id="form_sign-up">
                <h2 className={cx('heading')}>Register an account at DaTu-Shop online store</h2>
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
                        placeholder="Example: Phoebus9x"
                    ></input>
                    <span className={cx('form-message')}>Please enter your user name</span>
                </div>

                {/* email */}
                <div className={cx('form-group', !selectedMail ? 'invalid' : '')}>
                    <label for="email" className={cx('form-label')}>
                        Email
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
                        placeholder="Enter the password"
                    ></input>
                    <span className={cx('form-message')}>Please enter a value that is greater than 8 characters</span>
                </div>

                {/* password */}
                <div className={cx('form-group', !selectedRePass ? 'invalid' : '')}>
                    <label for="password_confirmation" className={cx('form-label')}>
                        Password
                    </label>
                    <input
                        onBlur={handleEmptyRePass}
                        onInput={handleInputRePass}
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        placeholder="Confirm your password"
                    ></input>
                    <span className={cx('form-message')}>The value entered is incorrect</span>
                </div>

                {/* button */}
                <Link to="/">
                    <input type="submit" value="sign up" className={cx('form-submit')}></input>
                </Link>
            </form>
        </div>
    );
}

export default SignUp;
