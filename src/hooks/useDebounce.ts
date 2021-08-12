import React, { useRef, useEffect } from 'react';

type Fn = (...args: any) => any;

interface DebounceOptions {
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
}

function useDebounce<T extends Fn>(fn: T, options?: DebounceOptions) {
    const { current } = useRef<{
        fn: T;
        timer: ReturnType<typeof setTimeout> | null;
    }>({ fn, timer: null });

    useEffect(() => {
        current.fn = fn;
    }, [fn]);

    return (...args: any[]) => {
        if (current.timer) clearTimeout(current.timer);
        current.timer = setTimeout(() => {
            current.fn.call(null, args);
        }, options?.wait ?? 1000);
    };
}

export default useDebounce;
