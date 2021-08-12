import React from 'react';
import Headers from '../components/Headers';

type IBaseLayoutProps = {
    name?: string;
    children: React.ReactNode;
};

const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => {
    return (
        <div>
            <Headers />
            {children}
        </div>
    );
};

export default BaseLayout;
