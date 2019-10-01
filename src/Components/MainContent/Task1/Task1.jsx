import React from 'react';
import classes from './Task1.module.css'


let params = [1,2,3,4,5];
let countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cura?ao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'R?union', 'Romania', 'Russia', 'Rwanda', 'Saint Barth?lemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'S?o Tom? and Pr?ncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];

const Task1 = () =>{
	return (
		<div>
			<h1>Task1</h1>
			<h2>1.1</h2>
			<h2>1.2</h2>
				<div>
					<ol type = 'i'>
						<ul type = 'disc'>
							<li>Українська мова</li>
						</ul>
						<li>Граматика</li>
						<li>Орфографія</li>
						<ul type = 'disc'>
							<li>Історія України</li>
						</ul>
						<li>Історія Київськой Русі</li>
						<li>Історія козацтва</li>
						<ul type = 'disc'>
							<li>Філософія</li>
						</ul>
						<li>Давньогрецькі філософи</li>
						<li>Філософія сучасності</li>
						<li>Проблеми наукового пізнання</li>
					</ol>
				</div>
			<h2>1.3</h2>
				<div>
					<table>
						<tbody>
							<tr>
								<td rowSpan='2'>1</td>
								<td>2</td>
								<td>3</td>
								<td rowSpan='2'>4</td>
							</tr>
							<tr>
								<td>5</td>
								<td>6</td>
							</tr>
							<tr>
								<td colSpan='4'>7</td>
							</tr>
							<tr>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
							</tr>
						</tbody>
					</table>
				</div>
			<h2>1.4</h2>
				<div className={classes.form1}>
					<form action="">
						<hr/>
						<label htmlFor="firstname">First Name:</label>
						<input type="text" id="firstname"/>
						<br/>
						<label htmlFor="lastname">Last Name:</label>
						<input type="text" id="firstname"/>
						<hr/>
						<button>Button Tag</button>
						<input type="submit" value='Input Button Tag'/>
						<hr/>
						<select name="CountrySelect">
						{
							countries.map((el)=>{
								return <option key={countries.indexOf(el)} value={el}>{el}</option>
							})
						}
						</select>
						<hr/>
						<input type="radio" name="gender" id="male" value="male"/>
						<label htmlFor="male">Male</label><br/>
						<input type="radio" name="gender" id="female" value="female"/>
						<label htmlFor="female">Female</label><br/>
						<hr/>
						<input type="checkbox" id="r1"/>
						<label htmlFor="r1">I like Taylor Swift</label><br/>
						<input type="checkbox" id="r2" />
						<label htmlFor="r2">I like Katy Perry</label><br/>
						<input type="checkbox" id="r3" />
						<label htmlFor="r3">I like Lana Del Rey</label><br/>
					</form>
				</div>
			<h2>1.5</h2>
			<div className={classes.video}>
				<iframe id="ytplayer" type="text/html" width='1280' height='720'
  				src="http://www.youtube.com/embed/tvyEzB389Gg?autoplay=0&origin=http://example.com"
  				frameBorder="0"/>
			</div>
		</div>
	);
}

export default Task1;