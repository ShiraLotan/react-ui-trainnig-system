import {
  setHerosListRequest,
  setHerosListSuccess,
  setHerosListFaliure
} from '../action';



const getHerosByTrainer = (email) => {

  return async function (dispatch) {
    dispatch(setHerosListRequest());
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email
      })
    };


    try {
      const res = await fetch(`http://localhost:3001/hero/all`, settings);
      const data = await res.json();
      dispatch(setHerosListSuccess(data));
    } catch (error) {
      dispatch(setHerosListFaliure());
      throw new Error('Could not fetch please try again later');
    }
  }
}

export default getHerosByTrainer;