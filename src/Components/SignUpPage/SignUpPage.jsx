import React from 'react'
import './SignUpPage.scss'
import InputMask from 'react-input-mask';
import {NavLink} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

class SignUpPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			login: '',
			email: '',
			first_name: '',
			last_name: '',
			password: '',
			tel: '',
			errors: []
		}
	}
	setter = (value, variable) =>{
		this.setState({[variable]: value});
	}
	handleSubmit = (event) =>{
		const response = fetch('http://localhost:4000/signUp', {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, cors, *same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				//'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer', // no-referrer, *client
			body: JSON.stringify(this.state),});
		response.then(res => {
					if(res.status==422) 
						res.json()
						.then(res => {this.setState({errors: res.errors})});
					if(res.status==421)
						res.json()
						.then(res => {this.setState({errors: [{msg: res.text}]})});
				})
				.catch((res) => console.log('rerror'));
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
						placeholder='Login' 
						type="text" 
						id="login" 
						value={this.state.login}
						onChange={(event)=>this.setter(event.target.value, 'login')}/>
					<input 
						placeholder='First Name' 
						type="text" 
						id="first_name" 
						value={this.state.first_name}
						onChange={(event)=>this.setter(event.target.value, 'first_name')}/>
					<input 
						placeholder='Last Name' 
						type="text" 
						id="last_name" 
						value={this.state.last_name}
						onChange={(event)=>this.setter(event.target.value, 'last_name')}/>
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
				{
					(this.state.errors===[]) ? '' : this.state.errors.map((el,i) => 
						<Alert key={i} variant='danger'>{el.msg}</Alert>
					)
				}
			</div>
		)
	}
}

export default SignUpPage;