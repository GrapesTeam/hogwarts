import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import reducer, { actions, actionTypes } from './teachersModule';
import createMiddleware from 'store/createMiddelware';
import api from 'api';

const mock = new MockAdapter(api);
const middlewares = [createMiddleware(api)];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create success action', () => {
    const store = mockStore({ data: {} }); 
    const expectedAction = [actionTypes.TEACHERS_REQUEST, actionTypes.TEACHERS_SUCCESS];
    mock.onGet('/teachersv2').reply(200, {});
    store.dispatch(actions.loadTeachers()).then(() => {
      const dispatchedActions = store.getActions();
      const testActionTypes = dispatchedActions.map(action => action.type);
      expect(testActionTypes).toEqual(expectedAction)
    });
  });

  it('should create fail action', () => {
    const store = mockStore({ data: {} }); 
    const expectedAction = [actionTypes.TEACHERS_REQUEST, actionTypes.TEACHERS_FAILURE];
    mock.onGet('/teachersv2').reply(400, {});
    store.dispatch(actions.loadTeachers()).then(() => {
      const dispatchedActions = store.getActions();
      const testActionTypes = dispatchedActions.map(action => action.type);
      expect(testActionTypes).toEqual(expectedAction)
    });
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ data: [] })
  })

  it('should handle TEACHERS_REQUEST', () => {
    expect(reducer({ data: [] }, { type: actionTypes.TEACHERS_REQUEST })).toEqual({ data: [] });
    expect(reducer({}, { type: actionTypes.TEACHERS_SUCCESS, response: { data: [] }})).toEqual({ data: [] });
    expect(reducer({ data: [] }, { type: actionTypes.TEACHERS_FAILURE })).toEqual({ data: [] });
  });
})