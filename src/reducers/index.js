import {combineReducers} from "redux";
import auth from './auth';
import stats from './stats';
import users from './users';

const rootReducer = combineReducers({
    auth,
    stats,
    users
});

export default rootReducer;