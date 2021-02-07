import { 
    UI_START_LOADING, 
    UI_STOP_LOADING 
} from '../Actions/ActionType';

export const startLoading = ( payload = {} ) => {
    return {
        type: UI_START_LOADING,
        payload: payload
    }
};

export const stopLoading = ( payload = {} ) => {
    return {
        type: UI_STOP_LOADING,
        payload: payload
    }
};