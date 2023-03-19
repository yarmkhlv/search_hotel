import { useSelector } from 'react-redux';

import { CustomSelect } from '../elements/custom_select';
import { FavoriteCard } from './favorite_card';

import { RootState } from '../store';
import { Hotel } from '../store/sagas';

export function FavoritesBlock() {
  const { favoriteList } = useSelector((store: RootState) => store);
  const favoriteListRender = favoriteList.map((hotel: Hotel) => (
    <FavoriteCard hotel={hotel} key={hotel.hotelId} />
  ));
  return (
    <div className="favorites">
      <div className="favorites__text">Избранное</div>
      <div className="favorites__selects">
        <CustomSelect active name="Рейтинг" />
        <CustomSelect active={false} name="Цена" />
      </div>
      <div className="favorites__list">{favoriteListRender}</div>
    </div>
  );
}
