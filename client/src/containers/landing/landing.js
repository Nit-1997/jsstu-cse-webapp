import React, { Fragment, Component } from "react";
import { Link } from 'react-router-dom';
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
    this.props.history.push({
      pathname: "/logout"
    })
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
      if(this.props.user.username==='jsscsdeptwebsite@gmail.com'){
        logoutBtn = (
        <Fragment>
          <li>
            <Link to="/dashboard" onClick={this.dashboard}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/logout" onClick={this.logout}>
              Logout
            </Link>
          </li>
          <li>
            <Link to="/signup" onClick={this.signup}>
              Add Faculty
            </Link>
          </li>
        </Fragment>
      ); 
      }else{
        logoutBtn = (
        <Fragment>
          <li>
            <Link to="/dashboard" onClick={this.dashboard}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/logout" onClick={this.logout}>
              Logout
            </Link>
          </li>
        </Fragment>
      );
      }
    } else {
      logoutBtn = (
        <Fragment>
          <li>
            <Link to="/login" onClick={this.login}>
              Login
            </Link>
          </li>
        </Fragment>
      );
    }
    return (
      <div className="app">
        <header id="header" className="fixed-top">
          <div className="px-4">
            <div className="logo float-left">
              <Link to="/" className="scrollto">
                <img
                  src={require("../../views/img/jss_logo.png")}
                  alt="logo"
                  className="img-fluid d-block"
                />
              </Link>
            </div>

            <nav className="main-nav float-right d-none d-lg-block">
              <ul>
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href={"#about"}>About Us</a>
                </li>
                <li>
                  <a href={"#services"}>Facilities</a>
                </li>
                <li>
                  <a href={"#testimonials"}>Student Acheivements</a>
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
                  <a href="#contact">Contact Us</a>
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
              <Link to="/">Home</Link>
            </li>

            <li>
              <a href={"#about"}>About Us</a>
            </li>
            <li>
              <a href={"#services"}>Facilities</a>
            </li>
            <li>
              <a href={"#testimonials"}>Student Acheivements</a>
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
              <a href={"#contact"}>Contact Us</a>
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

