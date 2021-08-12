import React from 'react';
import { Link } from 'react-router-dom';
import { UserInfo } from '../../utils/global';
import styles from './index.less';

type IHeaderProps = {
    userInfo?: UserInfo;
};

const Headers: React.FC<IHeaderProps> = ({ userInfo }) => {
    const banner = [
        {
            label: 'home',
            link: '/',
        },
        {
            label: 'about',
            link: '/about',
        },
    ];
    return (
        <div className={`p-4 bg-purple-cyan ${styles.headerContainer}`}>
            <Link className="text-2xl  absolute uppercase" to="/">
                {userInfo?.name || 'cici'} Blog
            </Link>
            <div className="absolute flex flex-row top-4 right-0">
                {banner.map((item) => (
                    <Link to={item.link} className="mr-6">
                        <p className="text-3xl uppercase text-pink-purple">
                            {item.label}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Headers;
