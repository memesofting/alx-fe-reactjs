import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import RecipeDetails from './components/RecipeDetails.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipedetails" element={<RecipeDetails />} />
      </Routes>
  </BrowserRouter>,
)
