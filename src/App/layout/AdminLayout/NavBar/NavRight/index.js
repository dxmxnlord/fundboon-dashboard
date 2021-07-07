import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import ChatList from './ChatList';

import Avatar1 from '../../../../../assets/images/user/avatar-1.jpg';
import Avatar2 from '../../../../../assets/images/user/avatar-2.jpg';
import Avatar3 from '../../../../../assets/images/user/avatar-3.jpg';

const DEMO = { BLANK_LINK: '#'};

class NavRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            listOpen: false
        };
    }

    render() {

        const { auth : {currentUser} } = this.props;

        return (
            <>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <Dropdown alignRight={!this.props.rtlLayout} className="drp-user">
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <i className="icon feather icon-settings"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight className="profile-notification">
                                <div className="pro-head">
                                    <img src={Avatar1} className="img-radius" alt="User Profile"/>
                                    <span>{currentUser.name}</span>
                                    <Link to="/logout" className="dud-logout" title="Logout">
                                        <i className="feather icon-log-out"/>
                                    </Link>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                <ChatList listOpen={this.state.listOpen} closed={() => {this.setState({listOpen: false});}} />
            </>
        );
    }
}

export default connect(state=>state,null)(NavRight);
