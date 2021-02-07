import { 
    UI_START_LOADING, 
    UI_STOP_LOADING 
} from '../Actions/ActionType';

export const startLoading = () => {
    return {
        type: UI_START_LOADING
    }
};

export const stopLoading = () => {
    return {
        type: UI_STOP_LOADING
    }
};