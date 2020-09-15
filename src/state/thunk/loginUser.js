import {
  userSigninRequest,
  userSigninRequestSucces,
  userSigninRequestFaliure
} from '../action';

const loginUser = (data) => {
  return async function (dispatch) {
    debugger
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
      dispatch(userSigninRequestSucces(data));
    } catch (error) {
      console.log(error) //ADD ERROR HANDLING
      dispatch(userSigninRequestFaliure());
    }
  }
}

export default loginUser;