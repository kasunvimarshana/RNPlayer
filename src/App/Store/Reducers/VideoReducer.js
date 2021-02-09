import { 
    SELECT_VIDEO, 
    SET_VIDEO_LIST 
} from '../Actions/ActionType';

const defaultVideo = {
    uri: "http://41.216.229.205:8080/live/livestream/index.m3u8",
    title: "Streaming",
    description: "Streaming Video",
    editable: false
}

const initialState = {
    defaultVideo: defaultVideo,
    selectedVideo: {
        uri: defaultVideo.uri,
        title: defaultVideo.title,
        description: defaultVideo.description,
        editable: defaultVideo.editable
    },
    videoList: []
};

const reducer = (state = initialState, action) => {
    switch( action.type ){
        case SELECT_VIDEO:
            return {
                ...state,
                selectedVideo: action.video
            };
            break;
        case SET_VIDEO_LIST: 
            return {
                ...state,
                videoList: action.videoList
            }
            break;
        default:
            return state;
    }
};

export default reducer;