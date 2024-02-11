import './App.css';
import React, { useState } from 'react'
import Home from './Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter , Routes ,  Route} from 'react-router-dom';
import Services from './pages/services/Services';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Shop from './pages/shop/Shop';
import FakeDetails from './components/fake/FakeDetails';
import Cart from './pages/cart/Cart';
import Swal from 'sweetalert2'


const App = () => {

const [cartItems , setCartItems] = useState([]);


function addToCart(product){
  let selectedItem = cartItems.find(item => item.id == product.id );

  if(selectedItem){
    setCartItems(cartItems.map(item => item.id == product.id ?
      {...selectedItem , qty : selectedItem.qty + 1} : item
      ))
  
  }else{
    setCartItems([...cartItems , {...product , qty : 1}])
   
  }
}

function deleteProduct(product){
  setCartItems(cartItems.filter(item => item.id != product.id));
  Swal.fire({
    title: "This Product Removed From Cart Succesfully!",
    icon: "success",
    showConfirmButton : false,
    timer : 1500
  });
}


function decreaseProduct(product){
  let selectedItem = cartItems.find(item => item.id == product.id );

  if(selectedItem.qty == 1){
  setCartItems(cartItems.filter(item => item.id != product.id));
  Swal.fire({
    title: "This Product Removed From Cart Succesfully!",
    icon: "success",
    showConfirmButton : false,
    timer : 1500
  });
  
  }  else{
    setCartItems(cartItems.map(item => item.id == product.id ?
      {...selectedItem , qty : selectedItem.qty - 1} : item
      ))
  }
}

 

  return (
    <BrowserRouter>
      <Navbar cartItems = {cartItems}/>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About/>} />
      <Route path='/services' element = {<Services/>} />
      <Route path='/contact' element = {<Contact/>} />
      <Route path='/shop' element = {<Shop addToCart = {addToCart}/>} />
      <Route path='/fakeDetails/:id' element = {<FakeDetails/>} />
      <Route path='/cart' element = {<Cart decreaseProduct = {decreaseProduct} addToCart = {addToCart} cartItems = {cartItems} deleteProduct = {deleteProduct}/>} />

    </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App


