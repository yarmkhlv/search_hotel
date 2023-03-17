import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateHotelsList } from '../store/hotels_list_slice';

import {
  dateFormattedForInput,
  dateFormattedCheckOut,
} from '../helpers/date_now_formatted';
import '../styles/search_hotel.css';

export function SearchHotel() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('Москва');
  const [checkInDate, setCheckInDate] = useState(dateFormattedForInput());
  const [amountOfDays, setAmountOfDays] = useState('1');
  async function findHotels() {
    const checkOutDate = dateFormattedCheckOut(checkInDate, amountOfDays);
    const url = `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=5`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch(updateHotelsList(data));
  }
  useEffect(() => {
    findHotels();
  }, []);
  return (
    <form
      className="filters"
      onSubmit={(event) => {
        event.preventDefault();
        findHotels();
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
          onInput={(event) => setLocation(event.currentTarget.value)}
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
          onInput={(event) => setCheckInDate(event.currentTarget.value)}
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
              setAmountOfDays('');
              return;
            }
            setAmountOfDays(event.currentTarget.value);
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
