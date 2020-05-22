import {uploadAPI} from "../api/api";

const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
const TOGGLE_IS_UPLOADING_PROGRESS = 'TOGGLE_IS_UPLOADING_PROGRESS';

let initialState = {
    isSuccess: null,
    uploadingInProgress: false,
};

const uploadReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPLOAD_FILE_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case TOGGLE_IS_UPLOADING_PROGRESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const savePhotoSuccess = (isSuccess) => ({type: UPLOAD_FILE_SUCCESS, payload: {isSuccess}});
export const toggleUploadingProgress = (uploadingInProgress) => ({type: TOGGLE_IS_UPLOADING_PROGRESS, payload: {uploadingInProgress}});

export const uploadFile = (comment, token, emails_file) => async (dispatch) => {
    dispatch(toggleUploadingProgress(true));

    let response = await uploadAPI.uploadFile(comment, 1, token, emails_file);

    if (response.data.status === "OK") {
        dispatch(savePhotoSuccess(true));
    }

    if (response.data.status === "ERROR") {
        dispatch(savePhotoSuccess(false));
    }

    dispatch(toggleUploadingProgress(false));
};

export default uploadReducer;