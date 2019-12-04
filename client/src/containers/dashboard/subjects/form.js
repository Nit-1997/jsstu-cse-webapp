import React, { Component } from 'react'
import "../awards/form.css"


export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      code: "",
      year: "",
      section: "",
      user: this.props.user._id,
      reqError: false
    }
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
    // console.log(this.state);
  }

  mySubmitHandler = (event) => {
    event.preventDefault()
    if (this.state.year !== "" && this.state.section !== "") {
      this.props.subject(this.state)
      this.setState({ title: '', date: '' })
    } else {
      this.setState({ reqError: true });
      setTimeout(() => {
        this.setState({ reqError: false })
      }, 3000);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 wow slideInLeft col-sm-12 m-auto">
            <div className="card">
              <div className="card-body">
                {
                  this.state.reqError ? <div class="alert alert-warning" role="alert">
                    Please Fill all Fields Properly!
              </div> : ""
                }

                <form className="dashboard-form" onSubmit={this.mySubmitHandler}>
                  <label htmlFor="title">Title</label>
                  <input type="text" name="title" value={this.state.title} placeholder="Enter Subject Title" id="title" onChange={this.myChangeHandler} required></input>
                  <label htmlFor="code">Subject Code</label>
                  <input type="text" placeholder="Enter Subject Code" name="code" value={this.state.code} id="code" onChange={this.myChangeHandler} required></input>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text" htmlFor="inputGroupSelect01">Year</label>
                    </div>
                    <select name="year" onChange={this.myChangeHandler} defaultValue="0" className="custom-select" id="inputGroupSelect01">
                      <option value="0" disabled>Choose...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text" htmlFor="inputGroupSelect02">Section</label>
                    </div>
                    <select name="section" onChange={this.myChangeHandler} defaultValue="0" className="custom-select" id="inputGroupSelect02">
                      <option value="0" disabled>Choose...</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                    </select>
                  </div>
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