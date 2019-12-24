import React from 'react'
import  './MainContent.scss'
import {Route} from 'react-router-dom'
import StartPage from './StartPage/StartPage.jsx'
import TrucksPage from './TrucksPage/TrucksPage.jsx'
import ServicesPage from './ServicesPage/ServicesPage.jsx'
import DriversPage from './DriversPage/DriversPage.jsx'
import ClientsPage from './ClientsPage/ClientsPage.jsx'
import RoadsPage from './RoadsPage/RoadsPage.jsx'
import AdminPage from './AdminPage/AdminPage.jsx'


const MainContent = (props) =>{
	return (
		<div className='mainContent'>
            <Route exact path ='/Old_CourseWork/' render = {() => <StartPage user={props.user} data={props.store.getState().StartPage} />}/> 
            <Route exact path = '/'  render = {() => <StartPage user={props.user} data={props.store.getState().StartPage} />}/> 
            <Route path = '/content/Trucks' render = {() => <TrucksPage data={props.store.getState().TrucksPage} />}/>
            <Route path = '/content/services' render = {() => <ServicesPage />}/>
            <Route path = '/content/Kilometers' render = {() => <RoadsPage data={props.store.getState().RoadsPage}/>}/>
            <Route path = '/content/Clients' render = {() => <ClientsPage />}/>
            <Route path = '/content/Drivers' render = {() => <DriversPage data={props.store.getState().DriversPage} />}/>
            <Route 
                path = '/content/AdminPage' 
                render = {() => 
                    props.user.login==='admin'
                    ? <AdminPage/>
                    : <p>404</p>
                }
            />
        </div>
	);
}

export default MainContent;