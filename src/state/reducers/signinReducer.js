import {
  USER_REGISTER,
  USER_SIGNIN_REQUET,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FALIURE,
  USER_LOGOUT_REQUET,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FALIURE
} from '../../consts';

const initialState = {
  name: '',
  isSignin: false,
  statue: 'Trainer',
  email: '',
  isLoading: false
}

function signinReducer(state = initialState, action) {

  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
          name: action.data.name,
          isSignin: !state.isSignin,
          email: action.data.email
      }
      case USER_SIGNIN_REQUET:
      return {
        ...state,
        isLoading: true
      }
      case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        name: action.data.name,
        email: action.data.email,
        isSignin:true,

      }
      case USER_SIGNIN_FALIURE:
      return {
        ...state,
        isLoading: false,
      }
      case USER_LOGOUT_REQUET:
      return {
        ...state,
        isLoading: true
      }
      case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignin: false
      }
      case USER_LOGOUT_FALIURE:
      return {
        ...state,
        isLoading: false,
      }
      default:
        return state
  }
}

export default signinReducer;