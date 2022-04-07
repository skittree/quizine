import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { CategoryContext } from "./context";

function App() {
  const [categoryId, setCategoryId] = useState(0);

  return (
    <CategoryContext.Provider value={{
      categoryId,
      setCategoryId
    }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </CategoryContext.Provider>
  );
}

export default App;
