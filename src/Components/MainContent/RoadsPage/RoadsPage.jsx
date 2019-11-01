import React from 'react';
import './ServicesPage.css';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import s1 from './ukrDelivery.jpg'
import s2 from './internationalDelivery.jpg'
import s3 from './relocation.jpg'
import s4 from './courierservice.jpg'
import { Link } from "react-scroll";


class ServicesPage extends React.Component{
	render(){
		return(
			<div className='services' >
				<h1>What we offer?</h1>
				<div className='serviceslist'>			
					<div className="serviceitem">
						<ReactFancyBox image={s1}
						defaultThumbnailWidth={250}
						defaultThumbnailHeight={200}/>
						<Link
			                activeClass="active"
			                to="section1"
			                spy={true}
			                smooth={true}
			                offset={-70}
			                duration={500}
			              ><h3>Delivery in Ukraine</h3>
						</Link>
					</div>
					<div className="serviceitem">
						<ReactFancyBox image={s2}
						defaultThumbnailWidth={250}
						defaultThumbnailHeight={200}/>
						<Link
			                activeClass="active"
			                to="section2"
			                spy={true}
			                smooth={true}
			                offset={-70}
			                duration={500}
			              ><h3>International Delivery</h3>
						</Link>
					</div>
					<div className="serviceitem">
						<ReactFancyBox image={s3}
						defaultThumbnailWidth={250}
						defaultThumbnailHeight={200}/>
						<Link
			                activeClass="active"
			                to="section3"
			                spy={true}
			                smooth={true}
			                offset={-70}
			                duration={500}
			              ><h3>Relocation</h3>
			            </Link>
					</div>
					<div className="serviceitem">
						<ReactFancyBox image={s4}
						defaultThumbnailWidth={250}
						defaultThumbnailHeight={200}/>
						<Link
			                activeClass="active"
			                to="section4"
			                spy={true}
			                smooth={true}
			                offset={-70}
			                duration={500}
			              ><h3>Courier Delivery in Kiev</h3>
			            </Link>  
					</div>
				</div>
				<h2>Delivery in Ukraine</h2>
				<p id='section1'>Call us a sucker for a great cheesy line, but we’re not like other apps. We’re not just snack delivery, we’re the first convenience store delivery app and digital convenience retailer. Today, convenience isn’t a store, it’s our lifestyle - and we’re here to support that lifestyle, as busy as it gets. No matter what you’re doing, whenever you’re doing it: we totally got you.</p>
				<p>Каждый конкретный заказ имеет индивидуальные особенности и нюансы, потому у нас нет фиксированной цены на грузоперевозки по Украине.</p>
					<ul>Стоимость во многом зависит от таких факторов:
						<li>дальности маршрута;</li>
						<li>пункта назначения, используемого транспорта;</li>
						<li>характеристик груза: габариты, тип, потребность в специфических условиях транспортировки.</li>
					</ul>
				<p>Наша компания приняла решение разработать стандартную тарифную сетку: реализуя грузоперевозки по Украине, цены остаются неизменными и рассчитываются перед оказанием услуг. Такой подход укрепляет доверие между нашей компанией и клиентом, предупреждает возникновение конфликтов на основании неверного ценообразования.</p>
				<h2>International Delivery</h2>
				<p id='section2'>Price of services of international delivery depends on the weight and dimensions of the cargo. The payment for the air transportation is usually determined by weight in kilograms, at that the weight is rounded to half a kilo to the heavier part. 
					When the ratio of weight and volume exceeds 5, the payment for air freight is charged in accordance with the volume of the cargo. 
					To determine the volume, it is necessary to define sizes of the package of the cargo (in cm to measure length x width x height = V) The volume equals V/5000. 
					If the cargo consists of several seats, payment for the air transportation is charged either by aggregate physical weight or the biggest aggregate volume.
				</p>
				<p>Ежегодно объем поставляемой в Европу украинской продукции возрастает, что указывает на стабильность сотрудничества и положительную динамику. 
					В связи с этим возникает потребность в оперативной и надежной доставке разнообразных грузов. 
					ГК <b>«Stepaniuk Logistics»</b> предлагает услуги грузоперевозки Украина-Европа: мы разрабатываем маршрут, подбираем подходящий транспорт, согласовываем дату прибытия.
					Чаще всего, когда речь идет о международных перевозках из Европы и в обратном направлении, имеется в виду привлечение автомобильного транспорта. 
					Мы располагаем своим и арендованным грузовым автотранспортом, приспособленным для совершения разноплановых перевозок.
				</p>
				<ul>В нашем автопарке есть:
					<li>рефрижераторы;</li>
					<li>тентованные грузовые машины;</li>
					<li>грузовики для перевозки зерна и других сыпучих товаров;</li>
					<li>цистерны;</li>
					<li>полуприцепы разного размера;</li>
					<li>тралы, платформы (низкие, высокие);</li>
					<li>контейнеры.</li>
				</ul>
				<p>Несмотря на высокую популярность автомобильного транспорта, сейчас при осуществлении грузоперевозки Европа-Украина все большую актуальность приобретают морские и железнодорожные перевозки. 
					ГК <b>«Stepaniuk Logistics»</b> организует оперативную доставку товаров по Дунаю, формирует оптимальные и удобные для клиента маршруты, учитывая особенности перевозимой продукции и сроки транспортировки.
				</p>
				<h2>Relocation</h2>
				<p id='section3'>Even if you’re only moving a short distance from your current location, every move is stressful. You don’t want to go it alone. Let CHICO MOVING handle both the big picture and all the details.

Our professional staff of logistics experts will answer your questions, provide step by step assistance and instructions, and ensure you are fully satisfied with your moving experience. All of this at an affordable price.</p>
				<h2>Courier Delivery in Kiev</h2>
				<p id='section4'>Kiev is the capital of the European country of Ukraine. Known for such picturesque places as the Kiev-Pechersk Lavra, St. Andrew's Church, Golden Gate and other. On the main street of the capital - Khreshchatyk, you will find restaurants and cafes with a varied menu, service and prices. But do not always be in crowded places, in pleasure, especially if it was a hard day. In this situation, most people are satisfied with eating at home. Independence Square or the embankment of the Dnieper is good, but sometimes you want to be alone.</p>
			</div>
		)
	}
}

export default ServicesPage;
