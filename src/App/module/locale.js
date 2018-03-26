import { addLocaleData } from 'react-intl';
import KeyMirror from 'until/keyMirror';

export const actionTypes = KeyMirror({
  LOCALE_REQUEST: null,
  LOCALE_SUCCESS: null,
  LOCALE_FAILURE: null
});

const locale = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOCALE_SUCCESS:
      return {
        ...state,
        lang: action.locale.lang,
        messages: action.locale.translations
      };
    default:
      return state;
  }
};

export const actions = {
  switchLan(lang) {
    console.log(lang);
    return async function(dispatch, getState) {
      dispatch({ type: actionTypes.LOCALE_REQUEST });
      try {
        let newLang = lang;
        if (lang === 'zh-Hans') newLang = 'cn';
        if (lang === 'zh-Hant') newLang = 'tw';
        const translations = await import(/* webpackChunkName: "/i18n/[request]" */ `i18n/${newLang}.json`);
        const localeData = await import(/* webpackChunkName: "/i18n/[request]_locale" */ `react-intl/locale-data/${
          lang === 'zh-Hans' || lang === 'zh-Hant' ? 'zh' : lang
        }`);
        if (lang === 'zh-Hans') {
          localStorage.setItem('kp.hl', 'cn');
        } else if (lang === 'zh-Hant') {
          localStorage.setItem('kp.hl', 'tw');
        } else {
          localStorage.setItem('kp.hl', lang);
        }
        addLocaleData(localeData);
        dispatch({
          type: actionTypes.LOCALE_SUCCESS,
          locale: { lang, translations }
        });
      } catch (err) {
        dispatch({ type: actionTypes.LOCALE_FAILURE });
      }
    };
  }
};

export default locale;
