import React, {Component} from 'react';
import './AdminPage.scss';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { GenTruck, DelTruck } from '../../../services.js';



class AdminPage extends Component {
	constructor(props){
		super(props);
		this.state  ={
			drivers: [],
			trucks: [],
			file: '',
			imagelink: '',
			truckinput: {
				reg_number: '',
				name: '',
				mileage: '',
				cariage: '',
				volume: '',
				price1km: '',
				minDistance: '',
				imagename: '',
				trucklink: ''
			},
			Error: '',
			Message: ''
		}
	}
	setFile = (e) =>{
		let newfile = e.target.files[0];
		if(!newfile) return;
		newfile.newname = Date.now();
		this.setState({file: newfile}, console.log(this.state.file));
	}
	sendFile = async (e) =>{
		if(!this.state.file) return this.setState({Error: 'Select an Image!'})
		e.preventDefault();
		const formData = new FormData();
		formData.append('file',this.state.file);
        const config1 = {
			responseType: "blob"			
		};
		const config2 = {
            headers: {
                'content-type': 'multipart/form-data'
			},			
		};
		await axios.post("/api/photos/add", formData, config2)
			.then(res => {
				let newObj = this.state.truckinput;
				newObj.imagename = res.data
				this.setState({
					truckinput: newObj
				});
			});
		await axios.post("/api/photos/get", {name: this.state.truckinput.imagename}, config1)
			.then(res => {
				console.log(res);
				const file = new Blob([res.data], {type: "image/png"});
				const fileURL = URL.createObjectURL(file);
				this.setState({
					imagelink: fileURL
				});
				console.log(fileURL)
		});
	}
	componentDidMount = () =>{
		this.getDrivers(); //id, tel, card_number, first_name, last_name, age, reg_date
		this.getTrucks();  //id, reg_number, name, mileage, reg_date, cariage, volume, price1km, minDistance, photoname
	}
	getTrucksImgLinks = () =>{
		this.state.trucks.forEach(element => {
			this.getTruckImageLink(element.id)
		});
	}
	getDrivers = () =>{
		fetch('http://localhost:4000/Drivers')
			.then(res => res.json())
			.then(res =>this.setState({drivers: res.data}))
			.catch(err=>console.log(err))
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
		});
	}
	getTrucks = () => {
		fetch('http://localhost:4000/Trucks')
			.then(res => res.json())
			.then(res =>this.setState({trucks: res.data}))
			.then(() => this.getTrucksImgLinks())
			.catch(err=>console.log(err));
	}
	handleTruckChange = (e) =>{
		const input = e.target;
		const newObj = this.state.truckinput;
		newObj[`${input.name}`] = input.value;
		this.setState({ truckinput: newObj });
	}
	handleTruckAdd = () =>{
		this.setState({
			Error: '',
			Message: ''
		})
		GenTruck(this.state.truckinput, res => {		
			if(res.status === 405){
				this.setState({ Error: res.data.Error });
			}	
			if(res.status === 200){
				this.setState({ Message: res.data.Message, 
					file: '',
					imagelink: '',
					truckinput: {
						reg_number: '',
						name: '',
						mileage: '',
						cariage: '',
						volume: '',
						price1km: '',
						minDistance: '',
						imagename: '',
						trucklink: ''
					},
				}, this.getTrucks);
			}
		});
	}
	handleTruckDelete = (id) =>{
		console.log(id);
		DelTruck(id, res =>{
			if(res.status === 405){
				console.log(res.data.Error);
			}	
			if(res.status === 200){
				console.log(res.data.Message);
				this.getTrucks();
			}
		});
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
								<div className='truckinfo' key={el.id}>
									<div>
										<h4>Name: {el.name}</h4>
										<p>Carriage Capacity: {el.cariage} <i>kg</i></p>
										<p>Volume: Up To {el.volume} <i>m{`\u00B3`}</i></p>
										<p>Price for 1km: {el.price1km} <i>UAH</i></p>
										<p>Mileage: {el.mileage} <i>km</i></p>
										<p>Minimum distance: {el.minDistance} <i>km</i></p>
										<p>Registration date: {el.reg_date.substr(0, 10)}</p>
										<p>Registration number: {el.reg_number}</p>
										<Button onClick={()=>this.handleTruckDelete(el.id)} variant="outline-danger">Delete</Button>
									</div>
									{
										el.trucklink
										? <img src={el.trucklink} alt=""/>
										: ''
									}
								</div>
							)
						})
					}
					<div className='AddTruck'>
						<h4>Add new Truck</h4>
						<div className='mainform'>
							<form>
								<label>
									Registration number:
									<input name='reg_number' type="text" maxLength='10' onChange={this.handleTruckChange} value={this.state.truckinput.reg_number}/>
								</label>
								<label>
									Name:
									<input name='name' type="text" onChange={this.handleTruckChange} value={this.state.truckinput.name}/>
								</label>
								<label>
									Mileage:
									<input name='mileage' maxLength='10' type="text" onChange={this.handleTruckChange} value={this.state.truckinput.mileage}/>
								</label>
								<label>
									Carriage Capacity:
									<input name='cariage' maxLength='10' type="text" onChange={this.handleTruckChange} value={this.state.truckinput.cariage}/>
								</label>
								<label>
									Volume:
									<input name='volume' maxLength='10' type="text" type onChange={this.handleTruckChange} value={this.state.truckinput.volume}/>
								</label>
								<label>
									Price for 1km:
									<input name='price1km' maxLength='10' type="text" onChange={this.handleTruckChange} value={this.state.truckinput.price1km}/>
								</label>
								<label>
									Minimum distance:
									<input name='minDistance' maxLength='10' type="text" onChange={this.handleTruckChange} value={this.state.truckinput.minDistance}/>
								</label>
							</form>
							<div className='photoSection'>
								<div>
									<input accept='image/png' type="file" onChange={this.setFile} name="file"/>
									<button onClick={this.sendFile}> Add Photo </button>
								</div>
								{
									this.state.imagelink
									? <img style={{width: '80%'}} src={this.state.imagelink} alt=""/>
									: ''
								}	
							</div>
						</div>
						{this.state.Error &&
							<Alert style={{margin: '20px', textAlign: 'center'}} variant='danger'>
								{this.state.Error}
							</Alert>
						}
						{this.state.Message &&
								<Alert style={{margin: '20px', textAlign: 'center'}} variant='success'>
									{this.state.Message}
								</Alert>
						}
						<button onClick={this.handleTruckAdd}> Send Data </button>
					</div>	
				</div>
				<div>
					<h3>Drivers Section</h3>
					{
						(Object.prototype.toString.call(this.state.drivers) !== "[object Array]") ? '' : this.state.drivers.map(el=>{
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
