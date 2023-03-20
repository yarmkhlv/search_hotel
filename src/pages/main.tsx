import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SearchHotelBlock } from '../components/search_hotel_block';
import { FavoritesBlock } from '../components/favorites_block';
import { HotelsBlock } from '../components/hotels_block';

import { updateIsLogged } from '../store/is_logged';

import '../styles/main.css';
import { logOut } from '../helpers/svg';

export function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="header">
        <div className="header__text">Simple Hotel Check</div>
        <div>
          <button
            onClick={() => {
              dispatch(updateIsLogged(false));
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
