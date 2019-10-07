import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {Route, HashRouter, BrowserRouter} from 'react-router-dom'


const Header = () =>{
	let type = 'type';
	let obj = {
		type: 'l;llll'
	}
	console.log(obj.type);
	console.log(obj[type]);
   return(
   		<div>			
			<div className={classes.h_1}>
					<div className={classes.block}>
						Tel: +380678046748
					</div>
					<div className={classes.block}>
						Telegram: @micro4elik
					</div>
			</div>
			<div className={classes.h_2}>
				<img src="https://www.codester.com/static//uploads/items/10227/preview-xl.jpg" alt="logo"/>
				<div  className={classes.bars}>
					<NavLink className={classes.bar} to = '/'>Hom</NavLink>
					<NavLink className={classes.bar} to = '/task1'>Task 1</NavLink>
					<NavLink className={classes.bar} to = '/task2'>Task 2</NavLink>
				</div>
			</div>	
		</div>
   );
}
export default Header;