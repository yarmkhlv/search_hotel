import { transformDate } from '../helpers/date_now_formatted';
import { changeEndingOfDay } from '../helpers/change_ending_of_day';

import '../styles/favorite_card.css';
import { coloredStar, heart, star } from '../helpers/svg';

export function HotelItemCard(props: {
  name: string;
  priceAvg: number;
  checkInDate: string;
  amountOfDays: string;
}) {
  const { name, priceAvg, checkInDate, amountOfDays } = props;
  return (
    <div className="favorites__list__item">
      <div className="hotel-card-wrapper">
        <div className="hotel-card-pic" />
        <div className="rows-wrapper">
          <div className="favorites__list__item__row-1">
            <div className="row-1__text">{name}</div>
            <button type="button">{heart}</button>
          </div>
          <div className="favorites__list__item__row-2">
            <span className="row-2_date">{transformDate(checkInDate)}</span>
            <div className="row-2_strip" />
            <span className="row-2_days">
              {changeEndingOfDay(Number(amountOfDays))}
            </span>
          </div>
          <div className="favorites__list__item__row-3">
            <div className="row-3_rating">{[star, coloredStar]}</div>
            <div className="row-3__price">
              <span className="row-3__price_text">Price:</span>
              <span className="row-3__price_value">
                {Math.round(priceAvg)} ₽
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
