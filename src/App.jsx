import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { Cart } from './Pages/Cart';

import './scss/app.scss';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
