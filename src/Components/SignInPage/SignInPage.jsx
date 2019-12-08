import React from 'react'
import './SignInPage.scss'
import {NavLink} from 'react-router-dom'


class SignInPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}
	setter = (value, variable) =>{
		this.setState({[variable]: value});
	}
	handleSubmit = (event) =>{
		console.log(this.state);
		event.preventDefault();
	}
	render(){
		return(
				<div className='SignInPage' >
					<NavLink to = '/'>
						<img src={this.props.store.getState().HeaderPage.link} alt="logo"/>
					</NavLink>	
					<p>Sign In to SS Logistics</p>
					<form onSubmit={(event)=>this.handleSubmit(event)}>
						<input placeholder='Username' type="text" id="name" onChange={(event)=>this.setter(event.target.value, 'name')}/>
						<input placeholder='Email' type="email" id="email" onChange={(event)=>this.setter(event.target.value, 'email')}/>
						<input placeholder='Password' type="password" id="password" onChange={(event)=>this.setter(event.target.value, 'password')}/>
						<img src="./topform.png" alt=""/>
						<input type="submit" value='Submit!'/>
					</form>
				</div>
		)
	}
}

export default SignInPage;