import { configureStore } from '@reduxjs/toolkit';
//import mycounterSlice from '../counterSlice/mycounterSlice';
import cartSlice from '../counterSlice/cartSlice';

export const store = configureStore({
    reducer:{
        // counter:mycounterSlice,
        cart:cartSlice,
       
    }
})