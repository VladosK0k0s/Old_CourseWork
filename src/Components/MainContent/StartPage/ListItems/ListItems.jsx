import React from 'react';
import {NavLink} from 'react-router-dom'
import  './ListItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faRoad, faTruck, faUserTie } from '@fortawesome/free-solid-svg-icons'

let icons = [faUsers, faRoad, faTruck, faUserTie]

const ListItems = (props) =>{
	return(
		<ul className='mainlist'>
			{
				props.listData.map((el=>{
					return(
						<li key = {el.iconid}>
							<NavLink className='barlink' to = {`/content/${el.name}`}>
								<FontAwesomeIcon className='icon' icon={icons[el.iconid]} size='5x'/>
								<div>{el.count}</div>
								<div>{el.name}</div>
							</NavLink>
						</li>
					)
				}))
			}
		</ul>
	)
}

export default ListItems;