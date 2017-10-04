import fetch from 'isomorphic-fetch';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {apiMiddleware, ApiError} from 'redux-api-middleware';
import fetchStats from 'actions/stats';
import * as constants from 'constants/stats';
import {API_URL} from 'constants/api';
import nock from 'nock';

const createMockStore = configureMockStore([thunk, apiMiddleware]);

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('creates a FETCH_STATS_SUCCESS when stats are successfully fetched', () => {
        const apiResponse = {
            plugin_count: 5,
            author_count: 5
        };

        nock(API_URL)
            .get('/plugins/stats/')
            .reply(200, apiResponse);

        const expectedActions = [
            {
                meta: undefined,
                payload: undefined,
                type: constants.FETCH_STATS_REQUEST
            },
            {
                meta: undefined,
                payload: apiResponse,
                type: constants.FETCH_STATS_SUCCESS
            }
        ];

        const store = createMockStore({stats: {}});
        return store.dispatch(fetchStats()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates a FETCH_STATS_FAILURE when stats are unsuccessfully fetched', () => {
        const apiResponse = {
            message: 'Something went wrong'
        };

        nock(API_URL)
            .get('/plugins/stats/')
            .reply(400, apiResponse);

        const expectedActions = [
            {
                meta: undefined,
                payload: undefined,
                type: constants.FETCH_STATS_REQUEST
            },
            {
                error: true,
                meta: undefined,
                payload: new ApiError(400, 'Bad Request', apiResponse),
                type: constants.FETCH_STATS_FAILURE
            }
        ];

        const store = createMockStore({stats: {}});
        return store.dispatch(fetchStats()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
});