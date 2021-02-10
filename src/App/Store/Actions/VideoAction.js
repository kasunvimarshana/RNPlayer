import { 
    SELECT_VIDEO, 
    SET_VIDEO_LIST 
} from '../Actions/ActionType';

import { startLoading, stopLoading } from './UIAction';

const DATABASE_URI = "https://calcium-firefly-303215-default-rtdb.firebaseio.com";

export const getAllVideos = () => {
    return (dispatch, getState) => {
        let videoList = new Array();
        const promise = new Promise((resolve, reject) => {
            dispatch(startLoading());
            fetch(DATABASE_URI + "/videos.json", {
                method: 'GET'
            })
            .then((response) => response.json())
            .then((json) => {
                //console.log(json);
                if( json && Object.keys(json).length > 0 ){
                    Object.entries(json).forEach(([key, value]) => {
                        //console.log(key , value);
                        value.id = key;
                        videoList.push( value );
                    });
                }
                //console.log(videoList);
                dispatch(setVideoList(videoList));
                dispatch(stopLoading());
                resolve(json);
            })
            .catch((error) => {
                console.error("catch", error);
                dispatch(stopLoading());
                reject(error);
            });
        });
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
        //const selectedVideo = getState().video.selectVideo;
        const promise = new Promise((resolve, reject) => {
            dispatch(startLoading());
            fetch(DATABASE_URI + "/videos/" + video.id + ".json", {
                method: 'DELETE'
            })
            .then((response) => response.json())
            .then((json) => {
                //console.log(json);
                dispatch(stopLoading());
                resolve(json);
            })
            .catch((error) => {
                console.error("catch", error);
                dispatch(stopLoading());
                reject(error);
            });
        });
        return promise;
    };
};

export const updateVideo = ( video ) => {
    return (dispatch, getState) => {
        const selectedVideo = getState().video.selectVideo;
        const promise = new Promise((resolve, reject) => {
            //
        });
        return promise;
    };
};

export const createVideo = ( video ) => {
    return (dispatch, getState) => {
        const promise = new Promise((resolve, reject) => {
            dispatch(startLoading());
            fetch(DATABASE_URI + "/videos.json", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...video
                })
            })
            .then((response) => response.json())
            .then((json) => {
                //console.log(json);
                dispatch(stopLoading());
                resolve(json);
            })
            .catch((error) => {
                console.error("catch", error);
                dispatch(stopLoading());
                reject(error);
            });
        });
        return promise;
    };
};