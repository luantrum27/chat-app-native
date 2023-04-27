import apiRequest from "../api/apiRequest";
import { IGetUsersQuery } from "../models";
import { AppDispatch } from "../store";
import { getProfileStart, getProfileSuccess, getProfileFailed } from "../store/userSlice";

export const getUserProfile = async (dispatch: AppDispatch) => {
  dispatch(getProfileStart());
  try {
    const res = await apiRequest.get('users/profile');
    
    dispatch(getProfileSuccess(res.data));
  } catch (err) {
    dispatch(getProfileFailed());
  }
};
export const getUsers = async (
  query: IGetUsersQuery,
) => {
  try {
    const res = await apiRequest.get('users', {
      params: query,
    });
    console.log(res.data);
    
    return res.data;
  } catch (err) {
    console.log(err);
    
  }
};