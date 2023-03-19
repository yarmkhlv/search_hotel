import { createSlice } from '@reduxjs/toolkit';
import { Hotel } from './sagas';

const favoriteList = createSlice({
  name: 'favoriteList',
  initialState: [] as Array<Hotel>,
  reducers: {
    addToFavoriteList(state, action: { type: string; payload: Hotel }) {
      state.push(action.payload);
    },
    deleteFromFavoriteList(state, action: { type: string; payload: number }) {
      return state.filter((elem) => elem.hotelId !== action.payload);
    },
  },
});

export default favoriteList.reducer;
export const { addToFavoriteList, deleteFromFavoriteList } =
  favoriteList.actions;
