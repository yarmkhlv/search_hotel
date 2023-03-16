import '../styles/favorite_card.css';

import { coloredStar, heart, star } from '../helpers/svg';

export function HotelItemCard() {
  return (
    <div className="favorites__list__item">
      <div className="favorites__list__item__row-1">
        <div className="row-1__text">Moscow Marriott Grand Hotel</div>
        <button type="button">{heart}</button>
      </div>
      <div className="favorites__list__item__row-2">
        <span className="row-2_date">28 June, 2020</span>
        <div className="row-2_strip" />
        <span className="row-2_days">28 June, 2020</span>
      </div>
      <div className="favorites__list__item__row-3">
        <div className="row-3_rating">{[star, coloredStar]}</div>
        <div className="row-3__price">
          <span className="row-3__price_text">Price:</span>
          <span className="row-3__price_value">23 924 ₽</span>
        </div>
      </div>
    </div>
  );
}
