import createSagaMiddleware from '@redux-saga/core';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import favorite_list_slice from './favorite_list_slice';
import hotels_list_slice from './hotels_list_slice';
import is_logged from './is_logged';
import { Hotel, rootSaga } from './sagas';
import search_hotel_req_params from './search_hotel_req_params';

export interface RootState {
  isLogged: boolean;
  hotelsList: Hotel[];
  favoriteList: Hotel[];
  searchHotelReqParams: {
    location: string;
    checkInDate: string;
    amountOfDays: string;
  };
}

const rootReducer = combineReducers({
  isLogged: is_logged,
  hotelsList: hotels_list_slice,
  favoriteList: favorite_list_slice,
  searchHotelReqParams: search_hotel_req_params,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
