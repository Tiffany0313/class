import { createContext } from "react";

export const STATUS = {
    signUp: 0,
    signIn: 1,
    signOut: 2
};

export const AuthContext = createContext({
    status: STATUS.signIn,
    setStatus: (newStatus) => {
        this.status = newStatus;
    }
});

/*
status及setStatus在provider會被覆蓋
status為signIn 已註冊，將要登入
status為signOut 已登入，將要登出
status為signUp 未註冊，將要註冊
*/
