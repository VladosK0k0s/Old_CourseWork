import React from 'react'
import classes from './MainContent.module.css'
import {Route} from 'react-router-dom'
import Task1 from './Task1/Task1.jsx'
import Task2 from './Task2/Task2.jsx'
import StartPage from './StartPage/StartPage.jsx'
import TrucksPage from './TrucksPage/TrucksPage.jsx'
import ServicesPage from './ServicesPage/ServicesPage.jsx'
import DriversPage from './DriversPage/DriversPage.jsx'
import ClientsPage from './ClientsPage/ClientsPage.jsx'

const MainContent = (props) =>{
	return (
		<div className={classes.main}> 
			<Route exact path = '/'  render = {() => <StartPage data={props.store.getState().StartPage} />}/>
            <Route path = '/task1' render = {() => <Task1/>}/>
            <Route path = '/task2' render = {() => <Task2/>}/>
            <Route path = '/Trucks' render = {() => <TrucksPage data={props.store.getState().TrucksPage} />}/>
            <Route path = '/services' render = {() => <ServicesPage />}/>
            <Route path = '/Clients' render = {() => <ClientsPage />}/>
            <Route path = '/Drivers' render = {() => <DriversPage data={props.store.getState().DriversPage} />}/>

        </div>
	);
}

export default MainContent;