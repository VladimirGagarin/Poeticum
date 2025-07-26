import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
    <div className='container'>
      <h1>hello there</h1>
     <Outlet/>
    </div>
  )
}

export default App
