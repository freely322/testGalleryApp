export const IMAGES_FETCH_TRY = 'IMAGES_FETCH_TRY';
export const IMAGES_FETCH_SUCCESS = 'IMAGES_FETCH_SUCCESS';
export const IMAGES_FETCH_ERROR = 'IMAGES_FETCH_ERROR';

export function imagesFetch() {
    return dispatch => {
        dispatch({type: IMAGES_FETCH_TRY});
        fetch('https://api.unsplash.com/photos/random?count=20&client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9').then((response) => {
            return response.json()}).then((data) => {
            dispatch(imagesFetchSuccess(data));
            console.log(data);
        }).catch((err) => {
            dispatch(imagesFetchError(err))
        })
    }
}

export function imagesFetchSuccess(data) {
    return {
        type: IMAGES_FETCH_SUCCESS,
        payload: data,
    };
}

export function imagesFetchError(error) {
    return {
        type: IMAGES_FETCH_ERROR,
        payload: error,
    };
}