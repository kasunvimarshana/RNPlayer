import { 
    SELECT_VIDEO, 
    SET_VIDEO_LIST 
} from '../Actions/ActionType';

export const getAllVideos = () => {
    return (dispatch, getState) => {
        videoList = null;
        const promise = new Promise((resolve, reject) => {
            //
        });
        dispatch( setVideoList( videoList ) );
        return promise;
    };
};

export const setVideoList = ( videoList ) => {
    return {
        type: SET_VIDEO_LIST,
        videoList: videoList
    };
};

export const selectVideo = ( video ) => {
    return {
        type: SELECT_VIDEO,
        video: video
    };
};

export const deleteVideo = ( video ) => {
    return (dispatch, getState) => {
        const selectedVideo = getState().video.selectVideo;
        const promise = new Promise((resolve, reject) = {
            //
        });
        return promise;
    };
};

export default updateVideo = ( video ) => {
    return (dispatch, getState) => {
        const selectedVideo = getState().video.selectVideo;
        const promise = new Promise((resolve, reject) => {
            //
        });
        return promise;
    };
};

export default createVideo = ( video ) => {
    return (dispatch, getState) => {
        const promise = new Promise((resolve, reject) => {
            //
        });
        return promise;
    };
};