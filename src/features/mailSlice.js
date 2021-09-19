import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState : {
    value: false,
    selectedMail: null,
  },
  reducers: {
    openMessage: state => {
      state.value = true;
    },
    closeMessage: state => {
      state.value = false;
    },
    chooseMail: (state, action) => {
      state.selectedMail = action.payload;
    }
  },
});

export const { openMessage, closeMessage, chooseMail } = mailSlice.actions;
export const selectedOpenMail = (state) => state.mail.selectedMail;
export const selectMail = (state) => state.mail.value;

export default mailSlice.reducer;
