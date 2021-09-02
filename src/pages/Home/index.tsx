import React, { useState, useEffect } from 'react';
import BaseLayout from '@/layouts/BaseLayout';
import { useHistory } from 'react-router-dom';
import { useUserStore } from '@/stores/userInfo';

const HomeContainer: React.FC = () => {
    const { baseInfo } = useUserStore();
    let history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem('login')) {
            history.push('/login');
        }
        // console.log(baseInfo);
    }, []);

    return (
        <BaseLayout sideBar>
            <h1>home page</h1>
            <p>time:{Date.now()} </p>
        </BaseLayout>
    );
};

export default HomeContainer;
