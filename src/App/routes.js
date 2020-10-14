import React from 'react';
import $ from 'jquery';
import Auth from './Auth';

window.jQuery = $;
window.$ = $;
global.jQuery = $;


const routes = [
    { path: '/login', exact: true, name: 'Login', component: Auth},
    { path: '/logout', exact: true, name: 'Logout', component: (props) => (<Auth defaultRoutine="logout" {...props} />)},
];

export default routes;