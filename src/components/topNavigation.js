import React, {Component} from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBIcon
} from 'mdbreact';

class TopNavigation extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling dusty-grass-gradient>
                <MDBNavbarBrand href="/">
                    <h3><strong>adroady task2</strong></h3>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick}/>
                <MDBCollapse isOpen={this.state.collapse} navbar>

                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank"
                               href="https://pl-pl.facebook.com/mdbootstrap/"><MDBIcon fab icon="facebook"/></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank"
                               href="https://twitter.com/mdbootstrap"><MDBIcon fab icon="twitter"/></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="border border-light rounded mr-1 nav-link Ripple-parent"
                               rel="noopener noreferrer"
                               href="https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design"
                               target="_blank"><MDBIcon fab icon="github" className="mr-2"/>adroady GitHub</a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;