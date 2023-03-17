import { SearchHotel } from '../components/search_hotel';
import { FavoriteCard } from '../components/favorite_card';
import { HotelItemCard } from '../components/hotel_item_card';

import '../styles/main.css';
import arrowRight from '../assets/arrow_right.svg';

export function Main() {
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
              <div className="hotels__header__text">Москва</div>
            </div>
            <div className="hotels__header__date">07 июля 2020</div>
          </div>
          <div className="hotels__carousel" />
          <div className="hotels__text">
            Добавлено в Избранное: <span>3</span> отеля
          </div>
          <div className="hotels__list">
            <HotelItemCard />
          </div>
        </div>
      </div>
    </div>
  );
}
