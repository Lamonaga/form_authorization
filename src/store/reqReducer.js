const reqData = {email: null, password: null};

export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE'
export const PUT_REQUEST = 'PUT_REQUEST'

export const reqReducer = (state = reqData, action) => {
	switch (action.type) {

		case PUT_REQUEST:
			return {...state, email: action.payload.email, password: action.payload.password}
		default:
			return state
	}
}

export const actionReqData = () => ({type: PUT_REQUEST})


