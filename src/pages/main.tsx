import { useSelector } from 'react-redux';

import { SearchHotel } from '../components/search_hotel';
import { FavoriteCard } from '../components/favorite_card';
import { HotelItemCard } from '../components/hotel_item_card';

import { RootState } from '../store';
import { transformDate } from '../helpers/date_now_formatted';
import '../styles/main.css';
import arrowRight from '../assets/arrow_right.svg';
import { Hotel } from '../store/sagas';

export function Main() {
  const { hotelsList } = useSelector((store: RootState) => store);
  const hotelsListRender = hotelsList.map((hotel: Hotel) => (
    <HotelItemCard
      name={hotel.hotelName}
      priceAvg={hotel.priceAvg}
      checkInDate={hotel.checkInDate}
      amountOfDays={hotel.amountOfDays}
      key={hotel.hotelId}
    />
  ));
  return (
    <div className="main">
      <div className="header">
        <div className="header__text">Simple Hotel Check</div>
        <div>
          <button type="button">Выйти</button>
        </div>
      </div>
      <div className="content">
        <SearchHotel />
        <div className="favorites">
          <div className="favorites__text">Избранное</div>
          <div className="favorites__selects">
            <select className="favorites__selects__item">
              <option value="" disabled selected hidden>
                Рейтинг
              </option>
              <option>Рейтинг по возрастанию</option>
              <option>Рейтинг по убыванию</option>
            </select>
          </div>
          <div className="favorites__list">
            <FavoriteCard />
          </div>
        </div>
        <div className="hotels">
          <div className="hotels__header">
            <div className="hotels__header__left">
              <div className="hotels__header__text">Отели</div>
              <div className="hotels__header__arrow">
                <img src={arrowRight} alt="arrow" />
              </div>
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
            Добавлено в Избранное: <span>3</span> отеля
          </div>
          <div className="hotels__list">{hotelsListRender}</div>
        </div>
      </div>
    </div>
  );
}
