import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    days : 1,
    price: 149
}

const TotalBookingDays = createSlice({
    name:'calculate-price',
    initialState,
    reducers:{
        calculateDays:(state, action)=>{
            state.days * action.payload
            console.log('action.payload',action.payload)
        },
        calculatePrice:(state, action)=>{
            state.price * state.days
        }
    }
})


export const { calculateDays, calculatePrice } = TotalBookingDays.actions
export default TotalBookingDays