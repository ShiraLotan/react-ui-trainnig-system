import {
  addHeroRequest,
  addHeroRequestSuccess,
  addHeroRequestFaliure
} from '../action';

const addHero = (data) => {
  return async function (dispatch) {
    dispatch(addHeroRequest());
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };
    try {
      const res = await fetch(`http://localhost:3001/hero/add`, settings);
      const data = await res.json();
      dispatch(addHeroRequestSuccess(data));
    } catch (error) {
      dispatch(addHeroRequestFaliure());
      throw new Error('Could not fetch please try again later');
    }
  }
}

export default addHero;