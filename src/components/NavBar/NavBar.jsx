import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

export class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      loginClass: "",
      logOutClass: "d-none"
    };
  }

  componentDidMount() {
    this.checkToken();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      setTimeout(() => {
        this.checkToken();
      }, 200);
    }
  }

  toggleCollapse = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  logOut = () => {
    window.localStorage.removeItem("token");
    setTimeout(() => {
      this.checkToken();
    }, 200);
  };

  checkToken = () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      this.setState({ loginClass: "d-none", logOutClass: "" });
    } else {
      this.setState({ loginClass: "", logOutClass: "d-none" });
    }
  };

  render() {
    const { isOpen, loginClass, logOutClass } = this.state;
    return (
      <MDBNavbar color="brown" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Fast Food Fast</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className={loginClass}>
              <MDBNavLink to="/login">Login</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem onClick={this.logOut} className={logOutClass}>
              <MDBNavLink to="/">Logout</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

NavbarPage.propTypes = {
  token: PropTypes.shape({})
}

NavbarPage.defaultProps = {
  token: {}
}

export const mapStateToProps = state => {
  return {
    token: state.login.token
  };
};

export default connect(
  mapStateToProps,
  {}
)(NavbarPage);
