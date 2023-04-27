import apiRequest from "../api/apiRequest";
import { IGetUsersQuery, TGetFriendsQuery } from "../models";
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


export const sendFriendRequest = async (
  id: string,
) => {
  try {
    const res = await apiRequest.post('friends', { userTarget: id });

    return res.data;
  } catch (err) {
    console.log(err);
    
  }
};

export const cancelFriendRequest = async (
  id: string,
) => {
  try {
    await apiRequest.post('friends/cancel', {
      userRequest: id,
    });
  } catch (err) {
    console.log(err);
    
  }
};

export const getFriends = async (
  query: TGetFriendsQuery,
) => {
  try {
    const res = await apiRequest.get('friends', {
      params: query,
    });

    return res.data;
  } catch (err) {
    console.log(err);
    
  }
};

export const acceptRequestFriend = async (
  id: string,
) => {
  try {
    await apiRequest.post('friends/approve', {
      userRequest: id,
    });
  } catch (err) {
    console.log(err);
    
  }
};
