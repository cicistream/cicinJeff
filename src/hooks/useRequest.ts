import React from 'react';
import useSWR from 'swr';
import axios, { AxiosRequestConfig } from 'axios';

export interface requestProps {
    (...args: Array<string | number>): string;

    config: AxiosRequestConfig;
}

const useRequest = (
    config: AxiosRequestConfig,
    ...args: Array<string | number>
) => {
    const fetcher = (url: string) => axios(url);
    const { data, error } = useSWR(config?.url!, fetcher);
    return [data, error] as const;
};

export default useRequest;
