import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Menu from '~/components/Menu';
import Search from '~/Layout/components/Search';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo-list')}>
                    <Link to="/" className={cx('logo-link')}>
                        <img className={cx('logo-img')} src={images.logo} alt="Logo" />
                    </Link>
                    <Menu>
                        <div className={cx('list-btn')}>
                            <FontAwesomeIcon className={cx('list-icon')} icon={faList} />
                            Category
                        </div>
                    </Menu>
                </div>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    <Button to="/sign_up" text small target="_blank">
                        Sign up
                    </Button>
                    <Button to="/login" small target="_blank">
                        Login
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
