import { combineReducers } from 'redux';
import auth from 'Auth/module/auth';
import teachers from 'Teachers/module/teachers';

const reducers = combineReducers({
  auth,
  teachers
});

export default reducers;
