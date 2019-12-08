import React from 'react'
import  './MainContent.scss'
import {Route} from 'react-router-dom'
import Task1 from './Task1/Task1.jsx'
import Task2 from './Task2/Task2.jsx'
import Task3 from './Task3/Task3.jsx'
import StartPage from './StartPage/StartPage.jsx'
import TrucksPage from './TrucksPage/TrucksPage.jsx'
import ServicesPage from './ServicesPage/ServicesPage.jsx'
import DriversPage from './DriversPage/DriversPage.jsx'
import ClientsPage from './ClientsPage/ClientsPage.jsx'
import RoadsPage from './RoadsPage/RoadsPage.jsx'


const MainContent = (props) =>{
	return (
		<div className='mainContent'>
            <Route exact path ='/Old_CourseWork/' render = {() => <StartPage data={props.store.getState().StartPage} />}/> 
            <Route exact path = '/'  render = {() => <StartPage data={props.store.getState().StartPage} />}/> 
            <Route path = '/content/task1' render = {() => <Task1/>}/>
            <Route path = '/content/task2' render = {() => <Task2/>}/>
            <Route path = '/content/Trucks' render = {() => <TrucksPage data={props.store.getState().TrucksPage} />}/>
            <Route path = '/content/services' render = {() => <ServicesPage />}/>
            <Route path = '/content/Kilometers' render = {() => <RoadsPage data={props.store.getState().RoadsPage}/>}/>
            <Route path = '/content/Clients' render = {() => <ClientsPage />}/>
            <Route path = '/content/Drivers' render = {() => <DriversPage data={props.store.getState().DriversPage} />}/>
        </div>
	);
}

export default MainContent;