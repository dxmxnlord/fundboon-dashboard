import React from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './App/index';
import reducer from './store/reducer';
import config from './config';

const store = createStore(reducer);
class Admin extends React.Component{
	render(){

		return (
			<Provider store={store}>
			    <BrowserRouter>
			        {/* basename="/datta-able" */}
			        <App />
			    </BrowserRouter>
			</Provider>
		);
	}
}

export default Admin;