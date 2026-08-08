import { createSlice, nanoid } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"Auth",
    initialState:{
       status:false,
       userData:null,
       search:null,
    },
    reducers:{
       login:(state,action)=>{
           state.status = true;
           state.userData = action.payload;
       },
       logout:(state)=>{
        state.status = false;
        state.userData=null;
       },
       search:(state,action)=>{
        state.search = action.payload;
       }
    }
})

export const {login,logout,search}= authSlice.actions;
export default authSlice.reducer;
