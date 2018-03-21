import KeyMirror from 'until/keyMirror'

export const actionTypes = KeyMirror({
  AUTH_LOGIN: null
})

const auth = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.AUTH_LOGIN: {
      return {
        ...state,
        name: action.payload.username
      }
    }
    default:
      return state
  }
}

export const actions = {
  login(payload) {
    return ({
      type: actionTypes.AUTH_LOGIN,
      payload
    })
  }
}

export default auth
