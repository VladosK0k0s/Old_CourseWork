import React from 'react';
import './TruckItem.css';


class TruckItem extends React.Component{
	render(){
		return(
			<div className='truckBlock'>
				{
					this.props.data.trucklink
					? <img src={this.props.data.trucklink} alt=""/>
					: ''
				}
				<div className='truckinfo'>
					<div>
						<h3>Carriage Capacity: {this.props.data.cariage} <i>kg</i></h3>
						<h4>Volume: Up To {this.props.data.volume} <i>m{`\u00B3`}</i></h4>
						<p>Price for 1km: {this.props.data.price1km} <i>UAH</i></p>
						<p>Minimum distance: {this.props.data.minDistance} <i>km</i></p>
					</div>
					<input type="submit" value="Call Us!"/>
				</div>
			</div>

		)
	}
}

export default TruckItem;