import { LOGIN_ACTION, LOGOUT_ACTION } from './types';

export const loginUserAction = (user) => {
    return {
        type: LOGIN_ACTION,
        user
    }
};

export const logoutUserAction = () => {
    return {
        type: LOGOUT_ACTION
    }
};