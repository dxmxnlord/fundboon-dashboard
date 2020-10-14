import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

import { useClient } from '../../../client';
import fundboonLogo from '../../../assets/img/fundboon-logo-full.png';

import 'bootstrap/dist/js/bootstrap';
import '../../../index.scss';

import { USER_EXISTS_QUERY } from '../../../graphql/queries';
import { LOGIN_MUTATION } from '../../../graphql/mutation';
// import { useHistory } from "react-router-dom";

const Login = ({ history, location}) => {
  const client = useClient();
  // const [product, setfromProduct] = useState(fromProduct === undefined ? false : true);
  const dispatch = useDispatch();
  const [status, setStatus] = useState('primary');
  const [email, setEmail] = useState('');
  const [isEmailValid, setEmailValidity] = useState(false);
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [cookies, setCookie] = useCookies(['user']);
  // let history = useHistory();
  const handleEmailSubmit = async e => {
    try {
      e.preventDefault();
      setEmailValidity(true);
      const variables = { email };

    } catch {
      return;
    }
  }

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      setSubmitting(true);

      const variables = { email, password };
      const {adminLogin: login}  = await client.request(LOGIN_MUTATION, variables);
      
      console.log(login)
      const user = {
        name: login.name,
        email: login.email,
        id: login.id
      }

      const userCookie = JSON.stringify(user);
      setCookie('user', userCookie, { path: '/', maxAge: 86400 });
      setStatus('success');
      setSubmitting(false);
      dispatch({ type: 'LOGIN_USER', payload: login });
      // if(location.state && location.state.next_state === '/apply') {
      //   history.push({
      //     pathname: '/apply',
      //     state: {
      //       user: location.state.user,
      //       product : location.state.product,
      //     }
      //   });
      // } else {
      history.push({ pathname: '/' });
      // }

    } 
    catch (err) {
      console.log(err);
      Swal.fire({
        //title: 'Error!',
        //text: err.response.errors.reduce((x, y) => `${x}\n${y.message}`, ''),
        //type: 'error',
        //confirmButtonText: 'OK',

        imageUrl:fundboonLogo,
          imageWidth: "150px",
          imageHeight:"50px",
          title: 'Oops...',
          text: 'Invalid Password for the given email address',
          html:'<img src="https://imgur.com/t8HlUUb.jpg" alt="Smiley face" height="60" width="60"/><br/><br/><p>Incorrect Password, Please ty again.</p>',
          //type: 'error',
          confirmButtonText: 'OK'
      });

      setStatus('danger');
      setSubmitting(false);
      console.error({ err });
    }
  };

  return (
    <div id="Routine" className="mb-5 card shadow-lg p-3 mb-5 bg-white box" >
      <br/>
      <a href="/" style={{textDecoration: 'none'}}><h6><i className="fa fa-arrow-left" /> Back</h6></a>
      <center>

      <h1>Login</h1>
      </center>
      <div className={classNames('card border-top', `border-${status}`)}>
        <div className="card-body py-4">
          <form onSubmit={!isEmailValid ? handleEmailSubmit : handleSubmit}>
            <div className="form-group">
              <label>
                <i className="fas fa-at" />
                &nbsp; Email or Phone Number
                <input
                  type="text"
                  placeholder="Enter your Email Address or Phone Number"
                  className={classNames('form-control mt-2', {
                    'is-valid': status === 'success',
                    'is-invalid': status === 'danger'
                  })}
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  disabled={submitting || isEmailValid}
                  required
                />
              </label>
              <small className="form-text text-muted">
                We'll never share your email or phone number with anyone else.
              </small>
            </div>
            {isEmailValid && (
              <div className="form-group">
                <label>
                  <i className="fas fa-unlock-alt" />
                  &nbsp; Password
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    className={classNames('form-control mt-2', {
                      'is-valid': status === 'success',
                      'is-invalid': status === 'danger'
                    })}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    disabled={submitting}
                    required
                  />
                </label>
                <small className="form-text text-muted">
                  Don't share your password with anyone else!
                </small>
              </div>
            )}
            <button
              type="submit"
              disabled={submitting}
            /*onClick={() => history.goBack()}*/
              className={classNames('btn btn-block', `btn-${status}`)}
            >
              {submitting ? (
                <span>
                  <i className="fas fa-circle-notch fa-spin" />
                  &nbsp; Loading
                </span>
              ) : isEmailValid ? (
                'Submit'
              ) : (
                'Next'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Login);
