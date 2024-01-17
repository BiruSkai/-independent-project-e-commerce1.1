import {configureStore} from '@reduxjs/toolkit';
import loginSliceReducer from './ducks/loginSlice';
import productCategorySliceReducer from './ducks/loginSlice';

const rootReducer = {
        loginSliceReducer,
        productCategorySliceReducer
};

export const store = configureStore({reducer: rootReducer});