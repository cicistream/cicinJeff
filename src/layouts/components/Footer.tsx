import React from 'react';
import styles from './index.less';

const Footer: React.FC = () => (
    <div
        className={`box text text-lg credits text-white ${styles.footerContainer}`}
    >
        Made with
        <span className="love text text-lg line-height text-white mx-4">♥</span>
        by
        <a className="text-purple-cyan mx-4">Cici</a>&
        <a className="text-cyan-green mx-4">Jeff</a>
    </div>
);

export default Footer;
