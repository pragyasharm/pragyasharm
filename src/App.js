import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and necessary components
import React from 'react';
import Body from './Components/Body';
import Header from './Components/Header';
import ProductListpage from './Components/Products/ProductListpage';
import Scroller from './Components/Products/Scroller';
import MainProductContainer from './Components/Products/MainProductContainer';
import MoveSwapComponent from './Components/MoveNswap/MoveSwapComponent';
import Calculator from './Components/Calculator/Calculator';
import Accordian from './Components/Accordian/Accordian';
import PrivateRoutes from './Components/PrivateRoutes';
import SearchPage from './Components/SearchBar/SearchPage'; 
import Context from './Components/UseContextExample/Context';
import AutoCompleteComponent from './Components/AutoComplete/AutoCompleteComponent';
import Modalpage from './Components/Modal/Modalpage';
import CarouselBody from './Components/Carousel/CarouselBody';
import Game from './TicTacToe/Game';

function App() {
  return (
    <Router> {/* Wrap your routes with BrowserRouter */}
      <div>
        <Header />
        <Routes> {/* Use Routes to define your routes */}
          <Route path="/" element={<Body />} />
          <Route index element={<ProductListpage />} />
          <Route path="/scroller" element={<Scroller />} />
          <Route path="/product-card" element={<MainProductContainer />} />
          <Route path="/move-swap" element={<MoveSwapComponent />} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path='/context' element={<Context/>}/>
          <Route path='/autocomplete' element={<AutoCompleteComponent/>}/>
          <Route path='/modal' element={<Modalpage/>}/>
          <Route path='/carousel' element={<CarouselBody/>}/>
          <Route path='/game' element={<Game/>}/>
          <Route element={<PrivateRoutes />}>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/accordian" element={<Accordian />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;