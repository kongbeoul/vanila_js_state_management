export const GET_POST = 'post/GET_POST';
export const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'post/GET_POST_FAILURE';

export const getPost = () => ({ type: GET_POST });
export const getPostSuccess = payload => ({ type: GET_POST_SUCCESS, payload });
export const getPostFailure = payload => ({ type: GET_POST_FAILURE, payload })

const initialState = {
    isLoading: false,
    posts: [],
    errorMsg: ''
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_POST:
            return {
                ...state,
                isLoading: true
            }
        case GET_POST_SUCCESS:
            return {
                isLoading: false,
                posts: action.payload,
                errorMsg: ''
            }
        case GET_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMsg: action.payload
            }
        default:
            return state;
    }
}