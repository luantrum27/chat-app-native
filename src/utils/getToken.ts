import AsyncStorage from "@react-native-async-storage/async-storage";

export const getRefreshToken = async () => {
    try {
        const tokenStorage = await AsyncStorage.getItem('token');
        if (!tokenStorage) return '';
        const accessToken = JSON.parse(tokenStorage).access_token;
        if (!accessToken) return '';
        return accessToken;
    } catch (error) {
        console.log(error);
        return '';
    }
}