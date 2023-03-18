// eslint-disable-next-line require-yield
import { takeLeading, put, call } from '@redux-saga/core/effects';
import { updateHotelsList } from '../hotels_list_slice';
import { dateFormattedCheckOut } from '../../helpers/date_now_formatted';

async function getHotels(
  location: string,
  checkInDate: string,
  amountOfDays: string
) {
  const checkOutDate = dateFormattedCheckOut(checkInDate, amountOfDays);
  const url = `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=10`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

interface GetHotelsPayload {
  location: string;
  checkInDate: string;
  amountOfDays: string;
}

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
}

export function* workerSaga(action: {
  type: string;
  payload: GetHotelsPayload;
}): Generator<any, void, any> {
  const { location, checkInDate, amountOfDays } = action.payload;
  const data = yield call(getHotels, location, checkInDate, amountOfDays);
  const modifedData = yield data.map((hotel: Hotel) => ({
    ...hotel,
    checkInDate,
    amountOfDays,
  }));
  yield put(updateHotelsList(modifedData));
}

export function* watcherSaga() {
  yield takeLeading('GET_HOTELS_DATA', workerSaga);
}

export function* rootSaga() {
  yield watcherSaga();
}
