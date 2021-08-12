import React, { useState } from 'react';
import { useEffect } from 'react';
import BaseLayout from '../../layouts/BaseLayout';

const HomeContainer: React.FC = () => {
    const [value, setValue] = useState<number>(0);
    useEffect(() => {
        setValue(Date.now());
    }, []);

    return (
        <BaseLayout>
            <h1>home page</h1>
            <p>time: {value}</p>
        </BaseLayout>
    );
};

export default HomeContainer;
