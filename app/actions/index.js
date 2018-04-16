import * as types from './action-types';

export const setPlayerStatus = isPlaying => ({
    type: types.PLAYING,
    data: {
        isPlaying
    }
});
