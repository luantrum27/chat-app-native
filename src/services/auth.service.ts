import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "../store/authSlice";
import { IGetUsersQuery } from "../models";
import apiRequest from "../api/apiRequest";
import { getRefreshToken } from "../utils/getToken";

interface IUserLogin {
    username: string;
    password: string;
}
interface IUserSignUp {
    username: string;
    password: string;
    email: string;
}
export const login = async ({username, password}: IUserLogin, navigation: any, dispatch: any) => {
    dispatch(loginStart())
    try {
        const user = {
            username,
            password,
        }
        
        const request = await apiRequest.post('auth/login', user);
        dispatch(loginSuccess())
        await AsyncStorage.setItem('token', JSON.stringify(request.data))
        navigation.navigate('Dashboard')
      } catch (error) {
        console.log(error);
        dispatch(loginFailed())
      }
}

export const signup = async ({username, password, email}: IUserSignUp, navigation: any, dispatch: any) => {
    dispatch(registerStart())
    try {
        const newUser = {
          email,
          username,
          password,
        }
        const res = await apiRequest.post('auth/register', newUser);
        dispatch(registerSuccess());
        dispatch(loginSuccess());
        await AsyncStorage.setItem('token', JSON.stringify(res.data))
        navigation.navigate('Login')
    } catch (error) {
        console.log(error);
        dispatch(registerFailed())
    }
}

export const logout = async (
) => {
  try {
    const refreshToken = getRefreshToken();
    await apiRequest.post('auth/logout', { refreshToken });
  } catch (err) {
    console.log(err);
  }
};

export const checkUserActivate = async (
  ) => {
    try {
      const res = await apiRequest.get('auth/check-activate');
      return res.data;
    } catch (err) {
      console.log(err);
    }  
  };

  export const getOtp = async () => {
    try {
      await apiRequest.post('auth/send-otp');
    } catch (err) {
      console.log(err);
      
    }
  };

  export const checkOtp = async (
    otp: string,
  ) => {
    try {
      const res = await apiRequest.post('auth/check-otp', { otp });
      return res.data;
    } catch (err) {
      console.log(err);
      
    }
  };