import createSagaMiddleware from '@redux-saga/core';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import hotels_list_slice from './hotels_list_slice';
import { rootSaga } from './sagas';
import search_hotel_req_params from './search_hotel_req_params';

export interface RootState {
  hotelsList: [];
  searchHotelReqParams: {
    location: string;
    checkInDate: string;
    amountOfDays: string;
  };
}

const rootReducer = combineReducers({
  hotelsList: hotels_list_slice,
  searchHotelReqParams: search_hotel_req_params,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
