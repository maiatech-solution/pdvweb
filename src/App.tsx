import { Route, Routes, Navigate } from 'react-router-dom';

import Login from './assets/pages/Login';
import { Home } from './assets/pages/Home';
import { Venda } from './assets/pages/Venda';

const App = () => {
  return(
    <div >
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/venda' element={<Venda />}></Route>
      </Routes>
    </div>
  );
}

export default App;
