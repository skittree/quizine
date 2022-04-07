import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Category from './pages/Category';
import Main from './pages/Main';
import Rating from './pages/Rating';
import Game from './pages/Game';
import Search from './pages/Search';
import { CategoryContext } from '../context';

const AppRouter = () => {
    const {categoryId, setCategoryId} = useContext(CategoryContext);
    console.log(categoryId);
    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='about' element={<About/>} />
            <Route path='rating' element={<Rating/>} />
            <Route path='category' element={<Category/>} />
            <Route path='game' element={<Game/>} />
            <Route path='search' element={<Search/>} />
        </Routes>
    )
}

export default AppRouter