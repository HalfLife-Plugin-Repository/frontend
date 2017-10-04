/**
 * @file Actions pertaining to plugins
 */

import {normalize} from 'normalizr';
import {stringify} from 'query-string';
import {CALL_API} from 'redux-api-middleware';
import {API_URL} from 'constants/api';
import * as constants from 'constants/plugins';
import {pluginSchema, pluginsSchema} from 'schemas';

/**
 * Fetches a list of plugins, with the optional used query param.
 */
function fetchPlugins(endpoint, query={}){
    const stringified = stringify(query);
    return {
        [CALL_API]: {
            endpoint: `${endpoint}${(stringified) ? `?${stringified}` : ''}`,
            method: 'GET',
            types: [
                constants.FETCH_PLUGINS_REQUEST,
                {
                    type: constants.FETCH_PLUGINS_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json().then((json) => normalize(json, pluginsSchema))
                    }
                },
                constants.FETCH_PLUGINS_FAILURE
            ]
        }
    }
}

/**
 * Fetches the ten most recently updated plugins
 */
export function loadRecentlyUpdated(){
    return (dispatch) => {
        dispatch(fetchPlugins(`${API_URL}/plugins/last_updated/`));
    }
}

/**
 * Fetches a list of plugins with optional query params.
 */
export function loadPlugins(query){
    return (dispatch) => {
        dispatch(fetchPlugins(`${API_URL}/plugins/`, query));
    }
}

/**
 * Fetches a single plugin.
 */
export function fetchPlugin(slug){
    return {
        [CALL_API]: {
            endpoint: `${API_URL}/plugins/${slug}/`,
            method: 'GET',
            types: [
                constants.FETCH_PLUGIN_REQUEST,
                {
                    type: constants.FETCH_PLUGIN_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json().then((json) => normalize(json, pluginSchema))
                    }
                },
                constants.FETCH_PLUGIN_FAILURE
            ]
        }
    }
}
