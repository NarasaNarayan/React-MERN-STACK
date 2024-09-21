import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shop } from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import LoginSignUp from './Components/Pages/LoginSignUp';
import Cart from './Components/Pages/Cart';
import Footer from './Components/Footer/Footer';
import banner_kids from './Components/Assets/banner_kids.png'
import banner_womens from './Components/Assets/banner_women.png'
import banner_mens from './Components/Assets/banner_mens.png'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Shop /> } />
          <Route path="/mens" element={ <ShopCategory category='men' banner={banner_mens} />  } />
          <Route path="/womens" element={ <ShopCategory category='women' banner={banner_womens}/> } />
          <Route path="/kids" element={ <ShopCategory  category='kid' banner={banner_kids}/> } />
          <Route path="/product" element={ <Product /> } >
            <Route path=':productId' element={ <Product /> } />
          </Route>
          <Route path="/loginSignUp" element={<LoginSignUp/>} />
          <Route path="/cart" element={<Cart/>} />


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
