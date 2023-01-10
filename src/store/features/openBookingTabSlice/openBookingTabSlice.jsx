import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open : false
}
const openBookingTabSlice = createSlice({
    name:"open-bboking-slice",
    initialState,
    reducers:{
        changeOpenState:(state, action)=>{
            state.open = !state.open
        }
    }
})


export const { changeOpenState } = openBookingTabSlice.actions
export default openBookingTabSlice