



let initialState = {
	TrucksData:[
		{
			id: 1,
			carcap: 5000,
			price: 30,
			minkm: 400,
			maxvolume: 55 
		},
		{
			id: 2,
			carcap: 7000,
			price: 50,
			minkm: 500,
			maxvolume: 55 
		},
		{
			id: 3,
			carcap: 15000,
			price: 100,
			minkm: 500,
			maxvolume: 120
		},
		{
			id: 4,
			carcap: 1500,
			price: 20,
			minkm: 50,
			maxvolume: 17
		}
	]
}


const TrucksPage_reducer = (state = initialState, action) =>{
	switch (action.state) {
		default:
			return state;
	}
}

export default TrucksPage_reducer;