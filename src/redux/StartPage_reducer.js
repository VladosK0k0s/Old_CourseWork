


let initialState = {
	listData: [
		{name: 'Clients', count: 10000, iconid: 0},
		{name: 'Kilometers', count: 10000000, iconid: 1},
		{name: 'Trucks', count: 7, iconid: 2},
		{name: 'Drivers', count: 5, iconid: 3}
	]
}

const StartPage_reducer = (state = initialState, action) =>{
	switch (action.state) {
		default:
			return state;
	}
}

export default StartPage_reducer;