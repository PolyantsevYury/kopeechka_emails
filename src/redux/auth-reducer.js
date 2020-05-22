import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    profile: null,
    email: null,
    token: null,
    ready: null,
    vip_post_end: null,
    vip_redirect_end: null,
    vip_photo_end: null,
    balance: null,
    referrer: null,
    isAuth: false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};


export const setAuthUserData = (id, profile, email, token, ready, vip_post_end,
                                vip_redirect_end, vip_photo_end, balance, referrer, isAuth, error) => ({
    type: SET_USER_DATA, payload:
        {id, profile, email, token, ready, vip_post_end,
            vip_redirect_end, vip_photo_end, balance, referrer, isAuth, error}
});

export const getAuthUserData = (token) => async (dispatch) => {
    let response = await authAPI.me(token);

    if (response.data.status === 'OK') {
        let {id, profile, email, token, ready, vip_post_end,
            vip_redirect_end, vip_photo_end, balance, referrer} = response.data.user;
        dispatch(setAuthUserData(id, profile, email, token, ready, vip_post_end,
            vip_redirect_end, vip_photo_end, balance, referrer, true, null));
    } else {
        let message = response.data.value;
        dispatch(setAuthUserData(null, null, null, null, null,
            null, null,null,null,null,false, message));
    }
};

export default authReducer;