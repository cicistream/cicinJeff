import React, { useState, useEffect } from 'react';
import BaseLayout from '../../layouts/BaseLayout';

const HomeContainer: React.FC = (props) => {
    const [value, setValue] = useState<number>(0);
    useEffect(() => {
        setValue(Date.now());
        // console.log(baseInfo);
    }, []);

    return (
        <BaseLayout>
            <h1>home page</h1>
            <p>time: {value}</p>
        </BaseLayout>
    );
};

export default HomeContainer;
