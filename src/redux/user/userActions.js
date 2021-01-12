import { FETCH_USERS_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from './userTypes';
import axios from 'axios';

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = (err) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: err
  }
}


// action creator

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const users = await response.data;
      dispatch(fetchUsersSuccess(users));
    } catch (err) {
      const error = err.message;
      dispatch(fetchUsersFailure(error));
      console.error(err);
    }
  }
}