import { useSelector } from 'react-redux';

import { HotelItemCard } from './hotel_item_card';

import { RootState } from '../store';
import { Hotel } from '../store/sagas';

import { transformDate } from '../helpers/date_now_formatted';
import { transformWordHotel } from '../helpers/transoform_word';

const arrowRight = (
  <svg
    width="11"
    height="20"
    viewBox="0 0 11 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1.33334L9.66667 10L1 18.6667"
      stroke="#A7A7A7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function HotelsBlock() {
  const { hotelsList, favoriteList } = useSelector((store: RootState) => store);
  const hotelsListRender = hotelsList.map((hotel: Hotel) => (
    <HotelItemCard hotel={hotel} key={hotel.hotelId} />
  ));
  const numbersOfHotels = favoriteList.length;
  return (
    <div className="hotels">
      <div className="hotels__header">
        <div className="hotels__header__left">
          <div className="hotels__header__text">Отели</div>
          <div className="hotels__header__arrow">{arrowRight}</div>
          <div className="hotels__header__text">
            {hotelsList ? hotelsList[0]?.location.name : null}
          </div>
        </div>
        <div className="hotels__header__date">
          {hotelsList ? transformDate(hotelsList[0]?.checkInDate) : null}
        </div>
      </div>
      <div className="hotels__carousel" />
      <div className="hotels__text">
        Добавлено в Избранное: <span>{numbersOfHotels}</span>{' '}
        {transformWordHotel(numbersOfHotels)}
      </div>
      <div className="hotels__list">{hotelsListRender}</div>
    </div>
  );
}
