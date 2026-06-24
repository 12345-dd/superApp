import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: "notes",

    initialState: {
        notes: localStorage.getItem("notes") || ""
    },

    reducers: {
        setNotes: (state,action) => {
            state.notes = action.payload;
            localStorage.setItem("notes",action.payload)
        }
    }
})

export const {setNotes} = notesSlice.actions;
export default notesSlice.reducer;