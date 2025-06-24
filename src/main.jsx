import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './pages/LoginPage.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import DashBoardPage from './pages/DashboardPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/dashboard' element={<DashBoardPage/>} />
        <Route path='/' element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
