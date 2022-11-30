import {Footer} from './assets/components/Footer';
import {Container} from './assets/components/Container';
import { Route, Routes } from 'react-router-dom';
import Login from './assets/pages/Login';
import { Home } from './assets/pages/Home';

const App = () => {
  return(
    <div >
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
