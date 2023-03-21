import { useDispatch, useSelector } from 'react-redux';

import { transformDate } from '../helpers/date_now_formatted';
import { changeEndingOfDay } from '../helpers/transoform_word';
import { RootState } from '../store';
import {
  addToFavoriteList,
  deleteFromFavoriteList,
} from '../store/favorite_list_slice';
import { StarsRating } from '../elements/starsRating';
import { Heart } from '../elements/heart';

import '../styles/hotel_item_card.css';
import { Hotel } from '../store/hotels_list_slice';

export function HotelItemCard(props: { hotel: Hotel }) {
  const dispatch = useDispatch();
  const { hotel } = props;
  const { hotelName, priceAvg, checkInDate, amountOfDays, hotelId, stars } =
    hotel;
  const { favoriteList } = useSelector((store: RootState) => store);
  const favorite = favoriteList.some(
    (elem) =>
      elem.hotelId === hotelId &&
      elem.checkInDate === checkInDate &&
      elem.amountOfDays === amountOfDays
  );
  return (
    <div className="hotels__list__item">
      <div className="hotel-card-wrapper">
        <div className="hotel-card-pic" />
        <div className="hotel__rows-wrapper">
          <div className="hotel__list__item__row-1">
            <div className="hotel__row-1__text">{hotelName}</div>
            <button
              onClick={() => {
                if (favorite) {
                  dispatch(
                    deleteFromFavoriteList({
                      hotelId,
                      checkInDate,
                      amountOfDays,
                    })
                  );
                } else dispatch(addToFavoriteList(hotel));
              }}
              type="button"
            >
              <Heart favorite={favorite} />
            </button>
          </div>
          <div className="hotel__list__item__row-2">
            <span className="hotel__row-2_date">
              {transformDate(checkInDate)}
            </span>
            <div className="hotel__row-2_strip" />
            <span className="hotel__row-2_days">
              {changeEndingOfDay(Number(amountOfDays))}
            </span>
          </div>
          <div className="hotel__list__item__row-3">
            <div className="hotel__row-3_rating">
              <StarsRating amount={stars} />
            </div>
            <div className="hotel__row-3__price">
              <span className="hotel__row-3__price_text">Price:</span>
              <span className="hotel__row-3__price_value">
                {Math.round(priceAvg)} ₽
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
