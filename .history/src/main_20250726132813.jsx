import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import HomeScreen from "./components/HomeScreen.jsx";
import PoemScreen from "./components/PoemScreen.jsx";
import { HashRouter, RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
