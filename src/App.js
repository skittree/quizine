import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Search from "./components/pages/Search";
import Category from "./components/pages/Category";
import Game from "./components/pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/category" element={<Category id={1542} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
