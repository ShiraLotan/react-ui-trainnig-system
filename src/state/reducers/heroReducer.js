import {
  SET_HERO_LIST_REQUEST,
  SET_HERO_LIST_SUCCESS,
  SET_HERO_LIST_FALIURE,
  ADD_HERO_REQUEST,
  ADD_HERO_SUCCESS,
  ADD_HERO_FALIURE,
  UPDATE_HERO_POWER_REQUEST,
  UPDATE_HERO_POWER_SUCCESS,
  UPDATE_HERO_POWER_FALIURE
} from '../../consts';


const initialState = {
  heroList: [],
  isLoading: false
}

function heroReducer(state = initialState, action) {
  debugger
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
                case UPDATE_HERO_POWER_REQUEST:
                return {
                  ...state,
                  isLoading: true
                }
                case UPDATE_HERO_POWER_SUCCESS:
                 const updatedData = state.heroList.map(x => (x._id === action.data._id ? { ...x, power_current: action.data.power_current } : x));
                return {
                  ...state,
                  isLoading: false,
                  heroList: updatedData

                }
                case UPDATE_HERO_POWER_FALIURE:
                return {
                  ...state,
                  isLoading: false
                }
                default:
                  return state
  }
}

export default heroReducer;