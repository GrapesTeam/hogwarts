import KeyMirror from 'until/keyMirror';

export const actionTypes = KeyMirror({
  TEACHERS_REQUEST: null,
  TEACHERS_SUCCESS: null,
  TEACHERS_FAILURE: null
});

const initialState = {
  data: []
};

const teachers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEACHERS_REQUEST:
      return {
        ...state
      };
    case actionTypes.TEACHERS_SUCCESS:
      return {
        ...state,
        data: action.response.data
      };
    case actionTypes.TEACHERS_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export const actions = {
  loadTeachers() {
    return {
      types: [
        actionTypes.TEACHERS_REQUEST,
        actionTypes.TEACHERS_SUCCESS,
        actionTypes.TEACHERS_FAILURE
      ],
      promise: api => api.get('/teachersv2')
    };
  }
};

export default teachers;
