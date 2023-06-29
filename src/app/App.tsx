import React from 'react';
import icon from '../icon.svg';
import '../App.css';
import { Outlet } from 'react-router-dom';
import Header from "../components/header";
import Header2 from "../components/header2";



function App() {
  return (
      <div className="App">
          <Header />
        <header className="App-header">
          <img src={icon} className="App-logo" alt="logo" />
        </header>

          <div className="App">
              <h1>Bienvenue sur la page Crypto</h1>
              <Outlet />

              <Header2 />
          </div>
      </div>

  );
}

export default App;

