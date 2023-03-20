import { createSlice } from '@reduxjs/toolkit';
import { generateUniqueKey } from '../helpers/generate_unique_key';
import { Hotel } from './sagas';

const favoriteList = createSlice({
  name: 'favoriteList',
  initialState: [] as Array<Hotel>,
  reducers: {
    addToFavoriteList(state, action: { type: string; payload: Hotel }) {
      state.push({ ...action.payload, uniqueKey: generateUniqueKey(state) });
    },
    deleteFromFavoriteList(
      state,
      action: {
        type: string;
        payload: { hotelId: number; checkInDate: string; amountOfDays: string };
      }
    ) {
      return state.filter(
        (elem) =>
          elem.hotelId !== action.payload.hotelId ||
          elem.checkInDate !== action.payload.checkInDate ||
          elem.amountOfDays !== action.payload.amountOfDays
      );
    },
    sortFavoriteList(state, action: { type: string; payload: Hotel[] }) {
      return [...action.payload];
    },
  },
});

export default favoriteList.reducer;
export const { addToFavoriteList, deleteFromFavoriteList, sortFavoriteList } =
  favoriteList.actions;
