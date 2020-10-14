import adminReducer from './adminReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
	admin: adminReducer,
	auth: authReducer,
})

export default reducer;