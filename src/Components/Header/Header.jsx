import React, { useLayoutEffect, useState } from 'react';
import './Header.scss'
import {NavLink} from 'react-router-dom'
import 'react-sticky-header/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";
import {  CSSTransition,  TransitionGroup} from 'react-transition-group';
import {SetJWTActionCreator} from '../../redux/SignUpPage_reducer';


function useWindowSize() {
  const [scroll, setScroll] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateScroll() {
      setScroll(window.pageYOffset, window.pageXOffset);
    }
    window.addEventListener('scroll', updateScroll);
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  return scroll;
}

const SignOutUser = (e, store, cb) => {
	if (localStorage.getItem("JWT") !== null) {
		localStorage.removeItem("JWT");
	}
	store.dispatch(SetJWTActionCreator(''));
	e.preventDefault();
	cb(null);
};

const Header = (props) =>{
	const jwt = props.store.getState().SignUpPage.jwt;
	const scroll = useWindowSize();
    return(
	   		<div id='s1'>		
				<div className='h_1'>
						<div className='block'>
							Tel: +380678046748
						</div>
						<div className='block'>
							Telegram: @micro4elik
						</div>
						<div className='block'>
							Skype: p.s.vlad2000@ukr.net
						</div>
				</div>

				<div className='h_2'>
					<NavLink to = '/'>
						<img src={props.store.getState().HeaderPage.link} alt="logo"/>
					</NavLink>
					<div  className='bars'>
						<NavLink className='bar' to = '/'>
							<div>
								<span>Home</span>
							</div>
						</NavLink>
						<NavLink className='bar' to = '/content/drivers'>
							<div>
								<span>Our Drivers</span>
							</div>
						</NavLink>
						<NavLink className='bar' to = '/content/trucks'>
							<div>
								<span>Our Trucks</span>
							</div>
						</NavLink>
						<NavLink className='bar' to = '/content/services'>
							<div>
								<span>Services</span>
							</div>
						</NavLink>					
							{
								jwt
								? <>
										{
											props.user.login === 'admin'
											? <NavLink className='bar' to = '/content/AdminPage'>
													<div>
														<span>AdminPage</span>
													</div>
												</NavLink>
											: <></>
										}
										<div className='sign'>
											<p>Hi, {props.user.first_name}!</p>
											<div className='bar' onClick={(event) => SignOutUser(event, props.store, props.setuser)}>Sign Out</div>
										</div>
									</>
								:	<div className='sign'>
										<NavLink className='bar' to = '/signIn'>
											<div className='signin'>Sign In</div>
										</NavLink>
										<NavLink className='bar' to = '/signUp'>
											<div>Sign Up</div>
										</NavLink>
									</div>
							}
					</div>
				</div>
				{
					scroll>200
					? <TransitionGroup>
                		<CSSTransition 
							appear={true}
							timeout={600}
							classNames='fade'
						>
						<Link
				                activeClass="active"
				                to="s1"
				                spy={true}
				                smooth={true}
				                offset={-70}
				                duration={1000}
				              ><div className='upToTop'><FontAwesomeIcon icon={faArrowUp} size='1x'/> </div>
						  </Link>
                		</CSSTransition>				           	
	                </TransitionGroup>
					: ''	
				}
			</div>
    );
}
export default Header;