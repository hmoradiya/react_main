import './App.scss';
import Home from './Routes/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Routes/Navigation/Navigation';
import Shop from './Routes/Shop/Shop';
import SignIn from './Routes/SignIn/SignIn';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
