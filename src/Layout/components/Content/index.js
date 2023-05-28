import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import Item from './Item';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Content({ API }) {
    const [results, setResults] = useState([]);
    const [fetched, setFetched] = useState(false);

    const fetchData = () => {
        if (fetched) {
            return;
        }

        fetch(API)
            .then((res) => res.json())
            .then((res) => {
                const data = Object.values(res);
                setResults(data);
                setFetched(true);
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        fetchData();
    });

    function compareByPrice(a, b) {
        return b.price_current - a.price_current;
    }

    results.sort(compareByPrice);

    return (
        <div className={cx('wrapper')}>
            {results.map((result) => (
                <Item item={result} />
            ))}
        </div>
    );
}

export default Content;
