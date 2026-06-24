import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice"
import categoryReducer from "./slices/categorySlice"
import notesReducer from "./slices/notesSlice"

export const store = configureStore({
    reducer:{
        user: userReducer,
        category: categoryReducer,
        notes: notesReducer
    }
})