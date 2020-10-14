import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import Context from '../../context';
import { useClient } from '../../client';
const Logout = async () => {
  const client = useClient();
  const { state, dispatch } = useContext(Context);
};

export default Logout;
