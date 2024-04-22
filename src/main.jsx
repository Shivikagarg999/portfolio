import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project';

const router= createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element= {<App/>}>
            <Route path='/' element= {<Home/>}/>
            <Route path='about' element= {<About/>}/>
            <Route path='project' element= {<Project/>}/>
            <Route path='contact' element= {<Contact/>}/>
        </Route>
    )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);