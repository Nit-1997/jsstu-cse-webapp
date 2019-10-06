import React, { Component } from "react";
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

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    let logoutBtn;
    if (this.props.loggedIn) {
      logoutBtn = (
        <div>
          <button className="btn btn-lg" onClick={this.dashboard}>
            Dashboard
          </button>
          <br />
          <br />
          <button className="btn btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>
      );
    } else {
      logoutBtn = (
        <div>
          <button className="btn btn-lg" onClick={this.login}>
            Login
          </button>
          <br />
          <br />
          <button className="btn btn-lg" onClick={this.signup}>
            Sign Up
          </button>
        </div>
      );
    }
    return (
      <div>
        <h1>Landing Page </h1>
        {logoutBtn}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  console.log('dispatch');
  console.log(dispatch);
  return{
    onLogout: ()=>dispatch(actions.logout())
  }
}

export default connect(null,mapDispatchToProps)(withRouter(Landing));