import React from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '@/stores/userInfo';
import defaultAvatar from '@/images/sea.jpg';
import styles from './index.less';

const SidePanel = () => {
    const { baseInfo } = useUserStore();

    return (
        <div className={`${styles.sideMenuContainer} text text-white`}>
            <p>ABOUT ME</p>
            <img src={baseInfo.avatar ?? defaultAvatar} alt="avt" />
            {/* <span className="love text text-lg line-height text-white mr-4">
                ♥
            </span> */}
            <p>LINK</p>
            <div className="flex flex-col">
                <Link to="/">HOME</Link>
                <Link to="/editor">+ New Page</Link>
            </div>
        </div>
    );
};

export default SidePanel;
