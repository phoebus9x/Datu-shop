import classNames from 'classnames/bind';
import styles from './Promotion.module.scss';

const cx = classNames.bind(styles);
function Promotion() {
    return (
        <div className={cx('wrapper')}>
            <h2>Promotion page</h2>
        </div>
    );
}

export default Promotion;
