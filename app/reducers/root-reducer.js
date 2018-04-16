import * as types from '../actions/action-types';

const initialState = {};

export const player = (state = initialState, action) => {
    switch (action.type) {
        case types.PLAYING:
            return {
                ...state,
                isPlaying: action.data.isPlaying
            };
        default:
            return state;
    }
};
