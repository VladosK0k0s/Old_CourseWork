import React from 'react';
import './Task1.css'

const names =[
	['Антон', 'Александр', 'Дмитрий', 'Максим', 'Даниил', 'Кирилл', 'Ярослав', 'Денис', 'Никита', 'Иван', 'Тимофей', 'Богдан', 'Глеб', 'Захар', 'Матвей'],
	['Алиса', 'Алина', 'Анастасия', 'Юлия', 'Татьяна', 'Светлана', 'Наталья', 'Кристина', 'Ксения', 'Марина', 'Дарья', 'Елена', 'Ирина']
];
var countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cura?ao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'R?union', 'Romania', 'Russia', 'Rwanda', 'Saint Barth?lemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'S?o Tom? and Pr?ncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];

var factorial = (number) =>{
    if (number <= 1) {
        return 1;
    } else {
       return number * factorial(number-1);
    }
}


class Task1 extends React.Component{
	constructor(props) {
	  super(props);
		
	  this.state = {
	  	hover: true,
	  	name: null,
	  	age: null,
	  	childCount: null,
	  	country: null,
	  	sex: null,
	  	predictionHover: true,
	  	prediction: '',
	  	bottlesNumber: '',
	  	botlesText: [],
	  	arr: [ {value: 100, type: 'USD'}, 
	  			{value: 215, type: 'EUR'}, 
	  			{value: 7, type: 'EUR'}, 
	  			{value: 99, type: 'USD'}, 
	  			{value: 354, type: 'USD'}, 
	  			{value: 12, type: 'EUR'}, 
	  			{value: 77, type: 'USD'} 
	  	],
	  	sum: 0,
	  	mas: [],
	  	pascalHeight: '',
	  	pascalPiramid: []
	  };
	  this.handleClick = this.handleClick.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.Sum = this.Sum.bind(this);
	  this.Mas = this.Mas.bind(this);
	  this.handleInputChange = this.handleInputChange.bind(this);
	  this.handlePascal = this.handlePascal.bind(this);
	}
	handleClick(event){
		event.target.blur();
		const name = prompt('Enter Your Name');
		this.setState({
			name: name.toString()
		});
		const age = prompt('Enter Your Age');
		this.setState({
			age: age
		});
		const sex = prompt('Enter Your $\u2140\u2716 (man or woman)');
		this.setState({
			sex: sex
		});
		this.setState({
			age: age
		});
		const childCount = prompt('Enter Number of Childrens');
		this.setState({
			childCount: childCount
		});
		const country = prompt('Enter Country of Your Birth');
		this.setState({
			country: country
		});
		this.setState({
			hover: false
		});
		event.preventDefault();
	}
	handleSubmit(){
		let prediction = `Hi, ${this.state.name}! `;
		prediction += 'You\'ll get married on';
		if((this.state.sex==='man')||(this.state.sex==='woman')){
			let nsex = (this.state.sex==='man') ? 1 : 0;
			let random = Math.floor(Math.random()*names[nsex].length);
			prediction += ` ${names[nsex][random]} `;
		}
		else prediction += ' Александр';
		let randAge = Number(this.state.age) + Math.floor(Math.random()*6 - 3);
		prediction += `, ${randAge} y.o. `
		prediction += `You will be live in ${countries[Math.floor(Math.random()*countries.length)]}`;
		let randC = Number(this.state.childCount) + Math.floor(Math.random()*2 - 1);
		prediction += ` and have ${randC} children${((randC===0)||(randC===1)?'':'s')} `;
		this.setState({
			prediction: prediction
		});
		this.setState({
			predictionHover: false
		});
	}
	handleInputChange(event){
		let botlesText = [];
		for(let i = 0; i < event.target.value; i++){
			botlesText.push(event.target.value-i);
		}
		this.setState({
			bottlesNumber: event.target.value,
			botlesText: botlesText
		})
	}
	handlePascal(event){
		if(event.target.value !== ''){
			let N = Number(event.target.value);
			console.log(N);
			let piramid = []
			for(let i = 0; i<=N; i++){
				piramid[i] = [];
				for(let j = 0; j<=i; j++){
					piramid[i][j] = factorial(i)/(factorial(j)*factorial(i-j));
				}
			}
			this.setState({
				pascalHeight: N,
				pascalPiramid: piramid
			})
		}
		else{
			this.setState({
				pascalHeight: event.target.value,
				pascalPiramid: []
			})
		}
	}
	Sum(){
		let sum = 0;
		this.state.arr.map(el=>{
			if(el.value< 100){
				sum+=el.value
			}
		})
		this.setState({
			sum: sum
		})
	}
	Mas(){
		let mas = [];
		this.state.arr.map(el=>{
			if(el.type==='EUR'){
				mas.push({
					value: el.value*2,
					type: el.type
				})
			}
		})
		console.log(mas);
		this.setState({
			mas: mas
		})
	}
	render(){
		console.log(this.state.pascalPiramid);
		return (
			<div className='task1'>
				<header>
					<h1>Task1</h1>
				</header>
				<div className='handleblock'>
					<h2>Want to know the future? Click the button below!</h2>
					<button onClick={this.handleClick}>Click me!</button>
				</div>
				<div>
					{
						((this.state.name!==null)&&(this.state.name!==''))? <p>Your name: {this.state.name}</p> : ''
					}
					{
						((this.state.age!==null)&&(this.state.age!==''))? <p>Your age: {this.state.age}</p> : ''
					}
					{
						((this.state.sex!==null)&&(this.state.sex!==''))? <p>Your {'$\u2140\u2716'}: {this.state.sex}</p> : ''
					}
					{
						((this.state.childCount!==null)&&(this.state.childCount!==''))? <p>Number of childrens: {this.state.childCount}</p> : ''
					}
					{
						((this.state.country!==null)&&(this.state.country!==''))? <p>Country: {this.state.country}</p> : ''
					}
					{
						this.state.hover
						? '' 
						: <div className='Submit'>
							<p>Everything is Right? Touch the <b>SUBMIT</b> to make prediction!</p>
							<button onClick={this.handleSubmit}>SUBMIT</button>
						  </div>
					}
					{
						this.state.predictionHover
						? ''
						: <p>Prediction for You: {this.state.prediction}</p>
					}
				</div>
				<div className='pascal'>
					<label>
						Enter piramid Height(starts from 0): 
						<br/>
						<input type="text" value={this.state.pascalHeight} onChange={this.handlePascal}/>
					</label>
					{
						this.state.pascalPiramid ===[] ? '' :this.state.pascalPiramid.map((el,i)=>{
							return (
								<p key = {i}>
									{
										el.map((ell, i)=>{
											return (<span key = {i}>{ell}</span>)
										})
									}
								</p>
							)
						})
					}
				</div>
				<div>
					<label>
						Enter number of bottles: 
						<br/>
						<input type="text" value={this.state.bottlesNumber} onChange={this.handleInputChange}/>
					</label>
					{
						this.state.botlesText.map(el=>{
							if((el===4)||(el===2)||(el===3)){
								return <p key={el}>{el} пляшки стоїть на стіні, одна упала і залишилось {el-1}</p>
							}
							else if(el===1){
								return <p key={el}>{el} пляшка стоїть на стіні, одна упала і залишилось жодної</p>
							}
							else{
								return <p key={el}>{el} пляшок стоїть на стіні, одна упала і залишилось {el-1}</p>
							}
						})					
					}
				</div>
				<div>
					<button onClick={this.Sum}>Click</button>
					<p>Sum: {this.state.sum}</p>
					<button onClick={this.Mas}>Click</button>
					<p>Mas: {`[`}{this.state.mas.map(el=>{
							return `{ value: ${el.value}, type: '${el.type}' }`
						})}{`]`}
					</p>
				</div>
			</div>
		);
	}
}

export default Task1;