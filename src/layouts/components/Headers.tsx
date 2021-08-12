import React from 'react';
import { UserInfo } from '../../utils/global';
import styles from './index.less';

type IHeaderProps = {
    userInfo: UserInfo;
};

const Headers: React.FC<IHeaderProps> = ({ userInfo }) => {
    return (
        <div className={`flex ${styles.headerContainer}`}>
            <p className="font-serif text-3xl justify-between align-middle">
                {userInfo?.name || 'cici'}
            </p>
        </div>
    );
};

export default Headers;
