import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Mug from "./pages/mug/Mug";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function App() {

  const getCandies = async () => {
    const response = await fetch("http://localhost:5000/meanmugsapi");
    const data = await response.json();
    return data
  }

  const [candies, setCandies] = useState([])
  const [cart, setCart] = useState([])
  const [singleMug, setMug] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const inventory = await getCandies();
      setCandies(inventory);
    };
    fetchData();
  }, []);

  return (
      <BrowserRouter>

        <div>
          <Navbar cart={cart}/>
          <Routes>

            <Route path='/' element={<Home mugs={candies} cart={cart} setCart={setCart} singleMug={singleMug} setMug={setMug}/>}/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
            <Route path='/signin' element={<SignIn setUser={setUser} user={user}/>}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/mug' element={<Mug singleMug={singleMug} setMug={setMug} cart={cart} setCart={setCart}/>}/>
            
          </Routes>

        </div>

      </BrowserRouter>
    )
}

export default App;
