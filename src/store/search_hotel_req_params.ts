import { createSlice } from '@reduxjs/toolkit';
import { dateFormattedForInput } from '../helpers/date_now_formatted';

const initialState = {
  location: 'Москва',
  checkInDate: dateFormattedForInput(),
  amountOfDays: '1',
};

const searchHotelReqParams = createSlice({
  name: 'searchHotelReqParams',
  initialState,
  reducers: {
    updateLocationParam(state, action) {
      return { ...state, location: action.payload };
    },
    updateCheckInDateParam(state, action) {
      return { ...state, checkInDate: action.payload };
    },
    updateAmountOfDaysParam(state, action) {
      return { ...state, amountOfDays: action.payload };
    },
  },
});

export default searchHotelReqParams.reducer;
export const {
  updateLocationParam,
  updateCheckInDateParam,
  updateAmountOfDaysParam,
} = searchHotelReqParams.actions;
