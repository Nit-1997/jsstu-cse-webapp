import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import { withRouter } from 'react-router-dom';
import Signup from "./containers/signup/signup";
import Login from "./containers/login/login";
import Landing from "./containers/landing/LandingPage";
import Dashboard from "./containers/dashboard/dashboard";

import Publication from "./containers/dashboard/publication/publication";
import Research from "./containers/dashboard/research/research";
import Awards from "./containers/dashboard/awards/Awards";
import Training from "./containers/dashboard/trainingCon/Training";
import Subject from "./containers/dashboard/subjects/Subject";
import Faculty from "./containers/faculty/faculty";

import { connect } from "react-redux";
import * as actions from "./store/actions/index";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.onTryAutoSignIn();
  }

  componentDidUpdate() {}

  render() {
    let routes;
    if (this.props.loggedIn) {
      routes = (
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Landing loggedIn={this.props.loggedIn} />}
          />
          <Route
            path="/dashboard" exact
            render={() => <Dashboard loggedIn={this.props.loggedIn} user={this.props.user} />}
          />
          <Route path="/dashboard/publications" render={() => <Publication loggedIn={this.props.loggedIn} user={this.props.user} />}
          />
          <Route path="/dashboard/researchs" render={() => <Research loggedIn={this.props.loggedIn} user={this.props.user} />}
          />
          <Route path="/dashboard/awards" render={() => <Awards loggedIn={this.props.loggedIn} user={this.props.user} />}
          />
          <Route path="/dashboard/training" render={() => <Training loggedIn={this.props.loggedIn} user={this.props.user} />}
          />
          <Route path="/dashboard/subject" render={() => <Subject loggedIn={this.props.loggedIn} user={this.props.user} />}
          />
          <Route path="/faculty" render={() => <Faculty />} />
          <Redirect to="/" />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Landing loggedIn={this.props.loggedIn} />}
          />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/faculty" render={() => <Faculty />} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div>
        <header>{routes}</header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actions.authCheckState())
  };
};

const mapStateToProps = state => {
  if (state.user === null) {
    console.log("no user is present in session");
  } else {
    return {
      user: state.auth.user,
      loggedIn: state.auth.loggedIn,
      token: state.auth.token
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
