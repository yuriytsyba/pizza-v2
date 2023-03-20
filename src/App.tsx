import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import NotFound from './pages/NotFound';
import FullPizza from './pages/FullPizza';
import MainLayouts from './layouts/MainLayouts';
import { lazy, Suspense } from 'react';

const Cart = lazy(() => import(/*webpackChunkName:'Cart'*/ './pages/Cart'));

function App() {
  return (
    <Routes>
      <Route path='' element={<MainLayouts />}>
        <Route path='pizza-v2/' element={<Home />}></Route>
        <Route
          path='pizza-v2/cart'
          element={
            <Suspense fallback={<div>Loading</div>}>
              <Cart />
            </Suspense>
          }
        ></Route>
        <Route path='pizza-v2/:id' element={<FullPizza />}></Route>
        <Route path='pizza-v2/*' element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
