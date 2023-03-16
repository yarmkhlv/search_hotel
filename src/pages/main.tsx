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
        <form className="filters">
          <div className="filters__section">
            <label className="filters__section__label" htmlFor="location">
              Локация
            </label>
            <input
              type="text"
              className="filters__section__input"
              id="location"
              required
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
            />
          </div>
          <div className="filters__section">
            <label className="filters__section__label" htmlFor="days">
              Количество дней
            </label>
            <input
              defaultValue="1"
              type="number"
              min="0"
              className="filters__section__input input-number required"
              id="days"
            />
          </div>
          <button
            type="submit"
            className="styled-btn filters__section__btn_size"
          >
            Найти
          </button>
        </form>
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
