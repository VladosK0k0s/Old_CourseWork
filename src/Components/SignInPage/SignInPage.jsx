import React from 'react'
import './SignInPage.css'
import {NavLink} from 'react-router-dom'


class SignInPage extends React.Component{
	render(){
		return(
			<div style={{position: 'fixed', width: '100%'}} >
			<div className='signin' >
				<NavLink to = '/'>
					<img src={this.props.store.getState().HeaderPage.link} alt="logo"/>
				</NavLink>	
				<p>Sign In to SS Logistics</p>
				<div className='form'>
					<input placeholder='Username' type="text" id="name"/>
					<input placeholder='Email' type="email" id="email"/>
					<input placeholder='Password' type="password" id="password"/>
					<img src="./topform.png" alt=""/>
					<input type="submit" value='Submit!'/>
				</div>
			</div>
			</div>
		)
	}
}

export default SignInPage;