import React from 'react';
import './StartPage.scss'
import ListItems from './ListItems/ListItems.jsx'
import MainForm from './MainForm/MainForm.jsx'
import Axios from "axios";


class StartPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			user: ''
		}
	}
	render(){
		return(
			<div className='StartPage'>
				<header>
					<h1>GUARANTEES OF OUR SUCCESS</h1>
				</header>
				<ListItems listData = {this.props.data.listData}/>
				<MainForm user={this.props.user} mainFormData = {this.props.data.mainFormData}/>
				<h2 style ={{color:`#0be3b1`}}>Why do we do this?</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				
			</div>
		);
	}
}

export default StartPage;