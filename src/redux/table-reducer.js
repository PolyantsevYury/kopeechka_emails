import {tableAPI} from "../api/api";

const SET_TARIF_TABLE_DATA = 'SET_TARIF_TABLE_DATA';
const SET_STATUS_TABLE_DATA = 'SET_STATUS_TABLE_DATA';

let initialState = {
    domains: [],
    status: [],
};

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TARIF_TABLE_DATA:
            return {
                ...state,
                domains: action.tarifData
            };
        case SET_STATUS_TABLE_DATA:
            return {
                ...state,
                status: action.statusData
            };
        default:
            return state;
    }
};

export const setTarifData = (tarifData) => ({type: SET_TARIF_TABLE_DATA, tarifData});
export const setStatusData = (statusData) => ({type: SET_STATUS_TABLE_DATA, statusData});

export const requestTarifData = (token) => {
    return async (dispatch) => {
        let data = await tableAPI.getTarifData(token);
        let tarifData = data.data.types;
        dispatch(setTarifData(tarifData))
    }
};

export const requestStatusData = (token, type) => {
    return async (dispatch) => {
        let data = await tableAPI.getStatusData(token, type);
        let statusData = data.data;
        dispatch(setStatusData(statusData))
    }
}

export default tableReducer;