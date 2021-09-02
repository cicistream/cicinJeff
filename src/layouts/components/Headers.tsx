import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '@/stores/userInfo';
import { observer } from 'mobx-react';
import styles from './index.less';

const Headers: React.FC = () => {
    const banner = [
        {
            label: 'home',
            link: '/',
        },
        {
            label: 'about',
            link: '/about',
        },
        {
            label: 'exit',
            link: '/login',
        },
    ];

    const { baseInfo } = useUserStore();

    return (
        <div className={`text p-4 bg-purple-cyan ${styles.headerContainer}`}>
            <Link className="text-xl absolute uppercase" to="/">
                {baseInfo?.name || 'Jeff'} Blog
            </Link>
            <div className="absolute flex flex-row top-4 right-0">
                {banner.map((item) => (
                    <Link to={item.link} className="mr-6">
                        <p className="text-xl uppercase text-purple">
                            {item.label}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default observer(Headers);
