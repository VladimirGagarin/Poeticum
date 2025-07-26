import "./App.css";
import { Outlet } from "react-router-dom";
import LogoImage from "./assets/logo.jpg";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src={LogoImage} alt="Poeticum Logo" className="logo" />
        <h1 className="title">Poeticum</h1>
        <p className="subtitle">Where every verse finds its voice 🌿</p>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
