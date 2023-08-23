import './App.scss';
import Home from './Routes/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Routes/Navigation/Navigation';
import Shop from './Routes/Shop/Shop';
import Authentication from './Routes/Authentication/Authentication';
import Checkout from './Routes/Checkout/Checkout';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
