import React from 'react';
import './ClientsPage.scss';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'


class ClientsPage extends React.Component{
	render(){
		return(
			<div className='clientsMain' >
				<h1>Our Clients</h1>
				<p>Neolithic Logistics guarantees high speed and complete safety at all stages of cargo transportation. 
					We come up with the best price offer among colleagues thanks to established partnerships with Ukrainian and foreign air carriers.
				</p>
				<ul>We constantly work with companies:
					<li>International Airlines of Ukraine</li>
					<li>Жмых Airlines</li>
					<li>Romaniuk Logistics</li>
				</ul>
			</div>
		)
	}
}

export default ClientsPage;
