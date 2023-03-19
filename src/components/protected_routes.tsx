import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../store';

export function ProtectedRoutes({ children }: any) {
  const location = useLocation();
  const { isLogged } = useSelector((store: RootState) => store);
  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}
