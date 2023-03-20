import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { SearchHotelBlock } from '../components/search_hotel_block';
import { FavoritesBlock } from '../components/favorites_block';
import { HotelsBlock } from '../components/hotels_block';

import { RootState } from '../store';
import { updateIsLogged } from '../store/is_logged';
import { clearFavoriteList } from '../store/favorite_list_slice';

import '../styles/main.css';
import { logOut } from '../helpers/svg';

export function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { favoriteList } = useSelector((store: RootState) => store);
  useEffect(() => {
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
  }, [favoriteList]);
  return (
    <div className="main">
      <div className="header">
        <div className="header__text">Simple Hotel Check</div>
        <div>
          <button
            onClick={() => {
              dispatch(updateIsLogged(false));
              dispatch(clearFavoriteList());
              localStorage.removeItem('auth');
              localStorage.removeItem('favoriteList');
              navigate('/login');
            }}
            className="header__logout-btn"
            type="button"
          >
            Выйти
            {logOut}
          </button>
        </div>
      </div>
      <div className="content">
        <SearchHotelBlock />
        <FavoritesBlock />
        <HotelsBlock />
      </div>
    </div>
  );
}
