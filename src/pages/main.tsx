import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SearchHotelBlock } from '../components/search_hotel_block';

import { updateIsLogged } from '../store/is_logged';

import '../styles/main.css';
import { FavoritesBlock } from '../components/favorites_block';
import { HotelsBlock } from '../components/hotels_block';

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
            type="button"
          >
            Выйти
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
