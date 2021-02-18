import { axiosService } from '../../services/api';
import * as types from '../actionsTypes/plannerTypes';
import { createRandomId } from '../../utils/createRandomId';
import { getMonthDayYear } from '../../utils/date-moment';

export const setIsAuth = (
  {
    isAuth, username, password, history,
  },
) => async (dispatch) => {
  try {
    const userData = await axiosService.post('/login', {
      username,
      password,
    });
    if (userData.status !== 404) {
      dispatch(({ type: types.SET_IS_AUTH, payload: isAuth }));
      dispatch(({ type: types.SET_USER, payload: userData.data[0] }));
      return history.push('/');
    }
    return userData.status !== 404;
  } catch (e) {
    return console.log(e);
  }
};

export const getAllPlans = (userId) => async (dispatch) => {
  try {
    const userPlansData = await axiosService.get(`/plans/${userId}`);
    if (userPlansData.status !== 404) {
      return dispatch({ type: types.SET_ALL_PLANS, payload: userPlansData.data });
    }
    return false;
  } catch (e) {
    return console.log(e);
  }
};

export const setPlan = ({
  title, description, selectDate, userId,
}) => async (dispatch) => {
  try {
    const plan = {
      title,
      description,
      date: getMonthDayYear(selectDate).toString(),
      id: createRandomId(),
      userId,
    };

    await axiosService.post('/plan', plan);
    return await getAllPlans(userId)(dispatch);
  } catch (e) {
    return console.log(e);
  }
};

export const filterPlan = ({ id, userId }) => async (dispatch) => {
  await axiosService.delete(`/plan/${id}`, { id });
  await getAllPlans(userId)(dispatch);
};
