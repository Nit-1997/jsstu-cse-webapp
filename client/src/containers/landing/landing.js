import React, { Fragment, Component } from "react";
// import { Route, Switch,Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }

  logout = event => {
    event.preventDefault();
    if (this.props.loggedIn) {
      this.props.onLogout();
    }
  };

  login = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/login"
    });
  };

  signup = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/signup"
    });
  };

  dashboard = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/dashboard"
    });
  };

  onDummyLinkHandler = () => {
    console.log("Dummy link clicked!");
  };

  componentDidMount() { }

  componentDidUpdate() { }

  render() {
    let logoutBtn;
    if (this.props.loggedIn) {
      logoutBtn = (
        <Fragment>
          <li>
            <a href="/dashboard" onClick={this.dashboard}>
              Dashboard
            </a>
          </li>
          <li>
            <a href="/logout" onClick={this.logout}>
              Logout
            </a>
          </li>
        </Fragment>
      );
    } else {
      logoutBtn = (
        <Fragment>
          <li>
            <a href="/login" onClick={this.login}>
              Login
            </a>
          </li>
          <li>
            <a href="/signup" onClick={this.signup}>
              Signup
            </a>
          </li>
        </Fragment>
      );
    }
    return (
      <div className="app">
        <header id="header" className="fixed-top">
          <div className="container">
            <div className="logo float-left">
              <a href="#intro" className="scrollto">
                <img
                  src={require("../../views/img/jss_logo.png")}
                  alt="logo"
                  className="img-fluid d-block"
                />
              </a>
            </div>

            <nav className="main-nav float-right d-none d-lg-block">
              <ul>
                <li className="active">
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href={"#about"}>About Us</a>
                </li>
                <li>
                  <a href={"#students"}>Facilities</a>
                </li>
                <li>
                  <a href={"#portfolio"}>Faculty</a>
                </li>

                <li className="drop-down">
                  <a href='/'>Time Table</a>
                  <ul>
                    <li>
                      <a href='/'>I</a>
                    </li>
                    <li>
                      <a href='/'>II</a>
                    </li>
                    <li>
                      <a href='/'>III</a>
                    </li>
                    <li>
                      <a href='/'>IV</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/something">Contact Us</a>
                </li>
                {logoutBtn}
              </ul>
            </nav>
            {/* *<!-- .main-nav --> */}
          </div>
        </header>
        <nav className="mobile-nav display-lg-none">
          <ul>
            <li className="active">
              <a href="/">Home</a>
            </li>

            <li>
              <a href={"#about"}>About Us</a>
            </li>
            <li>
              <a href={"#students"}>Facilities</a>
            </li>
            <li>
              <a href={"#portfolio"}>Faculty</a>
            </li>

            <li className="drop-down">
              <a href='/'>Time Table</a>
              <ul>
                <li>
                  <a href='/'>I</a>
                </li>
                <li>
                  <a href='/'>II</a>
                </li>
                <li>
                  <a href='/'>III</a>
                </li>
                <li>
                  <a href='/'>IV</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/something">Contact Us</a>
            </li>
            {logoutBtn}
          </ul>
        </nav>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  console.log("dispatch");
  console.log(dispatch);
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Landing));

