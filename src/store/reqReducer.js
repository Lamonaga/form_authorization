const regUser = {statusReg: null, statusError: null};

export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE'
export const FETCH_SIGNIN_REQUEST = 'FETCH_SIGNIN_REQUEST'


export const reqReducer = (state = regUser, action) => {
	switch (action.type) {
		case FETCH_MESSAGES_SUCCESS:
			return {...state, statusReg: true}
		case  FETCH_MESSAGES_FAILURE:
			return {...state, statusReg: false, statusError: action.payload}
		default:
			return state
	}
}



