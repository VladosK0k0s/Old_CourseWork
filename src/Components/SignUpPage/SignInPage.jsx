import React from 'react'
import './SignInPage.css'
import {NavLink} from 'react-router-dom'

class SignInPage extends React.Component{
	render(){
		return(
			<div className='signin'>
				<NavLink to = '/'>
					<img src={process.env.PUBLIC_URL + '/logo_icon.jpg'} alt="logo"/>
				</NavLink>	
				<p>Sign In to SS Logistics</p>
				<div className='form'>
					<input placeholder='Username' type="text" id="name"/>
					<input placeholder='Email' type="email" id="email"/>
					<input placeholder='Password' type="password" id="password"/>
					<input type="submit" value='Submit!'/>
				</div>
			</div>
		)
	}
}

export default SignInPage;