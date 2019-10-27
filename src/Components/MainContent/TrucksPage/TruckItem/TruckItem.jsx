import React from 'react';
import './TruckItem.css';


const TruckItem = (props) =>{
	return(
		<div className='truckBlock'>
			<img src={props.imglink} alt={`truck${props.data.id}`}/>
			<div className='truckinfo'>
				<div>
					<h3>Carriage Capacity: {props.data.carcap} <i>kg</i></h3>
					<h4>Volume: Up To {props.data.maxvolume} <i>m{`\u00B3`}</i></h4>
					<p>Price for 1km: {props.data.price} <i>UAH</i></p>
					<p>Minimum distance: {props.data.minkm} <i>km</i></p>
				</div>
				<input type="submit" value="Call Us!"/>
			</div>
		</div>

	)
}

export default TruckItem;