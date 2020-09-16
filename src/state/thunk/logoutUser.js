import {
  userLogoutRequest,
  userLogoutRequestSucces,
  userLogoutRequestFaliure
} from '../action';

const userLogout = (email) => {
  return async function (dispatch) {
    dispatch(userLogoutRequest());
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email})
    };
    try {
      const res = await fetch(`http://localhost:3001/logout`, settings);
      const data = await res.json();
      if(data.ok){
        dispatch(userLogoutRequestSucces());
        return data;
      }else{
        //Couldn't logout
      }
     
    } catch (error) {
      dispatch(userLogoutRequestFaliure());
      throw new Error('Could not fetch please try again later');

    }
  }
}

export default userLogout;