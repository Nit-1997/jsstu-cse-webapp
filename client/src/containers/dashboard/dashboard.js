import React, { Component } from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import "./dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className="Dashboard">
        <div class="container">
          <div class="jumbotron well">
            <div class="row">
              <div class="col-md-4">
                <img
                  src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                  alt=""
                  class="rounded-circle img-fluid mx-auto d-block"
                />
              </div>
              <div class="col-md-8">
                <h2>Jane Doe</h2>
                <p>
                  <strong>About: </strong>Associate Professor
                </p>
                <p>
                  <strong>Subjects Handled: </strong>
                  <span class="tags">CS330</span>{" "}
                  <span class="tags">CS520</span>{" "}
                  <span class="tags">CS540</span>{" "}
                  <span class="tags">CS710</span>{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="card-columns">
            <div class="card bg-info">
              <div class="card-body text-center">
                <i class="fas fa-pen-alt card-img-top"></i>
                <p class="card-text">Publications</p>
              </div>
            </div>
            <div class="card bg-info">
              <div class="card-body text-center">
                <i class="fas fa-search card-img-top"></i>
                <p class="card-text">Research Projects</p>
              </div>
            </div>
            <div class="card bg-info">
              <div class="card-body text-center">
                <i class="fas fa-award card-img-top"></i>
                <p class="card-text">Achievments & Awards</p>
              </div>
            </div>
            <div class="card bg-info">
              <div class="card-body text-center">
                <i class="fas fa-chalkboard-teacher card-img-top"></i>
                <p class="card-text">Subjects Handled</p>
              </div>
            </div>
            <div class="card bg-info">
              <div class="card-body text-center">
                <i class="fas fa-chalkboard card-img-top"></i>
                <p class="card-text">Trainings & Workshops Conducted</p>
              </div>
            </div>
            <div class="card bg-info">
              <div class="card-body text-center">
                <i class="fas fa-school card-img-top"></i>
                <p class="card-text">Trainings & Workshops Attended</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  console.log("dispatch");
  console.log(dispatch);
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Dashboard));
