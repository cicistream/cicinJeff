import React from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';

type IBaseLayoutProps = {
    name?: string;
    children: React.ReactNode;
};

const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => {
    return (
        <div>
            <Headers />
            {children}
            <Footer />
        </div>
    );
};

export default BaseLayout;
