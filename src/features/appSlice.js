import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: localStorage.getItem("mode") || "light",
    language: localStorage.getItem("language") || "uz",
    cart: [],
    emails: [],
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
            localStorage.setItem("mode", state.mode);
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
            localStorage.setItem("language", state.language);
        },
        addEmail: (state, action) => {
            state.emails.push(action.payload);
        },
        deleteEmail: (state, action) => {
            state.emails = state.emails.filter((email) => email !== action.payload);
        },
        editEmail: (state, action) => {
            const index = state.emails.findIndex(
                (email) => email === action.payload.oldEmail
            );
            if (index !== -1) {
                state.emails[index] = action.payload.newEmail;
            }
        },
    },
});

export const { toggleMode, setLanguage, addEmail, deleteEmail, editEmail } =
appSlice.actions;

export default appSlice.reducer;