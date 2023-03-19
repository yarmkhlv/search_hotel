import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

const isLogged = createSlice({
  name: 'isLogged',
  initialState,
  reducers: {
    updateIsLogged(state, action: { type: string; payload: boolean }) {
      return action.payload;
    },
  },
});

export default isLogged.reducer;
export const { updateIsLogged } = isLogged.actions;
