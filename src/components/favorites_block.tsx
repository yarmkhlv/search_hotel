/* eslint-disable react/jsx-no-bind */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CustomSelect } from '../elements/custom_select';
import { FavoriteCard } from './favorite_card';

import {
  addToFavoriteList,
  sortFavoriteList,
} from '../store/favorite_list_slice';
import { doSorting } from '../helpers/do_sorting';
import { RootState } from '../store';
import { Hotel } from '../store/sagas';

export function FavoritesBlock() {
  const dispatch = useDispatch();
  const { favoriteList } = useSelector((store: RootState) => store);
  const favoriteListRender = favoriteList.map((hotel: Hotel) => (
    <FavoriteCard hotel={hotel} key={hotel.uniqueKey} />
  ));

  const [statusActive, setStatusActive] = useState({
    id: 1,
    sort: 'decrease',
  });

  useEffect(() => {
    if (favoriteList !== undefined) {
      const sortedList = doSorting(
        favoriteList,
        statusActive.id,
        statusActive.sort
      );
      dispatch(sortFavoriteList(sortedList));
    }
  }, [statusActive, addToFavoriteList]);

  return (
    <div className="favorites">
      <div className="favorites__text">Избранное</div>
      <div className="favorites__selects">
        <CustomSelect
          statusActive={statusActive}
          idBtn={1}
          text="Рейтинг"
          setStatusActive={setStatusActive}
        />
        <CustomSelect
          statusActive={statusActive}
          idBtn={2}
          text="Цена"
          setStatusActive={setStatusActive}
        />
      </div>
      <div className="favorites__list">{favoriteListRender}</div>
    </div>
  );
}
