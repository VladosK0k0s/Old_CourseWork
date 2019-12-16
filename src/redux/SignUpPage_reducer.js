const SetJWT = 'SetJWT'

let initialState = {
    jwt: localStorage.getItem("JWT")
}

const SignUpPage_reducer = (state = initialState, action) =>{
	switch (action.type) {
        case SetJWT:{
			state.jwt = action.text;
			return state;
		}
		default:
			return state;
	}
}



export const SetJWTActionCreator = (text) =>({type: SetJWT, text: text});

export default SignUpPage_reducer;