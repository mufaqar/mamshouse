import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    days : 1,
    price: 149,
    startDate: '',
    endDate: ''
}

const TotalBookingDays = createSlice({
    name:'calculate-price',
    initialState,
    reducers:{
        calculateDays:(state, action)=>{
            if(action.payload === 'NaN'){
                return state.days = 1
            }
            let days = action.payload + 1;
            state.days * days
        },
        calculatePrice:(state, action)=>{
            state.price * state.days
        },
        startEndDate:(state,action)=>{
            state.startDate = action.payload.startDate
            state.endDate = action.payload.endDate
        }
    }
})


export const { calculateDays, calculatePrice, startEndDate } = TotalBookingDays.actions
export default TotalBookingDays