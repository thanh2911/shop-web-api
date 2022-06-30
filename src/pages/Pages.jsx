import React  , {useContext} from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import Home from './home/Home';
import Product from './product/Product';
import Cart from './cart/Cart';
import Details from './details/Details';
import Login from './auth/Login';
import Register from './auth/Register';
import { GlobalState } from '../GlobalState'
import ProtectedRoute from './ProtectedRoute';

const Pages = () => {
  const state = useContext(GlobalState);

  console.log(state);

  return (
   <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/:category/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

        </Routes>

        <Footer />
   
   </BrowserRouter>
  )
}

export default Pages