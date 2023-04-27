import axios, { AxiosHeaders } from "axios";
import { getRefreshToken } from "../utils/getToken";

// const token = await getRefreshToken();

const apiRequest = axios.create({
    baseURL: 'http://192.168.2.47:8000/api/',
    headers: {
            'Content-Type': 'application/json',
    }
})
getRefreshToken().then((accessToken) => {
    apiRequest.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}).catch((error) => {
    console.log('Error getting access token:', error);
});

export default apiRequest;