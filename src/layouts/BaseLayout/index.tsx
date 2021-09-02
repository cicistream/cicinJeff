import React from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import SidePanel from '../components/SidePanel';

type IBaseLayoutProps = {
    name?: string;
    children: React.ReactNode;
    sideBar?: boolean;
    footer?: React.ReactChild | null;
};

const BaseLayout: React.FC<IBaseLayoutProps> = ({
    sideBar = false,
    footer,
    children,
}) => {
    return (
        <div className="relative">
            <Headers />
            {sideBar ? (
                <div className="m-16 flex min-h-screen">
                    <SidePanel />
                    {children}
                </div>
            ) : (
                children
            )}
            {footer || <Footer />}
        </div>
    );
};

export default BaseLayout;
