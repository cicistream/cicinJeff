import React from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import { Button } from 'antd';
import { withUserStore, useUserStore } from '../../stores/userInfo';

type IBaseLayoutProps = {
    name?: string;
    children: React.ReactNode;
};

const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => {
    const { setUserInfo } = useUserStore();

    return (
        <div>
            <Headers />
            <Button
                // className="btn text-white absolute top-20 w-20"
                onClick={setUserInfo}
            >
                Click
            </Button>
            {children}
            <Footer />
        </div>
    );
};

export default withUserStore(BaseLayout);
