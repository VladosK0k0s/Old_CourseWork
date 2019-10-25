import React from 'react';
import './StartPage.css'
import ListItems from './ListItems/ListItems.jsx'


class StartPage extends React.Component{
	render(){
		return(
			<div>
				<header>
					<h1>GUARANTEES OF OUR SUCCESS</h1>
				</header>
				<ListItems listData = {this.props.store.getState().StartPage.listData}/>
			</div>
		);
	}
}

export default StartPage;