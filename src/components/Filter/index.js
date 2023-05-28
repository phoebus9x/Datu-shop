import styles from './Filter.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSortDown } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Filter() {
    const [showResult, setShowResult] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Sort by</span>
            <Button className={cx('btn')} small>
                Popular
            </Button>
            <Button className={cx('btn')} small>
                Latest
            </Button>
            <Button className={cx('btn')} small>
                Selling
            </Button>

            <HeadlessTippy
                interactive
                placement="bottom"
                visible={showResult}
                render={(attrs) => (
                    <div className={cx('select-result')} tabIndex="-1" {...attrs}>
                        <p className={cx('select-title')}>Price: Low To High</p>
                        <p className={cx('select-title')}>Price: High To Low</p>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div onClick={() => setShowResult(true)} className={cx('select-input')}>
                    <span>Price</span>
                    <FontAwesomeIcon icon={faSortDown} />
                </div>
            </HeadlessTippy>

            <div className={cx('page')}>
                <span className={cx('page-num')}>
                    <span className={cx('page-current')}>1</span>/10
                </span>
                <div className={cx('page-control')}>
                    <div className={cx('page-control__icon', 'page-control__icon--disabled')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
                    </div>
                    <div className={cx('page-control__icon')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
