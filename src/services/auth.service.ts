import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "../store/authSlice";
import { IGetUsersQuery } from "../models";
import apiRequest from "../api/apiRequest";

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
        console.log(user);
        
        const request = await apiRequest.post('auth/login', user);
        dispatch(loginSuccess())
        await AsyncStorage.setItem('token', JSON.stringify(request.data))
        navigation.navigate('Dashboard')
      } catch (error) {
        console.log(error);
        dispatch(loginFailed())
      }
}
export const signup = async ({username, password, email}: IUserSignUp, dispatch: any) => {
    dispatch(registerStart())
    try {
        const newUser = {
          email,
          username,
          password,
        }
        await apiRequest.post('auth/register', newUser);
        dispatch(registerSuccess())

    } catch (error) {
        console.log(error);
        dispatch(registerFailed())
    }
}

