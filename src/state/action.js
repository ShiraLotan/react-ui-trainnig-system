import {
  USER_REGISTER,
  SET_HERO_LIST_REQUEST,
  SET_HERO_LIST_SUCCESS,
  SET_HERO_LIST_FALIURE,
  ADD_HERO_REQUEST,
  ADD_HERO_SUCCESS,
  ADD_HERO_FALIURE,
  USER_SIGNIN_REQUET,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FALIURE,
  USER_LOGOUT_REQUET,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FALIURE,
  UPDATE_HERO_POWER_REQUEST,
  UPDATE_HERO_POWER_SUCCESS,
  UPDATE_HERO_POWER_FALIURE
} from '../consts';


export function signUser(data) {
  return {
    type: USER_REGISTER,
    data
  }
}

export function setHerosListRequest() {
  return {
    type: SET_HERO_LIST_REQUEST,
  }
}

export function setHerosListSuccess(data) {
  return {
    type: SET_HERO_LIST_SUCCESS,
    data
  }
}

export function setHerosListFaliure() {
  return {
    type: SET_HERO_LIST_FALIURE,
  }
}

export function addHeroRequest() {
  return {
    type: ADD_HERO_REQUEST,
  }
}

export function addHeroRequestSuccess(data) {
  return {
    type: ADD_HERO_SUCCESS,
    data
  }
}

export function addHeroRequestFaliure() {
  return {
    type: ADD_HERO_FALIURE,
  }
}

export function userSigninRequest() {
  return {
    type: USER_SIGNIN_REQUET,
  }
}

export function userSigninRequestSucces(data) {
  return {
    type: USER_SIGNIN_SUCCESS,
    data
  }
}

export function userSigninRequestFaliure() {
  return {
    type: USER_SIGNIN_FALIURE,
  }
}

export function userLogoutRequest() {
  return {
    type: USER_LOGOUT_REQUET,
  }
}

export function userLogoutRequestSucces() {
  return {
    type: USER_LOGOUT_SUCCESS,
  }
}

export function userLogoutRequestFaliure() {
  return {
    type: USER_LOGOUT_FALIURE,
  }
}

export function updateHeroPowerRequest() {
  return {
    type: UPDATE_HERO_POWER_REQUEST,
  }
}

export function updateHeroPowerRequestSucces(data) {
  return {
    type: UPDATE_HERO_POWER_SUCCESS,
    data
  }
}

export function updateHeroPowerRequestFaliure() {
  return {
    type: UPDATE_HERO_POWER_FALIURE,
  }
}