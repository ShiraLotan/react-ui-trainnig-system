import {
  userSigninRequest,
  userSigninRequestSucces,
  userSigninRequestFaliure
} from '../action';

const loginUser = (data) => {
  return async function (dispatch) {
    dispatch(userSigninRequest());
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };
    try {
      const res = await fetch(`http://localhost:3001/login`, settings);
      const data = await res.json();
      if (!data?.message) {
        dispatch(userSigninRequestSucces(data));
        return data;
      } else {
        //Not a match
        return false;
      }
    } catch (error) {
      dispatch(userSigninRequestFaliure());
      throw new Error('Could not fetch please try again later');

    }
  }
}

export default loginUser;