import React, { createContext, useContext } from 'react';
import { useLocalStore } from 'mobx-react';
/**
 * @description 创建局部mobx store的方法，基于mobx-react@6的useLocalStore，使用例子可见Admin/Layout
 * @param initializer 同mobx-react的useLocalStore第一个参数
 * @param current 同mobx-react的useLocalStore第二个参数
 * @returns return 返回一个对象
 * @returns return.withStore 用于包裹context.Provider的高阶组件
 * @returns return.useStore 读取store内容的hook
 * @returns return.storeContext 若使用class component没法用hooks，则可用此context自行处理Consumer
 */

function createLocalStore<
    TStore extends Record<string, any>,
    TSource extends object = any,
>(initializer: (source: TSource) => TStore, current?: TSource) {
    type Store = ReturnType<typeof initializer>;

    const StoreContext = createContext<Store>(
        initializer({} as TSource) as Store,
    );

    function withStore<P>(Comp: React.ComponentType<P>) {
        return function (props: P) {
            const store = useLocalStore(initializer, current!);

            return (
                <StoreContext.Provider value={store}>
                    <Comp {...props} />
                </StoreContext.Provider>
            );
        };
    }

    const useStore = () => useContext(StoreContext);

    return {
        withStore,
        useStore,
        StoreContext,
    };
}
export default createLocalStore;
