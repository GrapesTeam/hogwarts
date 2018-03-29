import { combineReducers } from 'redux';
import auth from 'Auth/authModule';
import teachers from 'Teachers/teachersModule';
import locale from 'App/localeModule';

const reducers = combineReducers({
  locale,
  auth,
  teachers
});

export default reducers;
