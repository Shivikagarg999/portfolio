import React from 'react';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
    return (
    <div className='flex flex-col min-h-screen'>
    <Header />
    <div className='flex-grow bg-gray-800 w-[100vw]'>
    <Outlet/>
    </div>
    <Footer />
    </div>
    )
}

export default App