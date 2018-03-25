import KeyMirror from 'until/keyMirror';

export const actionTypes = KeyMirror({
  LOGIN_REQUEST: null,
  LOGIN_SUCCESS: null,
  LOGIN_FAILURE: null,
  CAPTCHA_REQUEST: null,
  CAPTCHA_SUCCESS: null,
  CAPTCHA_FAILURE: null
});

const auth = (state = { isLogin: false }, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST: {
      return {
        ...state
      };
    }
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLogin: true,
        user: action.response.data
      };
    }
    case actionTypes.LOGIN_FAILURE: {
      return {
        ...state
      };
    }
    case actionTypes.CAPTCHA_REQUEST: {
      return {
        ...state
      };
    }
    case actionTypes.CAPTCHA_SUCCESS: {
      return {
        ...state,
        captchaReady: true,
        captcha: action.response
      };
    }
    case actionTypes.CAPTCHA_FAILURE: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export const actions = {
  captcha() {
    return {
      types: [
        actionTypes.CAPTCHA_REQUEST,
        actionTypes.CAPTCHA_SUCCESS,
        actionTypes.CAPTCHA_FAILURE
      ],
      promise: api => api.get('/geetest/captcha')
    };
  },
  login(payload) {
    return {
      types: [
        actionTypes.LOGIN_REQUEST,
        actionTypes.LOGIN_SUCCESS,
        actionTypes.LOGIN_FAILURE
      ],
      promise: api => api.post('/login', payload)
    };
  },
  signUp(payload) {
    return {
      types: [
        actionTypes.LOGIN_REQUEST,
        actionTypes.LOGIN_SUCCESS,
        actionTypes.LOGIN_FAILURE
      ],
      promise: api => api.post('/account/register', payload)
    };
  }
};

export default auth;
