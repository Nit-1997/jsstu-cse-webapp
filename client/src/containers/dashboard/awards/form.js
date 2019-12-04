import React, { Component } from 'react'
import "./form.css"


export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      date: "",
      user: this.props.user._id
    }
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.props.award(this.state)
    this.setState({ title: '', date: '' })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 wow slideInLeft col-sm-12 m-auto">
            <div className="card">
              <div className="card-body">
                <form className="dashboard-form" onSubmit={this.mySubmitHandler}>
                  <label htmlFor="title">Title</label>
                  <input type="text" name="title" value={this.state.title} placeholder="Enter Award Title" id="title" onChange={this.myChangeHandler} required></input>
                  <label htmlFor="date">Date</label>
                  <input type="date" name="date" value={this.state.date} id="date" onChange={this.myChangeHandler} required></input>
                  <div className=".form-group text-center">
                    <button type="submit" className="btn btn-success">&emsp;Submit&emsp;</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    )
  }
}