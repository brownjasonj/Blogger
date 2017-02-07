import { FETCH_POSTS_COMPLETED } from '../actions/index';

const INITIAL_STATE = {
    all: [],        // list of posts
    post: null      //  currently selected post
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