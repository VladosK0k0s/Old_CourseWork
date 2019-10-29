import React from 'react';
import './DriversPage.css';
import d1 from './driver1.jpg'


class DriversPage extends React.Component{
	render(){
		return(
			<div className='driversMain'>
				<h1>Our Drivers</h1>
				{
					this.props.data.DriversData.map(el=>{
						return(
							<div className='driverItem' key={el.id}>
								<img src={d1} alt=""/>
								<div>
									<h3>{el.firstname}</h3>
									<h3>{el.lastname}</h3>
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