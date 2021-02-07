import { 
    SELECT_VIDEO, 
    SET_VIDEO_LIST 
} from '../Actions/ActionType';

const initialState = {
    selectedVideo: {
        uri: "",
        title: "",
        description: "",
        editable: false
    },
    videoList: null
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