import React from 'react'
import './SignUpPage.scss'
import InputMask from 'react-input-mask';
import {NavLink} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { GenerateJWT, GenUser } from '../../services.js';
import {SetJWTActionCreator} from '../../redux/SignUpPage_reducer';

class SignUpPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			user: {
				login: '',
				email: '',
				password: '',
				first_name: '',
				tel: '',
			}
		}
	}
	setter = (value, variable) =>{
		const newuser = {...this.state.user}
		newuser[variable] = value
		this.setState({user: newuser});
	}
	handleSubmit = (event) =>{
		this.setState({
			Response: '',
			Error: '',
			Message: ''
		})
		event.preventDefault();
		const claims = this.state.user;
		if (claims.login.trim().length < 3 || claims.password.trim().length < 3) {
			// If either of Username or Password is empty, set an error state.
			this.setState({ Error: "You have to enter both username and password." });
			// Stop proceeding.
			return false;
		}
		else this.setState({ Error: "" });
		const header = {
			alg: "HS512",
			typ: "JWT"
		};
		GenUser(this.state.user, (res, err) => {
			if (res.status === 422) {
				this.setState({ Error: res.data.Error });
			}
			if (res.status === 200) {
				GenerateJWT(header, claims, null, res => {
					this.setState({ Response: res.data }, () => {
						if (typeof Storage !== "undefined") {
							localStorage.setItem("JWT", res.data);
							this.props.store.dispatch(SetJWTActionCreator(res.data));
						}
					});
				});
				this.setState({ Message: res.data.Message });
			}
		});
	}
	render(){
		return(
			<div className='SignUpPage' >
				<NavLink to = '/'>
					<img src={this.props.store.getState().HeaderPage.link} alt="logo"/>
				</NavLink>	
				<p>Sign Up to SS Logistics</p>
				{!this.state.Message&&
					<form onSubmit={(event)=>this.handleSubmit(event)}>
						<input 
							placeholder='Login' 
							type="text" 
							id="login" 
							value={this.state.user.login}
							onChange={(event)=>this.setter(event.target.value, 'login')}/>
						<input 
							placeholder='First Name' 
							type="text" 
							id="first_name" 
							value={this.state.user.first_name}
							onChange={(event)=>this.setter(event.target.value, 'first_name')}/>
						<input 
							placeholder='Email' 
							type="email" 
							id="email"
							value={this.state.user.email} 
							onChange={(event)=>this.setter(event.target.value, 'email')}/>
						<input 
							placeholder='Password'
							required 
							type="password" 
							id="password" 
							value={this.state.user.password} 
							onChange={(event)=>this.setter(event.target.value, 'password')}/>
						<InputMask 
							mask="+38099-999-99-99"
							maskChar = '_'	
							required					
							placeholder='Telephone'
							title='Заповніть це поле' 
							type="text" 
							value={this.state.user.tel} 
							onChange={(event)=>this.setter(event.target.value, 'tel')}/>
						<input type="submit" value='Submit!'/>
					</form>
				}
				{this.state.Error &&
					<Alert style={{margin: '20px'}} variant='danger'>{this.state.Error}</Alert>
				}
				{this.state.Message &&
					<>
						<Alert style={{marginTop: '10%'}} variant='success'>{this.state.Message}</Alert>
						<NavLink to = '/'>
							<p>Go To HomePage</p>
						</NavLink>
					</>
				}
			</div>
		)
	}
}

export default SignUpPage;