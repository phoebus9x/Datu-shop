import classNames from 'classnames/bind';
import Header from '~/Layout/components/Header';
import styles from './HeaderFooter.module.scss';
import Footer from '~/Layout/components/Footer';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function HeaderFooter({ children }) {
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
            {showGoToTop && (
                <button
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    }}
                    className={cx('btn-top')}
                >
                    Go to top
                </button>
            )}
        </div>
    );
}

export default HeaderFooter;
