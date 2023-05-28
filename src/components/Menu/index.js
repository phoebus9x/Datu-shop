import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem from './MenuItem';
import Tippy from '@tippyjs/react/headless';
import { faComputer, faHeadphones, faLaptop, faMobile, faTablet } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Menu({ children }) {
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faLaptop} />,
            title: 'Macbook',
            to: '/macbook',
        },
        {
            icon: <FontAwesomeIcon icon={faComputer} />,
            title: 'iMac',
            to: '/imac',
        },
        {
            icon: <FontAwesomeIcon icon={faComputer} />,
            title: 'Mac Studio',
            to: '/macstudio',
        },
        {
            icon: <FontAwesomeIcon icon={faComputer} />,
            title: 'Mac Mini',
            to: '/macmini',
        },
        {
            icon: <FontAwesomeIcon icon={faMobile} />,
            title: 'Iphone',
            to: '/iphone',
        },
        {
            icon: <FontAwesomeIcon icon={faTablet} />,
            title: 'Ipad',
            to: '/ipad',
        },
        {
            icon: <FontAwesomeIcon icon={faHeadphones} />,
            title: 'Accessory',
            to: '/accessory',
        },
    ];

    const renderItems = () => {
        return MENU_ITEMS.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            trigger="click"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
