import {combineReducers} from "redux";
import auth from './auth';
import entities from './entities';
import stats from './stats';
import visible_plugins from './visible_plugins';

const rootReducer = combineReducers({
    auth,
    entities,
    stats,
    visible_plugins
});

export default rootReducer;