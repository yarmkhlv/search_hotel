import { configureStore, combineReducers } from '@reduxjs/toolkit';
import hotels_list_slice from './hotels_list_slice';

const rootReducer = combineReducers({
  hotelsList: hotels_list_slice,
});

export const store = configureStore({
  reducer: rootReducer,
});
