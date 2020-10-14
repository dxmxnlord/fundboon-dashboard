import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {useSelector} from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const state = useSelector((state) => state.auth)
	const [cookies] = useCookies(['user']);
  if(cookies.user){
    state.isAuth=true;
  }
  else{
    state.isAuth=false;
  }

  return (
    <Route
      render={props =>
        !state.isAuth ? <Redirect to="/login" /> : <Component {...props} />
      }
      {...rest}
    />
  );
};

export default ProtectedRoute;
