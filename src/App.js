import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.jsx'
import MainContent from './Components/MainContent/MainContent.jsx'
import {Route, HashRouter, BrowserRouter} from 'react-router-dom'

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
