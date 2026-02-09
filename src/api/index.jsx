import { POST, GET } from './fetch';

export const USERROLE = {
    FREELANCER:"freelancer",
    TASKOWNER:"taskowner",
}

class API {
    login({ username, password }){
        return POST(`${process.env.NEXT_PUBLIC_API}/user/login`, { username, password });
    }

    register({ fullname, username, email, password, confirmPwd, role, departmentId }){
        return POST(`${process.env.NEXT_PUBLIC_API}/user`, { fullname, username, email, password, confirmPwd, role, departmentId });
    }

    departments(){
        return GET(`${process.env.NEXT_PUBLIC_API}/departments`, {});
    }
}

const Api = new API;

export default Api;