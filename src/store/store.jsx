import { configureStore } from "@reduxjs/toolkit";
import openBookingTabSlice from "./features/openBookingTabSlice/openBookingTabSlice";

const store = configureStore({
    reducer:{
        openBookingTab : openBookingTabSlice.reducer
    }
})


export default store;