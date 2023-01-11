import { configureStore } from "@reduxjs/toolkit";
import openBookingTabSlice from "./features/BookingTabSlice/openBookingTabSlice";
import TotalBookingDays from "./features/BookingTabSlice/TotalBookingDays"

const store = configureStore({
    reducer:{
        openBookingTab : openBookingTabSlice.reducer,
        TotalBookingDays: TotalBookingDays.reducer
    }
})


export default store;