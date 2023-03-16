import '../styles/main.css';
import heartRed from '../assets/heart_red.svg';

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
            <div className="favorites__list__item">
              <div className="favorites__list__item__row-1">
                <div className="row-1__text">Moscow Marriott Grand Hotel</div>
                <div className="row-1__pic-container">
                  <img className="row-1__pic" src={heartRed} alt="red heart" />
                </div>
              </div>
              <div className="favorites__list__item__row-2">
                <span className="row-2_date">28 June, 2020</span>
                <div className="row-2_strip" />
                <span className="row-2_days">28 June, 2020</span>
              </div>
              <div className="favorites__list__item__row-3">
                <div className="row-3_rating" />
                <div className="row-3__price">
                  <div className="row-3__price_text">Price:</div>
                  <div className="row-3__price_value">23 924 ₽</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hotels">
          <div className="hotels__header">
            <div className="hotels__header__text">Отели</div>
            <div className="hotels__header__arrow">{`>`}</div>
            <div className="hotels__header__text">Москва</div>
            <div className="hotels__header__date">07 июля 2020</div>
          </div>
        </div>
      </div>
    </div>
  );
}
