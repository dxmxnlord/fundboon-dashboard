import React,{Suspense, useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import throttle from 'lodash.throttle';

import App from './App';

import reducer from './store/reducers';
import { loadState, saveState } from './store/persist';

const hydrate = loadState();

const store = createStore(reducer,hydrate,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(throttle(() => {
	const state = store.getState();
  	saveState(state);
}, 1000));

const MainApp = () => {
	return (
		<Provider store={store}>
			<Router>
				<App/>
			</Router> 
		</Provider>
	);
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));