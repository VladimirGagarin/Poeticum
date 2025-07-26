import './App.css';
import { Outlet } from 'react-router-dom';
import LogoImage from "./assets/"

function App() {
  

  return (
    <div className='container'>
      <h1>Hello Poets</h1>
     <Outlet/>
    </div>
  )
}

export default App
