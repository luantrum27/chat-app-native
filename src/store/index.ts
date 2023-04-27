import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import authReducer from './authSlice';
import userReducer from './userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginPersistConfig = {
    key: 'login',
    version: 1,
    storage: AsyncStorage,
    whitelist: ['login'],
};
const rootReducer = combineReducers({
    auth: persistReducer(loginPersistConfig, authReducer),
    user: userReducer,

});
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;