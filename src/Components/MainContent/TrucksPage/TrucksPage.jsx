import React from 'react';
import './TrucksPage.scss';
import TruckItem from './TruckItem/TruckItem.jsx'
import truck1 from './truck1.png'
import truck2 from './truck2.png'
import truck3 from './truck3.png'
import truck4 from './truck4.png'

let links = [truck1,truck2,truck3,truck4];

class TrucksPage extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	trucks: [] // id, cariage, mileage, minDistance, price1km, reg_date, reg_number, volume
	  };
	}
	componentDidMount(){
		this.getTrucks();
	}
	status = (response) => {  
		if (response.status >= 200 && response.status < 300) {  
			return Promise.resolve(response)  
		} else {  
			return Promise.reject(new Error(response.statusText))  
		}  
	}
	json = (response) => {  
		return response.json()  
	}
	getTrucks = () => {
		console.log('gettt');
		fetch('http://localhost:4000/Trucks')
			.then(this.status)  
			.then(this.json)  
			.then(data => {
				this.setState({trucks: data.data})  
				console.log('Request succeeded with JSON response');  
			}).catch(function(error) {  
				console.log('Request failed', error);  
			});
	}
	render(){
		console.log(this.state.trucks);
		console.log(Object.prototype.toString.call(this.state.trucks));
		return(
			<div className='TrucksPage'>
				<h1>Our Trucks</h1>
				{
					(Object.prototype.toString.call(this.state.trucks) !== "[object Array]"	) ? '' : this.state.trucks.map(el=>{
						return(
							<div key={el.id}>
								<TruckItem imglink={links[el.id-1]} data={el} />
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default TrucksPage;