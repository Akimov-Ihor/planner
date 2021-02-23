import { axiosService } from '../../services/api';
import * as types from '../actionsTypes/plannerTypes';
import { createRandomId } from '../../utils/createRandomId';
import { getMonthDayYear } from '../../utils/date-moment';

export const login = ({ username, password }, history) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  try {
    const { data } = await axiosService.post('/login', {
      username,
      password,
    });
    const { userData, token } = data;
    localStorage.setItem('token', token);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: {
        userData,
      },
    });
    return history.push('/');
  } catch (e) {
    return dispatch({
      type: types.LOGIN_FAILURE,
      payload: e,
    });
  }
};
export const registration = ({
  username, email, name, gender, company, age, password,
}, history) => async (dispatch) => {
  dispatch({
    type: types.REGISTRATION_REQUEST,
  });
  try {
    const { data } = await axiosService.post('/registration', {
      username,
      password,
      name,
      gender,
      email,
      company,
      age,
      id: createRandomId(),
    });
    const { userData, token } = data;
    localStorage.setItem('token', token);
    dispatch({
      type: types.REGISTRATION_SUCCESS,
      payload: {
        userData,
      },
    });
    return history.push('/');
  } catch (e) {
    return dispatch({
      type: types.LOGIN_FAILURE,
      payload: e,
    });
  }
};

export const verifyAuth = () => async (dispatch) => {
  dispatch({
    type: types.VERIFY_AUTH_REQUEST,
  });
  try {
    const { data } = await axiosService.post('/verifyAuth');
    const { userData, token } = data;
    localStorage.setItem('token', token);
    if (userData !== null) {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: {
          userData,
        },
      });
      dispatch({
        type: types.VERIFY_AUTH_SUCCESS,
      });
    } else {
      dispatch({
        type: types.VERIFY_AUTH_FAILURE,
      });
    }
  } catch (e) {
    dispatch({
      type: types.VERIFY_AUTH_FAILURE,
    });
  }
};

export const getAllPlans = (userId) => async (dispatch) => {
  try {
    const userPlansData = await axiosService.get(`/plans/${userId}`, {
      headers:
          { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
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
      user_id: userId,
    };

    await axiosService.post('/plans', plan, {
      headers:
          { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return await getAllPlans(userId)(dispatch);
  } catch (e) {
    return console.log(e);
  }
};

export const filterPlan = ({ id, userId }) => async (dispatch) => {
  await axiosService.delete(`/plan/${id}`, {
    headers:
  { Authorization: `Bearer ${localStorage.getItem('token')}` },
  }, { id });
  await getAllPlans(userId)(dispatch);
};

export const logout = (history) => async (dispatch) => {
  dispatch({ type: types.LOGOUT, payload: null });
  localStorage.removeItem('token');
  history.push('/login');
};
