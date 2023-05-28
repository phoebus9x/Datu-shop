import classNames from 'classnames/bind';
import styles from './Accessory.module.scss';

const cx = classNames.bind(styles);
function Accessory() {
    return (
        <div className={cx('wrapper')}>
            <h2>Accessory page</h2>
        </div>
    );
}

export default Accessory;
