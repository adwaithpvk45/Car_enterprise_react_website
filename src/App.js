import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About.js'
import Footer from './components/Footer'
import { Route,Routes,} from 'react-router-dom';
import ProductDeatils from './components/ProductDetails';
import { Cart } from './components/Cart.js';
import LoginRegister from './components/LoginRegister.js';
import Logged from './components/Logged.js';


function App() {
  return (
<>     <Navbar/>
      <Routes>
        <Route path='/' element={<><Header/><About/><Body/></>}></Route>
        <Route path='/pd/:id' element={<ProductDeatils></ProductDeatils>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginRegister/>}></Route>
        <Route path='/loggedin' element={<Logged/>}></Route>
      </Routes>
      <Footer/>
</>
  );
}

export default App;
