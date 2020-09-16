import {
  updateHeroPowerRequest,
  updateHeroPowerRequestSucces,
  updateHeroPowerRequestFaliure
} from '../action';

const updateHeroPower = (id) => {
  return async function (dispatch) {
    dispatch(updateHeroPowerRequest());
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id})
    };
    try {
      const res = await fetch(`http://localhost:3001/hero/start`, settings);
      const data = await res.json();
      dispatch(updateHeroPowerRequestSucces());

     
    } catch (error) {
      dispatch(updateHeroPowerRequestFaliure());
      throw new Error('Could not fetch please try again later');

    }
  }
}

export default updateHeroPower;