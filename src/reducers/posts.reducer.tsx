import { FETCH_POSTS_COMPLETED } from '../actions/index';

const INITIAL_STATE = {
    all: [],
    post: null
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
    case FETCH_POSTS_COMPLETED:
        return {
            ...state, all: action.payload.data
        };
    default:
        return state;
    }
}