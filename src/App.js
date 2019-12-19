import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx'
import MainContent from './Components/MainContent/MainContent.jsx'
import Footer from './Components/Footer/Footer.jsx'
import SignInPage from './Components/SignInPage/SignInPage.jsx'
import SignUpPage from './Components/SignUpPage/SignUpPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import { DecodeJWT } from './services.js';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			user: {},
			jwt: props.store.getState().SignUpPage.jwt
		}
	}
	componentDidMount = () => {
		this.setUsername(this.props.store.getState().SignUpPage.jwt);
	}
	setUsername = (token) => {
		if(token)
			DecodeJWT(token, data => 
				this.setState({ user: data.data })
			);
		else this.setState({ user: {} })
	}
	render(){
	  return (
	    <BrowserRouter>
		    <div className='App-wrapper'>
		    	<Route path = '/signIn' render = {() => <SignInPage setuser = {this.setUsername} store = {this.props.store}/>}/>
				<Route path = '/signUp' render = {() => <SignUpPage setuser = {this.setUsername} store = {this.props.store}/>}/>
		    	<Route exact path = '/' render = {() => (
		    						<div>
			    						<Header setuser = {this.setUsername} user={this.state.user} store = {this.props.store}/>
								        <MainContent user={this.state.user} store = {this.props.store}/>
								      	<Footer/>
							      	</div>)}/>
		    	<Route exact path = '/Old_CourseWork/' render = {() => (
		    						<div>
			    						<Header setuser = {this.setUsername} user={this.state.user} store = {this.props.store}/>
								        <MainContent user={this.state.user} store = {this.props.store}/>
								      	<Footer/>
							      	</div>)}/>
		    	<Route path = '/content' render = {() => (
		    						<div>
										<Header setuser = {this.setUsername} user={this.state.user} store = {this.props.store}/>
										<MainContent user={this.state.user} store = {this.props.store}/>
										<Footer/>
									</div>)}/>
							        
		    </div>
	    </BrowserRouter>
	  );
  	}
}

export default App;
