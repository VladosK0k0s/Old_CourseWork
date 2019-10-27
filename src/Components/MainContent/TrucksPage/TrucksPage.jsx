import React from 'react';
import './TrucksPage.css';
import TruckItem from './TruckItem/TruckItem.jsx'
import truck1 from './truck1.png'
import truck2 from './truck2.png'
import truck3 from './truck3.png'
import truck4 from './truck4.png'

let links = [truck1,truck2,truck3,truck4];

class TrucksPage extends React.Component{
	render(){
		return(
			<div className='trucksMain'>
				<h1>Our Trucks</h1>
				{
					this.props.data.TrucksData.map(el=>{
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