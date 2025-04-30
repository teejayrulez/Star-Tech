import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/sections/Dashboard.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='dashboard' element={<Dashboard /> } />
    </Routes>
  </BrowserRouter>
)
