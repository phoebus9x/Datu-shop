import classNames from 'classnames/bind';
import styles from './News.module.scss';

const cx = classNames.bind(styles);
function News() {
    return (
        <div className={cx('wrapper')}>
            <h2>News page</h2>
        </div>
    );
}

export default News;
