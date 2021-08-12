import React, { useState } from 'react';
import { useEffect } from 'react';
import HomeBg from '@/images/sea.jpg';
import BaseLayout from '@/layouts/BaseLayout.tsx';

const HomeContainer: React.FC = () => {
    const [value, setValue] = useState<number>(0);
    useEffect(() => {
        setValue(Date.now());
    }, []);

    return (
        <div className="bg-black">
            <BaseLayout>
                <img src={HomeBg} />
                <h1>home page</h1>
                <p>time: {value}</p>
            </BaseLayout>
        </div>
    );
};

export default HomeContainer;
