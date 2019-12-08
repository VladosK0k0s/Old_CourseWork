import React, { useLayoutEffect, useState } from 'react';
import './Header.scss'
import {NavLink} from 'react-router-dom'
import 'react-sticky-header/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowUp, faHome, faCogs } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";
import {  CSSTransition,  TransitionGroup} from 'react-transition-group';



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

const Header = (props) =>{
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
								<FontAwesomeIcon icon={faHome} size='2x'/> 
								<span>Home</span>
							</div>
						</NavLink>
						<NavLink className='bar' to = '/content/task1'>
							<div>
								<span>Task 1</span>
							</div>
						</NavLink>
						<NavLink className='bar' to = '/content/task2'>
							<div>
								<span>Task 2</span>
							</div>
						</NavLink>
						<NavLink className='bar' to = '/content/services'>
							<div>
								<FontAwesomeIcon icon={faCogs} size='2x'/> 
								<span>Services</span>
							</div>
						</NavLink>
						<div className='sign'>
							<NavLink className='bar' to = '/signIn'>
								<div className='signin'>Sign In</div>
							</NavLink>
							<NavLink className='bar' to = '/signUp'>
								<div>Sign Up</div>
							</NavLink>
						</div>
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