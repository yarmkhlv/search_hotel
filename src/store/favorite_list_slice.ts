import { createSlice } from '@reduxjs/toolkit';
import { generateUniqueKey } from '../helpers/generate_unique_key';
import { Hotel } from './sagas';

function getLocalFavList() {
  const keyStringify = localStorage.getItem('favoriteList');
  if (keyStringify) {
    return JSON.parse(keyStringify);
  }
  return [];
}

const favoriteList = createSlice({
  name: 'favoriteList',
  initialState: getLocalFavList() as Array<Hotel>,
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
    clearFavoriteList(state) {
      return [];
    },
  },
});

export default favoriteList.reducer;
export const {
  addToFavoriteList,
  deleteFromFavoriteList,
  sortFavoriteList,
  clearFavoriteList,
} = favoriteList.actions;
