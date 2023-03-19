import { useDispatch } from 'react-redux';

import { StarsRating } from '../elements/starsRating';

import { deleteFromFavoriteList } from '../store/favorite_list_slice';
import { changeEndingOfDay } from '../helpers/transoform_word';
import { transformDate } from '../helpers/date_now_formatted';
import { Hotel } from '../store/sagas';

import '../styles/favorite_card.css';
import { coloredHeart } from '../helpers/svg';

export function FavoriteCard(props: { hotel: Hotel }) {
  const dispatch = useDispatch();
  const { hotel } = props;
  const { hotelName, hotelId, priceAvg, stars, checkInDate, amountOfDays } =
    hotel;
  return (
    <div className="favorites__list__item">
      <div className="favorites__list__item__row-1">
        <div className="row-1__text">{hotelName}</div>
        <button
          className="favorites__btn"
          onClick={() => {
            dispatch(deleteFromFavoriteList(hotelId));
          }}
          type="button"
        >
          {coloredHeart}
        </button>
      </div>
      <div className="favorites__list__item__row-2">
        <span className="row-2_date">{transformDate(checkInDate)}</span>
        <div className="row-2_strip" />
        <span className="row-2_days">
          {changeEndingOfDay(Number(amountOfDays))}
        </span>
      </div>
      <div className="favorites__list__item__row-3">
        <div className="row-3_rating">
          <StarsRating amount={stars} />
        </div>
        <div className="row-3__price">
          <span className="row-3__price_text">Price:</span>
          <span className="row-3__price_value">{Math.round(priceAvg)} ₽</span>
        </div>
      </div>
    </div>
  );
}
