import { takeLeading, put, call } from '@redux-saga/core/effects';
import {
  updateHotelsList,
  updateHotelsListError,
  updateHotelsListLoading,
  Hotel,
} from '../hotels_list_slice';
import { dateFormattedCheckOut } from '../../helpers/date_now_formatted';

const valueForReq = 20;

async function getHotels(
  location: string,
  checkInDate: string,
  amountOfDays: string
) {
  const checkOutDate = dateFormattedCheckOut(checkInDate, amountOfDays);
  const url = `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=${valueForReq}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

interface GetHotelsPayload {
  location: string;
  checkInDate: string;
  amountOfDays: string;
}

export function* workerSaga(action: {
  type: string;
  payload: GetHotelsPayload;
}): Generator<any, void, any> {
  yield put(updateHotelsListLoading());
  const { location, checkInDate, amountOfDays } = action.payload;
  try {
    const data = yield call(getHotels, location, checkInDate, amountOfDays);
    const modifedData = yield data.map((hotel: Hotel) => ({
      ...hotel,
      checkInDate,
      amountOfDays,
    }));
    yield put(
      updateHotelsList({
        list: modifedData,
        loading: false,
        error: { mode: false },
      })
    );
  } catch (error: any) {
    yield put(updateHotelsListError(error.message));
  }
}

export function* watcherSaga() {
  yield takeLeading('GET_HOTELS_DATA', workerSaga);
}

export function* rootSaga() {
  yield watcherSaga();
}
