import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx'
import MainContent from './Components/MainContent/MainContent.jsx'
import {BrowserRouter} from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'

function App(props) {
  return (
    <BrowserRouter>
    <div className='App-wrapper'>
        <Header/>
        <MainContent store = {props.store}/>
      	<Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
