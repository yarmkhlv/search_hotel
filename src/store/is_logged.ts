import { createSlice } from '@reduxjs/toolkit';

function getLocalIsLogged() {
  const isLogged = localStorage.getItem('auth');
  if (isLogged) {
    return JSON.parse(isLogged);
  }
  return false;
}

const isLogged = createSlice({
  name: 'isLogged',
  initialState: getLocalIsLogged(),
  reducers: {
    updateIsLogged(state, action: { type: string; payload: boolean }) {
      return action.payload;
    },
  },
});

export default isLogged.reducer;
export const { updateIsLogged } = isLogged.actions;
