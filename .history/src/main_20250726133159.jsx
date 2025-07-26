import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import HomeScreen from "./components/HomeScreen.jsx";
import PoemScreen from "./components/PoemScreen.jsx";
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: 'poem/:id', element: <PoemScreen /> }
    ]
  },
  {
    path: "*",
    element: <A
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider/>
  </StrictMode>,
)
