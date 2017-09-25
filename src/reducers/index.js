import {combineReducers} from "redux";
import auth from './auth';
import entities from './entities';
import recently_updated from './recently_updated';
import stats from './stats';

const rootReducer = combineReducers({
    auth,
    entities,
    recently_updated,
    stats
});

export default rootReducer;