import {configureStore} from "@reduxjs/toolkit";
import fetchReducer from '../features/fetch/fetchSlice.js'

export const store = configureStore({
    reducer: {
        data: fetchReducer,
    }
})