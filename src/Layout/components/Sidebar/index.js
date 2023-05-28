import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faList,
    faComputer,
    faHeadphones,
    faLaptop,
    faMobile,
    faTablet,
    faNewspaper,
    faPercent,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Sidebar() {
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
        {
            icon: <FontAwesomeIcon icon={faNewspaper} />,
            title: 'News',
            to: '/news',
        },
        {
            icon: <FontAwesomeIcon icon={faPercent} />,
            title: 'Promotion',
            to: '/promotion',
        },
    ];

    const renderItems = () => {
        return MENU_ITEMS.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <aside className={cx('wrapper')}>
            <PopperWrapper className={cx('menu-popper')}>
                <div className={cx('list')}>
                    <FontAwesomeIcon className={cx('list-icon')} icon={faList} />
                    Category
                </div>
                {renderItems()}
            </PopperWrapper>
        </aside>
    );
}

export default Sidebar;
