import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'
import 'react-sticky-header/styles.css';
import Headroom from 'react-headroom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCogs } from '@fortawesome/free-solid-svg-icons'



const Header = () =>{
    return(
    	<Headroom>
	   		<div>		
				<div className={classes.h_1}>
						<div className={classes.block}>
							Tel: +380678046748
						</div>
						<div className={classes.block}>
							Telegram: @micro4elik
						</div>
						<div className={classes.block}>
							Skype: p.s.vlad2000@ukr.net
						</div>
				</div>
				<div className={classes.h_2}>
					<NavLink to = '/'>
						<img src="https://www.codester.com/static//uploads/items/10227/preview-xl.jpg" alt="logo"/>
					</NavLink>
					<div  className={classes.bars}>
						<NavLink className={classes.bar} to = '/'>
							<FontAwesomeIcon icon={faHome} size='2x'/> Hom
						</NavLink>
						<NavLink className={classes.bar} to = '/task1'>
							Task 1
						</NavLink>
						<NavLink className={classes.bar} to = '/task2'>
							Task 2
						</NavLink>
						<NavLink className={classes.bar} to = '/services'>
							<FontAwesomeIcon icon={faCogs} size='2x'/> Services
						</NavLink>
					</div>
				</div>	
			</div>
		</Headroom>
    );
}
export default Header;