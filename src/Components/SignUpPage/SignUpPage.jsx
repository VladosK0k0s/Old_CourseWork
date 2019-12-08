import React from 'react'
import './SignUpPage.scss'
import InputMask from 'react-input-mask';
import {NavLink} from 'react-router-dom'

class SignUpPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			tel: ''
		}
	}
	setter = (value, variable) =>{
		this.setState({[variable]: value});
	}
	handleSubmit = (event) =>{
		console.log(this.state);
		fetch('http://localhost:4000/signUp')
			.then(res => res.json())
			.then(res =>this.setState({drivers: res.data}))
			.catch(err=>console.log(err))
		event.preventDefault();
	}
	render(){
		return(
				<div className='SignUpPage' >
					<NavLink to = '/'>
						<img src={this.props.store.getState().HeaderPage.link} alt="logo"/>
					</NavLink>	
					<p>Sign Up to SS Logistics</p>
					<form onSubmit={(event)=>this.handleSubmit(event)}>
						<input 
							placeholder='Username' 
							type="text" 
							id="name" 
							value={this.state.name}
							onChange={(event)=>this.setter(event.target.value, 'name')}/>
						<input 
							placeholder='Email' 
							type="email" 
							id="email"
							value={this.state.email} 
							onChange={(event)=>this.setter(event.target.value, 'email')}/>
						<input 
							placeholder='Password'
							required 
							type="password" 
							id="password" 
							value={this.state.password} 
							onChange={(event)=>this.setter(event.target.value, 'password')}/>
						<InputMask 
							mask="+38099-999-99-99"
							maskChar = '_'	
							required					
							placeholder='Telephone'
							title='Заповніть це поле' 
							type="text" 
							value={this.state.tel} 
							onChange={(event)=>this.setter(event.target.value, 'tel')}/>
						<input type="submit" value='Submit!'/>
					</form>
				</div>
		)
	}
}

export default SignUpPage;