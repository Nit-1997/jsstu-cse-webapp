import React, { Component } from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./dashboard.css";
import Navbar from "../landing/landing";
import Footer from "../landing/Footer";


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
      <div className="Dashboard  mt-2">
      <Navbar loggedIn={this.props.loggedIn}/>
        <div className="container mt-4">
          <div className="box well">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={this.props.user.image}
                  alt=""
                  className="img-fluid mx-auto d-block rounded-circle"
                />
              </div>
              <div className="col-md-8">
                <h2>{this.props.user.name}</h2>
                <p>
                  <strong>About: </strong>
                  {this.props.user.designation.split("_").join(" ")}
                </p>
                <p>
                  <strong>Subjects Handled: </strong>
                  <span className="tags">CS330</span>{" "}
                  <span className="tags">CS520</span>{" "}
                  <span className="tags">CS540</span>{" "}
                  <span className="tags">CS710</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <section id="dashboard" className="section-bg">
            <div className="row">
              <div className="col-md-6 col-lg-5 offset-lg-1">
                <div className="box">
                  <div className="icon">
                    <i className="fa fa-pencil card-img-top"></i>
                  </div>
                  <h4 className="title">
                    <a href={this.onDummyHandler}>Publications</a>
                  </h4>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="box">
                  <div className="icon">
                    <i className="fas fa-search card-img-top"></i>
                  </div>
                  <h4 className="title">
                    <a href={this.onDummyHandler}>Research Projects</a>
                  </h4>
                </div>
              </div>

              <div className="col-md-6 col-lg-5 offset-lg-1">
                <div className="box">
                  <div className="icon">
                  <i className="fa fa-trophy " aria-hidden="true"></i>                  </div>
                  <h4 className="title">
                    <a href={this.onDummyHandler}>Achievments & Awards</a>
                  </h4>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="box">
                  <div className="icon">
                    <i className="fas fa-chalkboard-teacher card-img-top"></i>
                  </div>
                  <h4 className="title">
                    <a href={this.onDummyHandler}>Subjects Handled</a>
                  </h4>
                </div>
              </div>

              <div className="col-md-6 col-lg-5 offset-lg-1">
                <div className="box">
                  <div className="icon">
                    <i className="fas fa-chalkboard card-img-top"></i>
                  </div>
                  <h4 className="title">
                    <a href={this.onDummyHandler}>
                      Trainings & Workshops Conducted
                    </a>
                  </h4>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="box">
                  <div className="icon">
                    <i className="fas fa-school card-img-top"></i>
                  </div>
                  <h4 className="title">
                    <a href={this.onDummyHandler}>
                      Trainings & Workshops Attended
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default (withRouter(Dashboard));
