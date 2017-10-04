import fetch from 'isomorphic-fetch';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {apiMiddleware, ApiError} from 'redux-api-middleware';
import * as actions from 'actions/users';
import * as constants from 'constants/users';
import {API_URL} from 'constants/api';
import nock from 'nock';

const createMockStore = configureMockStore([thunk, apiMiddleware]);

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('creates a FETCH_USER_SUCCESS when stats are successfully fetched', () => {
        const apiResponse = {
            username: 'bob',
            id: 54
        };

        nock(API_URL)
            .get(`/user/accounts/${apiResponse.id}/`)
            .reply(200, apiResponse);

        const expectedActions = [
            {
                meta: undefined,
                payload: undefined,
                type: constants.FETCH_USER_REQUEST
            },
            {
                meta: undefined,
                payload: {
                    entities: {
                        users: {
                            [apiResponse.id]: apiResponse
                        }
                    },
                    result: apiResponse.id
                },
                type: constants.FETCH_USER_SUCCESS
            }
        ];

        const store = createMockStore({user: {}});
        return store.dispatch(actions.fetchUser(apiResponse.id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates a FETCH_USER_FAILURE when stats are unsuccessfully fetched', () => {
        const apiRequestId = 54;
        const apiResponse = {
            message: 'Oh noes.'
        };

        nock(API_URL)
            .get(`/user/accounts/${apiRequestId}/`)
            .reply(404, apiResponse);

        const expectedActions = [
            {
                meta: undefined,
                payload: undefined,
                type: constants.FETCH_USER_REQUEST
            },
            {
                error: true,
                meta: undefined,
                payload: new ApiError(404, 'Not Found', apiResponse),
                type: constants.FETCH_USER_FAILURE
            }
        ];

        const store = createMockStore({user:{}});
        return store.dispatch(actions.fetchUser(apiRequestId)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});