import {
    IMAGES_FETCH_TRY,
    IMAGES_FETCH_SUCCESS,
    IMAGES_FETCH_ERROR
} from "../actions/imageListActions";

const initialState = {
    images: [],
    error: '',
    loading: true,
};

export default function images(state, action) {
    switch (action.type) {
        case IMAGES_FETCH_TRY:
            return {
                ...state,
                error: '',
                loading: true,
            };
            break;
        case IMAGES_FETCH_SUCCESS:
            return {
                ...initialState,
                images: action.payload || [],
                loading: false,
            };
            break;
        case IMAGES_FETCH_ERROR:
            return {
                ...state,
                error: 'fetch_error',
                loading: false,
            };
            break;
        default:
            return state || initialState;
    }
}