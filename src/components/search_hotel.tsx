import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { RootState } from '../store';
import {
  updateCheckInDateParam,
  updateLocationParam,
  updateAmountOfDaysParam,
} from '../store/search_hotel_req_params';

import '../styles/search_hotel.css';

export function SearchHotel() {
  const dispatch = useDispatch();
  const { location, checkInDate, amountOfDays } = useSelector(
    (store: RootState) => store.searchHotelReqParams
  );
  function bindGetHotelsData() {
    dispatch({
      type: 'GET_HOTELS_DATA',
      payload: { location, checkInDate, amountOfDays },
    });
  }
  useEffect(() => {
    bindGetHotelsData();
  }, []);
  return (
    <form
      className="filters"
      onSubmit={(event) => {
        event.preventDefault();
        bindGetHotelsData();
      }}
    >
      <div className="filters__section">
        <label className="filters__section__label" htmlFor="location">
          Локация
        </label>
        <input
          type="text"
          className="filters__section__input"
          id="location"
          required
          onInput={(event) =>
            dispatch(updateLocationParam(event.currentTarget.value))
          }
          value={location}
        />
      </div>
      <div className="filters__section">
        <label className="filters__section__label" htmlFor="date">
          Дата заселения
        </label>
        <input
          type="date"
          className="filters__section__input"
          id="date"
          required
          onInput={(event) =>
            dispatch(updateCheckInDateParam(event.currentTarget.value))
          }
          value={checkInDate}
        />
      </div>
      <div className="filters__section">
        <label className="filters__section__label" htmlFor="days">
          Количество дней
        </label>
        <input
          type="number"
          min="1"
          className="filters__section__input input-number required"
          id="days"
          onChange={(event) => {
            if (Number(event.currentTarget.value) < 1) {
              dispatch(updateAmountOfDaysParam(''));
              return;
            }
            dispatch(updateAmountOfDaysParam(event.currentTarget.value));
          }}
          value={amountOfDays}
        />
      </div>
      <button type="submit" className="styled-btn filters__section__btn_size">
        Найти
      </button>
    </form>
  );
}
