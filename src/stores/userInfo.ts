import CreateStore from './createStore';

interface IUserInfo {
    name: string;
    password: string;
    avatar?: string;
}

function userInfo() {
    return {
        baseInfo: {} as IUserInfo,
        setUserInfo() {
            this.baseInfo.name = 'cici';
            this.baseInfo.password = 'psw';
        },
    };
}

const { useStore: useUserStore, withStore: withUserStore } =
    CreateStore(userInfo);

export { useUserStore, withUserStore };
