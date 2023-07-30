import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './BookLibrary.css'
import ProtectedRoute from '../util/ProtectedRoute';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Home from './main/Home';
import Header from './layout/Header';
import Footer from './layout/Footer';

const BookLibrary =()=> {
    return (
        <BrowserRouter>
            <div className='app-body'>
                {/* routes */}
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/Signup' element={<Signup />} />
                    <Route path='/' element={<ProtectedRoute><Header /><Home /><Footer/></ProtectedRoute>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default BookLibrary