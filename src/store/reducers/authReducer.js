const initialState = {
	currentUser: null,
	isAuth: false
}

const authReducer = (state = initialState,{type,payload})  => {
	switch (type) {
	  case 'LOGIN_USER':
	    return {
	      ...state,
	      currentUser: payload,
	      isAuth: true
	    };

	  case 'LOGOUT_USER':
	    return {
	      ...state,
	      currentUser: null,
	      isAuth: false
	    };

	  case 'IS_LOGGED_IN':
	    return {
	      ...state,
	      isAuth: payload
	    };

	  default:
	    return state;
	}
}

export default authReducer;