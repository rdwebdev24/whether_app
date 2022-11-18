import './App.css';
import React, { useEffect } from 'react';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import bootstrap from './bootstrap.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Main/>
    </div>
  );
}

export default App;
