import {
  SET_HERO_LIST_REQUEST,
  SET_HERO_LIST_SUCCESS,
  SET_HERO_LIST_FALIURE,
  ADD_HERO_REQUEST,
  ADD_HERO_SUCCESS,
  ADD_HERO_FALIURE
} from '../../consts';


const initialState = {
  heroList: [],
  isLoading: false
}

function heroReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HERO_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      }
      case SET_HERO_LIST_SUCCESS:
        return {
          ...state,
          isLoading: false,
            heroList: [...action.data]
        }
        case SET_HERO_LIST_FALIURE:
          return {
            ...state,
            isLoading: false
          }
          case ADD_HERO_REQUEST:
            return {
              ...state,
              isLoading: true
            }
            case ADD_HERO_SUCCESS:
              return {
                ...state,
                isLoading: false,
                  heroList: [...state.heroList,{...action.data}]
              }
              case ADD_HERO_FALIURE:
                return {
                  ...state,
                  isLoading: false
                }
                default:
                  return state
  }
}

export default heroReducer;