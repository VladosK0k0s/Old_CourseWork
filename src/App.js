import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx'
import MainContent from './Components/MainContent/MainContent.jsx'
import {BrowserRouter} from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import {Route} from 'react-router-dom'
import SignInPage from './Components/SignInPage/SignInPage.jsx'
import SignUpPage from './Components/SignUpPage/SignUpPage.jsx'

class App extends React.Component {
	render(){
	  return (
	    <BrowserRouter>
		    <div className='App-wrapper'>
		    	<Route path = '/signIn' render = {() => <SignInPage store = {this.props.store}/>}/>
					<Route path = '/signUp' render = {() => <SignUpPage store = {this.props.store}/>}/>
		    	<Route exact path = '/' render = {() => (
		    						<div>
			    						<Header store = {this.props.store}/>
								        <MainContent store = {this.props.store}/>
								      	<Footer/>
							      	</div>)}/>
		    	<Route exact path = '/Old_CourseWork/' render = {() => (
		    						<div>
			    						<Header store = {this.props.store}/>
								        <MainContent store = {this.props.store}/>
								      	<Footer/>
							      	</div>)}/>
		    	<Route path = '/content' render = {() => (
		    						<div>
			    						<Header store = {this.props.store}/>
								        <MainContent store = {this.props.store}/>
								      	<Footer/>
							      	</div>)}/>
							        
		    </div>
	    </BrowserRouter>
	  );
  	}
}

export default App;
