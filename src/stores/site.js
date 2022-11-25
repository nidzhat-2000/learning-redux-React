import { createSlice } from '@reduxjs/toolkit';

export const site = createSlice({
  name: 'site',
  initialState: {
    dark: false,
    language: 'en',
  },
  reducers: {
    setDarkMode: state => {
      state.dark = !state.dark;
    },
    setLang: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setDarkMode, setLang } = site.actions;

export default site.reducer;
