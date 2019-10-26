


let initialState = {
	listData: [
		{id: 1, name: 'Clients', count: 10000, iconid: 0},
		{id: 2, name: 'Kilometers', count: 10000000, iconid: 1},
		{id: 3, name: 'Trucks', count: 7, iconid: 2},
		{id: 4, name: 'Drivers', count: 5, iconid: 3}
	],
	mainFormData: {
		departureCountries: [
			{id: 1, country: 'Deutchland'},
			{id: 2, country: 'Poland'},
			{id: 3, country: 'Ukraine'},
			{id: 4, country: 'Belarus'},
			{id: 5, country: 'Hungary'},
			{id: 6, country: 'Slovakia'}
		],
		weightarray: [
			{id: 1, tons: 3.5},
			{id: 2, tons: 5},
			{id: 3, tons: 7.5},
			{id: 4, tons: 10.5},
			{id: 5, tons: 15},
			{id: 6, tons: 20}
		],
		sizearray: [
			{id: 1, cubedMeters: 50},
			{id: 2, cubedMeters: 100},
			{id: 3, cubedMeters: 150}
		],
		deliveryTime: [
			{id: 1, days: 3},
			{id: 2, days: 7},
			{id: 3, days: 14}
		]
	}


}

const StartPage_reducer = (state = initialState, action) =>{
	switch (action.state) {
		default:
			return state;
	}
}

export default StartPage_reducer;