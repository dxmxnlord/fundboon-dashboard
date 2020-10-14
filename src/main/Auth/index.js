import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// import assets
import fundboonLogoTextColor from '../../assets/img/fundboon-logo-text-color.png';
import fundboonLogoTextColorInverted from '../../assets/img/fundboon-logo-text-color-inverted.png';
import patternTopLeft from '../../assets/img/auth-tl.png';
import patternBottomLeft from '../../assets/img/auth-bl.png';

import Context from '../../context';
import { useClient } from '../../client';
import Login from './components/Login';
import Skeleton from '../layout/Skeleton';

import { LOGOUT_MUTATION } from '../../graphql/mutation';

const Auth = ({ defaultRoutine = 'login' }) => {
  const client = useClient();
  const { state, dispatch } = useContext(Context);
  const [routine, setRoutine] = useState(defaultRoutine);
  const [fundboonLogo, setFundboonLogo] = useState(fundboonLogoTextColor);
  const [cookies, removeCookie] = useCookies(['user']);

  const displayRoutine = () => {
    if (state.isAuth ) {
      if (routine === 'logout') {
		    removeCookie('user', null, { maxAge: 0 });
        client.request(LOGOUT_MUTATION);
        dispatch({ type: 'LOGOUT_USER' });
        return <Redirect to='/'/>
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
