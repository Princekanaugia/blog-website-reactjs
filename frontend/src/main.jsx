import React from 'react'
import ReactDOM from 'react-dom/client'

//react-router-dom
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"

//CSS
import './index.css'

//components
import App from './App.jsx'

//pages
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Aboutus from './pages/Aboutus.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Privacypolicy from './pages/Privacypolicy.jsx'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/aboutus' element={<Aboutus />} />
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/privacypolicy' element={<Privacypolicy/>} />
    </Route>

  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
