import { createSlice } from '@reduxjs/toolkit';

const hotelsList = createSlice({
  name: 'hotelList',
  initialState: [],
  reducers: {
    updateHotelsList(state, action: { type: string; payload: [] }) {
      return [...action.payload];
    },
  },
});

export default hotelsList.reducer;
export const { updateHotelsList } = hotelsList.actions;
