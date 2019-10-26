import React from 'react';
import './MainForm.css'


const MainForm = (props) =>{
	return (
		<div className='mainform'>
			<h2>
				Make Your Order
			</h2>
			<form>
				<div>
					<label htmlFor="depatureSelect" >Departure Counrty</label>
					<br/>
					<select name="depatureSelect" className="selector1">
						<option key={0} defaultValue="Choose country" hidden >Choose country</option>
						{
							props.mainFormData.departureCountries.map(el=>{
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
					<select name="weightSelect" >
						<option key={0} defaultValue="Choose weight" hidden >Choose weight</option>
						{
							props.mainFormData.weightarray.map(el=>{
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
					<select name="sizeSelect">
						<option key={0} defaultValue="Choose size" hidden >Choose size</option>
						{
							props.mainFormData.sizearray.map(el=>{
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
					<label htmlFor="timeSelect" >Total Size</label>
					<br/>
					<select name="timeSelect">
						<option key={0} defaultValue="Choose time" hidden >Choose delivery time</option>
						{
							props.mainFormData.deliveryTime.map(el=>{
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
		</div>
	)
}




export default MainForm;
