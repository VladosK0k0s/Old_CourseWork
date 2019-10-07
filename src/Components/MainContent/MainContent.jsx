import React from 'react'
import classes from './MainContent.module.css'
import {Route, HashRouter, BrowserRouter} from 'react-router-dom'
import Task1 from './Task1/Task1.jsx'
import Task2 from './Task2/Task2.jsx'
import StartPage from './StartPage/StartPage.jsx'

const MainContent = () =>{
	return (
		<div className={classes.main}> 
			<Route exact path = '/'  render = {() => <StartPage/>}/>
            <Route path = '/task1' render = {() => <Task1/>}/>
            <Route path = '/task2' render = {() => <Task2/>}/>
        </div>
	);
}

export default MainContent;