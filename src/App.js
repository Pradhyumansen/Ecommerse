
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Product from './product';
import Cart from './cart';
import Main from './main';
import SignUp from './Signup';
import Details from './Details';
import { useState } from 'react';


var item = [];


function App() {
 
  const [cartLength,setCartLength] = useState(0);
  function getData(data,a){ 
    item.push(data)
    setCartLength(item.length) 
  }
  function cartdata(data){
    data =item.length - data.length+1
    
   setCartLength(data)
   
}
console.log(item)
  return (
      <BrowserRouter>
        <Header cartLength={cartLength}/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/product' element={<Product />}  />
            <Route path='/cart' element={<Cart change={item}  handelcart={cartdata}/>}/>
            <Route path='/Signup' element={<SignUp/>}/>
            <Route path='/product/:id' element={<Details handelData={getData} />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
      
  );
}

export default App;
