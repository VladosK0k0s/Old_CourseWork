import React from 'react';
import './RoadsPage.scss';


class RoadsPage extends React.Component{
	constructor(props) {
		super(props);
		this.kilometers = props.data.kilometers;
	}
	render(){
		return(
			<div className='RoadsPage' >
				<h1>We defeat {this.kilometers} kilometers!</h1>
			</div>
		)
	}
}

export default RoadsPage;
