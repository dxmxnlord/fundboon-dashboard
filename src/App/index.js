import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import routes from './routes';
import ScrollToTop from './layout/ScrollToTop';
import Loader from '../Admin/App/layout/Loader';

import ProtectedRoute from '../ProtectedRoute';

const AdminLayout = Loadable({
    loader: () => import('../Admin/App/layout/AdminLayout'),
    loading: Loader
});


class App extends Component {

    render() {
    	const routeList = routes.map((route, index) => {
    	  return (route.component) ? (
    	      <Route
    	          key={index}
    	          path={route.path}
    	          exact={route.exact}
    	          name={route.name}
    	          render={props => (
    	              <route.component {...props} />
    	          )} />
    	  ) : (null);
    	});

    	return(
	    	<>
	    		<ScrollToTop>
	    			<Switch>
	    				{routeList}
	    				<ProtectedRoute path="/" component={AdminLayout} />
	    			</Switch>
	    		</ScrollToTop>
	    	</>
	    );
    }
}

export default App;