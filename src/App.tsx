import { Route, Routes } from 'react-router-dom';

import { ProtectedRoutes } from './components/protected_routes';
import { Main } from './pages/main';
import { Authorization } from './pages/authorization';

import './styles/app.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          index
          path="/"
          element={
            <ProtectedRoutes>
              <Main />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<Authorization />} />
      </Routes>
    </div>
  );
}

export default App;
