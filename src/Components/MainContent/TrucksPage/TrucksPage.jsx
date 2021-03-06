import React from 'react';
import './TrucksPage.scss';
import TruckItem from './TruckItem/TruckItem.jsx';
import axios from 'axios';


class TrucksPage extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	trucks: [] // id, cariage, mileage, minDistance, price1km, reg_date, reg_number, volume, photoname
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
	getTrucksImgLinks = () =>{
		this.state.trucks.forEach(element => {
			this.getTruckImageLink(element.id)
		});
	}
	getTruckImageLink = (id) =>{
		const index = this.state.trucks.findIndex((el)=>el.id===id);
		const config = {
			responseType: "blob"			
		};
		axios.post("/api/photos/get", {name: this.state.trucks[index].photoname}, config)
			.then(res => {
				const file = new Blob([res.data], {type: "image/png"});
				const fileURL = URL.createObjectURL(file);
				const newArr = this.state.trucks;
				newArr[index].trucklink = fileURL;
				this.setState({
					trucks: newArr
				})
			})
			.catch();
	}
	json = (response) => {  
		return response.json()  
	}
	getTrucks = () => {
		const loc = `${document.location.protocol}//${document.location.hostname}`;
		fetch(`${loc}:4000/Trucks`)
			.then(res => res.json())
			.then(res =>this.setState({trucks: res.data}))
			.then(() => this.getTrucksImgLinks())
			.catch(err=>console.log(err));
	}
	render(){
		return(
			<div className='TrucksPage'>
				<h1>Our Trucks</h1>
				{
					this.state.trucks.length === 0 ? 'Loading...' : ''
				}
				{
					(Object.prototype.toString.call(this.state.trucks) !== "[object Array]"	) ? '' : this.state.trucks.map(el=>{
						return(
							<div key={el.id}>
								<TruckItem data={el} />
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default TrucksPage;