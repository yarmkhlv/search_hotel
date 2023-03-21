import { createSlice } from '@reduxjs/toolkit';

export interface Hotel {
  hotelId: number;
  hotelName: string;
  location: {
    state: boolean;
    country: string;
    name: string;
    geo: object;
  };
  locationId: number;
  priceAvg: number;
  priceFrom: number;
  pricePercentile: object;
  stars: number;
  checkInDate: string;
  amountOfDays: string;
  uniqueKey: number;
}

const hotelsList = createSlice({
  name: 'hotelList',
  initialState: {
    list: [] as Array<Hotel>,
    error: {
      mode: false,
      text: '',
    },
    loading: false,
  },
  reducers: {
    updateHotelsList(
      state,
      action: {
        type: string;
        payload: { list: Hotel[]; error: { mode: boolean }; loading: boolean };
      }
    ) {
      return {
        list: [...action.payload.list],
        error: {
          mode: false,
          text: '',
        },
        loading: false,
      };
    },
    updateHotelsListError(state, action: { type: string; payload: string }) {
      return {
        ...state,
        error: { mode: true, text: action.payload },
        loading: false,
      };
    },
    updateHotelsListLoading(state) {
      console.log(state);
      return { ...state, error: { mode: false, text: '' }, loading: true };
    },
  },
});

export default hotelsList.reducer;
export const {
  updateHotelsList,
  updateHotelsListError,
  updateHotelsListLoading,
} = hotelsList.actions;
