import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategories: []
}

const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers: {
        setCategories: (state,action) => {
            state.selectedCategories = action.payload
        },

        clearCategories: (state,action) => {
            state.selectedCategories = []
        }
    }
})

export const {setCategories, clearCategories} = categorySlice.actions;
export default categorySlice.reducer;