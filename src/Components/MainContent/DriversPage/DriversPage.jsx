import React from 'react';
import './DriversPage.scss';
import d1 from './driver1.jpg';
import d2 from './driver2.jpg';
import d3 from './driver3.jpg';



let links = [d1,d2,d3];

class DriversPage extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	drivers: [] // id, tel, card_number, first_name, last_name, age, reg_date
	  };
	}
	componentDidMount(){
		this.getDrivers();
	}
	getDrivers(){
		const loc = `${document.location.protocol}//${document.location.hostname}`;
		fetch(`${loc}:4000/Drivers`)
			.then(res => res.json())
			.then(res =>this.setState({drivers: res.data}))
			.catch(err=>console.log(err))
	}
	render(){
		return(
			<div className='DriversPage'>
				<h1>Our Drivers</h1>
				{
					(Object.prototype.toString.call(this.state.drivers) !== "[object Array]"	) ? '' : this.state.drivers.map(el=>{
						return(
							<div className='driverItem' key={el.id}>
								{
									links[el.id-1]===undefined
									?<img src="http://placekitten.com/g/200/300" alt=''whoops/>
									:<img src={links[el.id-1]} alt={`Driver${el.id}`}/>
								}
								<div>
									<h3>{el.first_name}</h3>
									<h3>{el.last_name}</h3>
									<p>Age: {el.age}</p>
								</div>
							</div>
						)
					})	
				}
			</div>
		)
	}
}


export default DriversPage;