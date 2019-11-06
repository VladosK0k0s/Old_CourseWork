import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'
import 'react-sticky-header/styles.css';
//import Headroom from 'react-headroom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCogs } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";



const Header = (props) =>{
    return(
	   		<div id='s1'>		
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
						<img src={props.store.getState().HeaderPage.link} alt="logo"/>
					</NavLink>
					<div  className={classes.bars}>
						<NavLink className={classes.bar} to = '/'>
							<div>
								<FontAwesomeIcon icon={faHome} size='2x'/> 
								Hom
							</div>
						</NavLink>
						<NavLink className={classes.bar} to = '/content/task1'>
							<div>Task 1</div>
						</NavLink>
						<NavLink className={classes.bar} to = '/content/task2'>
							<div>Task 2</div>
						</NavLink>
						<NavLink className={classes.bar} to = '/content/services'>
							<div>
								<FontAwesomeIcon icon={faCogs} size='2x'/> 
								Services
							</div>
						</NavLink>
						<div className={classes.sign}>
							<NavLink className={classes.bar} to = '/signIn'>
								<div className={classes.signin}>Sign In</div>
							</NavLink>
							<NavLink className={classes.bar} to = '/signUp'>
								<div>Sign Up</div>
							</NavLink>
						</div>
					</div>
				</div>
				<Link
	                activeClass="active"
	                to="s1"
	                spy={true}
	                smooth={true}
	                offset={-70}
	                duration={1000}
	              ><div className={classes.upToTop}>/\</div>
				</Link>	
			</div>
    );
}
export default Header;