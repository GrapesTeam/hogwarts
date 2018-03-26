import { combineReducers } from 'redux';
import auth from 'Auth/module/auth';
import teachers from 'Teachers/module/teachers';
import locale from 'App/module/locale';

const reducers = combineReducers({
  locale,
  auth,
  teachers
});

export default reducers;
