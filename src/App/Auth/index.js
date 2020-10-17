import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux';

// import assets
import fundboonLogoTextColor from '../../fundassets/img/fundboon-logo-text-color.png';
import fundboonLogoTextColorInverted from '../../fundassets/img/fundboon-logo-text-color-inverted.png';
import patternTopLeft from '../../fundassets/img/auth-tl.png';
import patternBottomLeft from '../../fundassets/img/auth-bl.png';

import { useClient } from '../../client';
import Login from './components/Login';
import Skeleton from '../layout/Skeleton';

import { LOGOUT_MUTATION } from '../../graphql/mutation';

const Auth = ({ defaultRoutine = 'login'}) => {
  const client = useClient();
  const state = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const [routine, setRoutine] = useState(defaultRoutine);
  const [fundboonLogo, setFundboonLogo] = useState(fundboonLogoTextColor);
  const [cookies, removeCookie] = useCookies(['user']);

  const displayRoutine = () => {
    if (state.isAuth) {
      if (routine === 'logout') {
		    removeCookie('user', null, { maxAge: 0 });
        client.request(LOGOUT_MUTATION);
        dispatch({ type: 'LOGOUT_USER' });
        return <Redirect to='/login' />
      }
      return <Redirect to="/" />;
    }

    return <Login />
  };

  return (
    <Skeleton
      id="AuthPage"
      noFooter
      noHeader
    >
	  <br/>
      <div className="h-100 d-flex flex-column justify-content-center align align-items-center">
        <Link to="/" className="brand-logo">
          <img
            src={fundboonLogo}
            onMouseEnter={() => setFundboonLogo(fundboonLogoTextColorInverted)}
            onMouseLeave={() => setFundboonLogo(fundboonLogoTextColor)}
            alt="Fundboon"
            className="w-100"
          />
        </Link>
        <br />
        
        {displayRoutine()}
        
      </div>
    </Skeleton>
  );
};

export default Auth;
