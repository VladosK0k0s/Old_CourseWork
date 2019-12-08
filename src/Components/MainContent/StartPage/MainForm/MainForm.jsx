import React from 'react';
import './MainForm.scss'
import {  CSSTransition,  TransitionGroup} from 'react-transition-group';


class MainForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			country: '',
			weight: '',
			size: '',
			time: '',
			buttonVisible: false
		};
	}
	setter = (value, variable) =>{
		this.setState({[variable]: value}, ()=>{
			const {country, weight, size, time} = this.state;
			if(country&&weight&&size&&time)	this.setState({buttonVisible: true});
		});
	}
	handleAccept = () =>{
		
	}
	render(){
		return (
			<div className='MainForm'>
				<h2>
					Make Your Order
				</h2>
				<form>
					<div>
						<label htmlFor="depatureSelect" >Departure Counrty</label>
						<br/>
						<select 
							name="depatureSelect" 
							value={this.state.country} 
							onChange={(event)=>this.setter(event.target.value, 'country')}>
							<option key={0} defaultValue="Choose country" hidden >Choose country</option>
							{
								this.props.mainFormData.departureCountries.map(el=>{
									return(
										<option key={el.id} 
												value={el.country}>
												{el.country}
										</option>
									)
								})
							}
						</select>
					</div>
					<div>
						<label htmlFor="weightSelect" >Total Weight</label>
						<br/>
						<select 
							name="weightSelect" 
							value={this.state.weight}
							onChange={(event)=>this.setter(event.target.value, 'weight')}>
							<option key={0} defaultValue="Choose weight" hidden >Choose weight</option>
							{
								this.props.mainFormData.weightarray.map(el=>{
									return(
										<option key={el.id} 
												value={el.tons}>
												Up to {el.tons} Tons
										</option>
									)
								})
							}
						</select>
					</div>
					<div>
						<label htmlFor="sizeSelect" >Total Size</label>
						<br/>
						<select 
							name="sizeSelect" 
							value={this.state.size} 
							onChange={(event)=>this.setter(event.target.value, 'size')}>
							<option key={0} defaultValue="Choose size" hidden >Choose size</option>
							{
								this.props.mainFormData.sizearray.map(el=>{
									return(
										<option key={el.id} 
												value={el.cubedMeters}>
												Up to {el.cubedMeters} m{`\u00B3`}
										</option>
									)
								})
							}
						</select>
					</div>
					<div>
						<label htmlFor="timeSelect" >Delivery Time</label>
						<br/>
						<select 
							name="timeSelect" 
							value={this.state.time}
							onChange={(event)=>this.setter(event.target.value, 'time')}>
							<option key={0} defaultValue="Choose time" hidden >Choose delivery time</option>
							{
								this.props.mainFormData.deliveryTime.map(el=>{
									return(
										<option key={el.id} 
												value={el.days}>
												in {el.days} days
										</option>
									)
								})
							}
						</select>
					</div>
				</form>
				{
					this.state.buttonVisible
					? <TransitionGroup className='buttonWrapper'>
                		<CSSTransition 
							appear={true}
							timeout={600}
							classNames='fade'
						>
						<button onClick={this.handleAccept}>Accept</button>
                		</CSSTransition>				           	
	                </TransitionGroup>
					: ''	
				}
			</div>
		)
	}
}




export default MainForm;
