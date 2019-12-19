import React, {Component} from 'react';
import './AdminPage.scss';
import axios from 'axios';





class AdminPage extends Component {
	constructor(props){
		super(props);
		this.state  ={
			drivers: [],
			trucks: [],
			file: '',
			image: ''
		}
	}
	setFile = (e) =>{
		console.log(e.target.files[0])
		this.setState({file: e.target.files[0]});
	}
	sendFile = async (e) =>{
		e.preventDefault();
		const formData = new FormData();
        formData.append('file',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
			},
			responseType: "blob"			
		};
		await axios.post("/api/photos/add", formData, config)
			.then(res => {
				const file = new Blob([res.data], {type: "image/png"});
				const fileURL = URL.createObjectURL(file);
				this.setState({
					image: fileURL
				});
				//window.open(fileURL);
				console.log(fileURL)
			})
		}
	componentDidMount = () =>{
		this.getDrivers(); //id, tel, card_number, first_name, last_name, age, reg_date
		this.getTrucks();  //id, reg_number, name, mileage, reg_date, cariage, volume, price1km, minDistance
	}
	getDrivers = () =>{
		fetch('http://localhost:4000/Drivers')
			.then(res => res.json())
			.then(res =>this.setState({drivers: res.data}))
			.catch(err=>console.log(err))
	}
	getTrucks = () => {
		fetch('http://localhost:4000/Trucks')
			.then(res => res.json())
			.then(res =>this.setState({trucks: res.data}))
			.catch(err=>console.log(err));
	}
	render(){
		return (
			<div className='AdminPage'>
				<h1>AdminPage</h1>
				<div>
					<h3>Trucks Section</h3>
					{
						(Object.prototype.toString.call(this.state.trucks) !== "[object Array]"	) ? '' : this.state.trucks.map(el=>{
							return(
								<div key={el.id}>
									<h4>Name: {el.name}</h4>
									<p>Carriage Capacity: {el.cariage} <i>kg</i></p>
									<p>Volume: Up To {el.volume} <i>m{`\u00B3`}</i></p>
									<p>Price for 1km: {el.price1km} <i>UAH</i></p>
									<p>Minimum distance: {el.minDistance} <i>km</i></p>
									<p>Registration date: {el.reg_date.substr(0, 10)}</p>
									<p>Registration number: {el.reg_number}</p>
									<form onSubmit={this.sendFile}>
										<input type="file" onChange={this.setFile} name="file"/>
										<button type='submit'> Send </button>
									</form>
									{
										this.state.image
										? <img style={{width: '500px'}} src={this.state.image} alt=""/>
										: ''
									}
									
								</div>
							)
						})
					}
				</div>
				<div>
					<h3>Drivers Section</h3>
					{
						(Object.prototype.toString.call(this.state.drivers) !== "[object Array]"	) ? '' : this.state.drivers.map(el=>{
							return(
								<div key={el.id}>
									<h4>Name: {el.first_name} {el.last_name}</h4>
									<p>Age: {el.age}</p>
									<p>Telephone: +380{el.tel}</p>
									<p>Registration date: {el.reg_date.substr(0, 10)}</p>
								</div>
							)
						})
					}
				</div>
				<div>
					<h3>Orders Section</h3>
				</div>
			</div>
		)
	}
}

export default AdminPage;
