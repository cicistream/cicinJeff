import React from 'react';
import Headers from './components/Headers';

type IBaseLayoutProps = {
    name?: string;
};

const BaseLayout: React.FC<IBaseLayoutProps> = () => {
    return (
        <div>
            <Headers />
        </div>
    );
};

export default BaseLayout;
