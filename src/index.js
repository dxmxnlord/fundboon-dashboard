import React,{Suspense, useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Context from './context';
import reducer from './reducer';
import ProtectedRoute from './ProtectedRoute';
import Admin from './Admin';
import Auth from './main/Auth';

import 'bootstrap/dist/js/bootstrap';
import './index.scss';

const store = createStore(reducer);

const MainApp = () => {
	const initialState = useContext(Context);
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<Router>
			<Context.Provider value={{ state, dispatch }}>
				<Switch>
					<Route exact path="/login" component={Auth} />
					<Route exact path="/logout" component={(props)=>(<Auth defaultRoutine={"logout"} {...props}/>)} />
					<ProtectedRoute path="/" component={Admin} />
				</Switch>
			</Context.Provider>
		</Router>
	);
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));