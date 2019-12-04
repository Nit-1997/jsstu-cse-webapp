import React, { Component } from 'react'
import "../awards/form.css"


export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      author: "",
      link: "",
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
    this.props.research(this.state)
    this.setState({ title: '', author: '', link: '', date: '' })
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
                  <input type="text" name="title" value={this.state.title} placeholder="Enter Publication Title" id="title" onChange={this.myChangeHandler} required></input>
                  <label htmlFor="author">Author</label>
                  <input type="text" name="author" value={this.state.author} placeholder="Enter Author's name" id="author" onChange={this.myChangeHandler} required></input>
                  <label htmlFor="link">Link</label>
                  <input type="text" name="link" value={this.state.link} placeholder="Enter Publication Link" id="link" onChange={this.myChangeHandler} required></input>
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