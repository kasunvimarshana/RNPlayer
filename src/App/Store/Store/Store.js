import { 
    createStore, 
    combineReducers,
    compose, 
    applyMiddleware, 
} from 'redux';
import thunk from 'redux-thunk';

import VideoReducer from '../Reducers/VideoReducer';
import UIReducer from '../Reducers/UIReducer';

const rootReducer = combineReducers({
    video: VideoReducer,
    ui: UIReducer
});

let composeEnhancers = compose;

if( __DEV__ ){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;