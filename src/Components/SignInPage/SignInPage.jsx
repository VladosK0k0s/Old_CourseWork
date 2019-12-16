import React from 'react';
import './SignInPage.scss';
import {NavLink} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { withRouter } from 'react-router-dom';
import { CheckInput } from '../../services.js';
import { GenerateJWT } from '../../services.js';
import {SetJWTActionCreator} from '../../redux/SignUpPage_reducer';


class SignInPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			emaillogin: '',
			password: ''
		}
		this.checkUser();
	}
	checkUser = () =>{
		if(this.props.store.getState().SignUpPage.jwt){
			this.props.history.push("/");
		}
	}
	setter = (value, variable) =>{
		this.setState({[variable]: value});
	}
	handleSubmit = (event) =>{
		this.setState({
			Error401: '',
			Error403: '',
			Error: '',
			Message: ''
		})
		event.preventDefault();
		const claims = { emaillogin: this.state.emaillogin, password: this.state.password };
		if (claims.emaillogin.trim().length < 3 || claims.password.trim().length < 3) {
			// If either of Username or Password is empty, set an error state.
			this.setState({ Error: "You have to enter both username and password." });
			// Stop proceeding.
			return false;
		}
		else this.setState({ Error: '' });
		const header = {
			alg: "HS512",
			typ: "JWT"
		};
		CheckInput({ emaillogin: this.state.emaillogin, password: this.state.password}, res => {
			if(res.status === 401){
				this.setState({ Error401: res.data.Error });
			}
			if(res.status === 403){
				this.setState({ Error403: res.data.Error });
			}
			if(res.status === 200){
				GenerateJWT(header, res.data, null, res => {
					this.setState({}, () => {
						if (typeof Storage !== "undefined") {
							localStorage.setItem("JWT", res.data);
							this.props.store.dispatch(SetJWTActionCreator(res.data));
							this.setState({ Message: 'Success!' })
						}
					});
				});
			}
		});
	}
	render(){
		return(
				<div className='SignInPage' >
					<NavLink to = '/'>
						<img src={this.props.store.getState().HeaderPage.link} alt="logo"/>
					</NavLink>	
					<p>Sign In to SS Logistics</p>
					{!this.state.Message&&
						<form onSubmit={(event)=>this.handleSubmit(event)}>
							<input placeholder='Email or Login' type="text" id="emaillogin" onChange={(event)=>this.setter(event.target.value, 'emaillogin')}/>
							<input placeholder='Password' type="password" id="password" onChange={(event)=>this.setter(event.target.value, 'password')}/>
							<input type="submit" value='Submit!'/>
						</form>
					}
					{this.state.Error &&
						<Alert style={{margin: '20px'}} variant='danger'>
							{this.state.Error}
						</Alert>
					}
					{this.state.Error401 &&
						<Alert style={{margin: '20px'}} variant='danger'>
							{this.state.Error401}
							<p>May be You want to <NavLink to = '/'>Sing in</NavLink></p>
						</Alert>
					}
					{this.state.Error403 &&
						<Alert style={{margin: '20px'}} variant='danger'>
							{this.state.Error403}
						</Alert>
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

export default withRouter(SignInPage);