import React from 'react';
import './Task2.css';
import naruto from './naruto.jpg';


class Task2 extends React.Component {
	state = {
		hover: true,
		width: 500,
		height: 500,
		style: {}
	}
	styleSet = () =>{
		let newObj
		this.setState({
			style : {
				width: this.state.width,
				height: this.state.height
			}	
		})
	}
	handleClick = (event) =>{
		let input = event.target;
		console.log(input.name);
		if(input.name === 'height') if(input.value<1000) this.setState({ height: input.value })
		if(input.name === 'width') if(input.value<900) this.setState({ width: input.value })
		this.styleSet();
		console.log(this.state.style);
	}
	render(){
		return (
			<div>
				<div>
					<img style={this.state.style} src={naruto} alt=""/>
					<h2>Зміна Розмірів</h2>
					<label>
						Висота 
						<input name={'height'} value={this.state.height} type="text" onChange={this.handleClick}/>
					</label>
					<br/>
					<label>
						Ширина 
						<input name={'width'} value={this.state.width} type="text" onChange={this.handleClick}/>
					</label>
					<h2>Зміна Рамки</h2>
					<label>
						<input value={this.state.height} type="text" onChange={this.handleClick}/>
					</label>
				</div>
			</div>
		);
	}
	
}

export default Task2;
