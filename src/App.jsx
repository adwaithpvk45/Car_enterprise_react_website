import './App.css';
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import { Route,Routes,} from 'react-router-dom';
import ProductDeatils from './components/ProductDetails.jsx';
import { Cart } from './components/Cart.jsx';
import LoginRegister from './components/LoginRegister.jsx';
import Logged from './components/Logged.jsx';
import Service from './components/Service.jsx';


function App() {
  return (
<>     
<Navbar/>
      <Routes>
        <Route path='/' element={<><Header/><About/><Body/><Service></Service></>}></Route>
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
