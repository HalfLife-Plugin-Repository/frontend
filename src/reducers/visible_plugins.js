/**
 * Describes the state changes when plugins are
 * fetched.
 */

import byId from './byID';
import * as constants from 'constants/plugins';

export default byId([
    constants.FETCH_PLUGINS_REQUEST,
    constants.FETCH_PLUGINS_SUCCESS,
    constants.FETCH_PLUGINS_FAILURE
]);