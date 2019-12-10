import React from 'react';
import './Task2.scss';
import naruto from './naruto.jpg';


class Task2 extends React.Component {
	state = {
		hover: true,
		width: 200,
		height: 200,
		style: {},
		borderWidth: 2,
		borderColor: 'red',
		tableElements: [],
		alt: '',
		student: '',
		mark: '',
		hidden: true
	}
	componentDidMount = () =>{
		this.styleSet();
		this.setState({
			tableElements: [{id: 1, student: 'Vladik', mark: 60}, {id: 2, student: 'Vania', mark: 65}]
		});
	}
	styleSet = () =>{
		this.setState({
			style : {
				transition: '.3s',
				width: this.state.width>=200 ? Number(this.state.width) : 200,
				height: this.state.height>=200 ? Number(this.state.height) : 200,
				border: `${this.state.borderWidth}px solid ${this.state.borderColor}`
			}	
		})

	}
	handleChange = (event) =>{
		let input = event.target;
		if(input.name === 'height') if(input.value<1000) this.setState({ height: input.value }, this.styleSet);
		if(input.name === 'width') if(input.value<900) this.setState({ width: input.value }, this.styleSet);
		if(input.name === 'borderWidth') this.setState({ borderWidth: input.value }, this.styleSet);
		if(input.name === 'borderColor') this.setState({ borderColor: input.value }, this.styleSet);
		if(input.name === 'alt'){
			let regexp = /[A-Za-z]/;
			if(input.value === '') this.setState({alt: input.value});
			else if(input.value[input.value.length-1].match(regexp) !== null) {
				console.log('eee')
				this.setState({alt: input.value});
			}
		}
	}
	handleSecondClick = (id, event) =>{
		let newMas = this.state.tableElements.filter((el)=>(el.id!==id));
		newMas.forEach((el, i)=>el.id=i+1);
		this.setState({
			tableElements: newMas
		});
	}
	maximum = () =>{
		let max = this.state.tableElements[0].mark || 0;
		for(let i = 0; i<this.state.tableElements.length; i++){
			if(this.state.tableElements[i].mark > max) max = this.state.tableElements[i].mark; 
		}
		return max;
		// return this.state.tableElements.reduce((a,b)=>{
		// 	console.log(a.mark);
		// 	return Math.max(a.mark, +b.mark);
		// });
	}
	AddStudent = () =>{
		this.setState({
			hidden: !this.state.hidden
		});
	}
	handleChange2 = (event) =>{
		let input = event.target;
		if(input.name === 'student') this.setState({ student: input.value });
		if(input.name === 'mark') this.setState({ mark: input.value });
	}
	handleSubmit = (event) =>{
		this.state.tableElements.push({id: this.state.tableElements.length + 1, student: this.state.student, mark: this.state.mark});
		this.setState({
			hidden: true,
			student: '',
			mark: '',
		});
		event.preventDefault();
	}
	randBgc = () =>{
		return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
	}
	render(){
		return (
			<div>
				<div className='First'>
					<img style={this.state.style} src={naruto} title={this.state.alt} alt={this.state.alt}/>
					<h2>Зміна Розмірів</h2>
					<label>
						Висота 
						<input name={'height'} value={this.state.height} type="number" step='5' onChange={this.handleChange}/>
					</label>
					<br/>
					<label>
						Ширина 
						<input name={'width'} value={this.state.width} type="number" step='10' onChange={this.handleChange}/>
					</label>
					<h2>Зміна Рамки</h2>
					<label>
						Товщина рамки
						<input name={'borderWidth'} value={this.state.borderWidth} type="number" step='5' onChange={this.handleChange}/>
					</label>
					<br/>
					<label>
						Колір рамки
						<input name={'borderColor'} value={this.state.borderColor} type="text" onChange={this.handleChange}/>
					</label>
					<br/>
					<label>
						Альтернативний текст
						<input name={'alt'} value={this.state.alt} pattern='\[а-яА-ЯЁёъЪ]+' type="text" onChange={this.handleChange}/>
					</label>
				</div>
				<div className='Second'>
					<table>
						<thead>
							<tr>
								<th></th>
								<th>Student</th>
								<th>Mark</th>
							</tr>
						</thead>
						<tbody>
							{
								this.state.tableElements.map((el) => 
									<tr key={el.id}>
										<td><button onClick={(event)=>this.handleSecondClick(el.id, event)}>Delete</button></td>
										<td>{el.student}</td>
										<td>{el.mark}</td>
									</tr>
								)
							}
						</tbody>
					</table>
					<button onClick={this.AddStudent}>Add Student</button>
					{
						this.state.hidden 
						? ''
						:<div>
							<form onSubmit={this.handleSubmit}>
								<label>
									Student
									<input name={'student'} required value={this.state.student} maxLength='10' type="text" onChange={this.handleChange2}/>
								</label>
								<br/>
								<label>
									Mark
									<input name={'mark'} required value={this.state.mark} maxLength='10' type="number" onChange={this.handleChange2}/>
								</label>
								<button>Submit</button>
							</form>
						</div>
					}
					<h2>Diagrama</h2>
					<div className='Diagrama'>
						{
							this.state.tableElements.map((el, i) => {
								return <div><div key={i} style={{height: Number(el.mark)*300/this.maximum(), background: this.randBgc()}}></div><h3>{el.student}</h3></div>			
							}
										
							)
						}
					</div>
				</div>
			</div>
		);
	}
	
}

export default Task2;
