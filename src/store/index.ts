import { configureStore } from "@reduxjs/toolkit";
import deviceReducer from '../reducer/device';
import serviceReducer from '../reducer/service';
import giveNumberReducer from '../reducer/givenumber';
import userReducer from '../reducer/user';
import roleReducer from '../reducer/role';
import diaryReducer from '../reducer/history';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

const store = configureStore({
    reducer: {
        userReducer,
        roleReducer,
        diaryReducer,
        serviceReducer,
        deviceReducer,
        giveNumberReducer,
    }
})

export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState > = useSelector

export default store