import React from 'react'
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import SingleProduct from '../Pages/SingleProduct';
import Cart from '../Pages/Cart';
import NotFound from '../Pages/NotFound';
import Profile from './Profile';
import Orders from '../Pages/Orders';
import Login from '../Pages/Login';
import { Route, Routes } from 'react-router-dom';
import AuthWrapper from './AuthWrapper';
import About from '../Pages/About';


function AllRountes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={
            <AuthWrapper>
              <Cart/>
            </AuthWrapper>
          }/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default AllRountes;