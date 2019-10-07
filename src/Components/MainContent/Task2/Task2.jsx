import React from 'react';
import classes from './Task2.module.css';

const Task2 = () =>{
	return (
		<div>
			<header>
				<h1>Task2</h1>
			</header>
			<div className={classes.form1}>
				<div>
					<h2>Join our team!</h2>
					<hr/>
					<input placeholder='Username' type="text" id="name"/>
					<input placeholder='Email' type="email" id="email"/>
					<input placeholder='Password' type="password" id="password"/>
					<img src="./topform.png" alt=""/>
					<input className={classes.but} type="submit" value='Submit!'/>
				</div>
			</div>
			<hr/>
			<div className={classes.form2}>
			<table>
				<tbody>
					<tr>
						<td colSpan = '2'>
							<label htmlFor="fullname">Full name</label>
							<input type="text" id="fullname"/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="email">Email</label>	
							<input type="email" id="email"/>
						</td>
						<td>
							<label htmlFor="phone">Phone</label>
							<input type="phone" id="phone"/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="login">Login</label>
							<input type="login" id="login"/>
						</td>
						<td>
							<label htmlFor="password">Password</label>
							<input type="password" id="password"/>
						</td>
					</tr>
					<tr>
						<td colSpan = '2'>
							<label >Sport?</label>
							<div className={classes.checkboxes}>
								<div>
									<input type="checkbox" id="volleyball"/>
									<label htmlFor="volleyball">Volleyball</label>
								</div>
								<div>
									<input type="checkbox" id="football"/>
									<label htmlFor="football">Football</label>
								</div>
								<div>
									<input type="checkbox" id="tennis"/>
									<label htmlFor="tennis">Tennis</label>
								</div>
								<div>
									<input type="checkbox" id="diving"/>
									<label htmlFor="diving">Diving</label>
								</div>
								<div>
									<input type="checkbox" id="wrestling"/>
									<label htmlFor="wrestling">Wrestling</label>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td colSpan = '2'>
							<label >Favourite framework?</label>
							<div className={classes.checkboxes}>
								<div>
									<input type="radio" id="react" name='rad'/>
									<label htmlFor="react">React JS</label>
								</div>
								<div>
									<input type="radio" id="vue" name='rad'/>
									<label htmlFor="vue">Vue JS</label>
								</div>
								<div>
									<input type="radio" id="angular" name='rad'/>
									<label htmlFor="angular">Angular JS</label>
								</div>
								<div>
									<input type="radio" id="polymer" name='rad'/>
									<label htmlFor="polymer">Polymer</label>
								</div>
								<div>
									<input type="radio" id="ember" name='rad'/>
									<label htmlFor="ember">Ember</label>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td colSpan = '2'>
							<label htmlFor="about">About</label>
							<textarea rows="4" name='about'/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="select">Position</label>
							<select name='select' id="select">
								<option selected value></option>
								<option value="front-end">Front-End Developer</option>
								<option value="back-end">Back-End Developer</option>
								<option value="full-stack">FullStack Developer</option>
							</select>
						</td>
						<td>
							<input type="submit" value='Send'/>
						</td>
					</tr>
				</tbody>
			</table>
				
			</div>
		</div>
	);
}

export default Task2;
