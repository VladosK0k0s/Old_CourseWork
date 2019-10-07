import React from 'react';
import classes from './Task2.module.css'


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
						<label></label>
					</tr>
				</tbody>
			</table>
				
			</div>
		</div>
	);
}

export default Task2;
