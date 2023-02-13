import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar"
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
          <Navbar />
          <Routes>

            <Route path='/' element={<Home mugs={candies} cart={cart}/>}/>
            
          </Routes>

        </div>

      </BrowserRouter>
    )
}

export default App;
