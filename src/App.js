import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx'
import MainContent from './Components/MainContent/MainContent.jsx'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className='App-wrapper'>
      
        <Header/>
        <MainContent/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
