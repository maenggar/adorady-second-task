import React from 'react';
import logo from "../assets/ardo1.svg";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush ">
                <NavLink exact={true} to="/" activeClassName="activeClass ">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3 "/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>

                <NavLink to="/maps" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Maps
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;