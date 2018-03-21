import { combineReducers } from 'redux';
import auth from 'Login/module/auth';
import teachers from 'Teachers/module/teachers';

const reducers = combineReducers({
  auth,
  teachers
});

export default reducers;
