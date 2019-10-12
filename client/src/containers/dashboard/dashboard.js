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

  onDummyHandler = () => {
    console.log("Card Clicked");
  };

  render() {
    return (
      <div className="Dashboard">
        <div class="container">
          <div class="box well">
            <div class="row">
              <div class="col-md-4">
                <img
                  src={this.props.user.image}
                  alt=""
                  class="img-fluid mx-auto d-block rounded-circle"
                />
              </div>
              <div class="col-md-8">
                <h2>{this.props.user.name}</h2>
                <p>
                  <strong>About: </strong>
                  {this.props.user.designation.split("_").join(" ")}
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
          <section id="services" class="section-bg">
            <div class="row">
              <div class="col-md-6 col-lg-5 offset-lg-1">
                <div class="box">
                  <div class="icon">
                    <i class="fas fa-pen-alt card-img-top"></i>
                  </div>
                  <h4 class="title">
                    <a href={this.onDummyHandler}>Publications</a>
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-5">
                <div class="box">
                  <div class="icon">
                    <i class="fas fa-search card-img-top"></i>
                  </div>
                  <h4 class="title">
                    <a href={this.onDummyHandler}>Research Projects</a>
                  </h4>
                </div>
              </div>

              <div class="col-md-6 col-lg-5 offset-lg-1">
                <div class="box">
                  <div class="icon">
                    <i class="fas fa-award card-img-top"></i>
                  </div>
                  <h4 class="title">
                    <a href={this.onDummyHandler}>Achievments & Awards</a>
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-5">
                <div class="box">
                  <div class="icon">
                    <i class="fas fa-chalkboard-teacher card-img-top"></i>
                  </div>
                  <h4 class="title">
                    <a href={this.onDummyHandler}>Subjects Handled</a>
                  </h4>
                </div>
              </div>

              <div class="col-md-6 col-lg-5 offset-lg-1">
                <div class="box">
                  <div class="icon">
                    <i class="fas fa-chalkboard card-img-top"></i>
                  </div>
                  <h4 class="title">
                    <a href={this.onDummyHandler}>
                      Trainings & Workshops Conducted
                    </a>
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-5">
                <div class="box">
                  <div class="icon">
                    <i class="fas fa-school card-img-top"></i>
                  </div>
                  <h4 class="title">
                    <a href={this.onDummyHandler}>
                      Trainings & Workshops Attended
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  console.log("dispatch");
  console.log(dispatch);
  return {
    onTryAutoSignIn: () => dispatch(actions.authCheckState()),
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Dashboard));
