import { configureStore } from "@reduxjs/toolkit";
import authinfo from './authSlice'

const Store = configureStore({
    reducer :{
      Auth:authinfo
    }
})

export default Store;
