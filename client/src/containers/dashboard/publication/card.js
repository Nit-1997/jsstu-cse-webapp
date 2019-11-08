import React, { Component } from 'react'
import "./form.css"
import moment from 'moment'
export default class Card extends Component {

  constructor(props) {
    super(props)
    const { title, author, link, date } = this.props.card;
    this.state = {
      title: title,
      author: author,
      link: link,
      date: date,
      isediting: false
    }
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }

  editpublication = () => {
    this.setState({ isediting: !this.state.isediting })
  }


  printApiHandler = (id) => {
    console.log('print');
  }

  mySubmitHandler = (event)=> {
    event.preventDefault();
    console.log(this.state)
    this.props.publishEdit(this.state, this.props.card._id);
    this.editpublication()
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
    console.log(this.state, this.props)
  }

  editing = () => {
    const { _id } = this.props.card;
    return (<div className="container">
      <div className="row">
        <div className="col-md-8 mt m-auto">
          <form className="publication-form" onSubmit={this.mySubmitHandler}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={this.state.title} placeholder="Enter Publication Title" id="title" onChange={this.myChangeHandler} required></input>
            <label htmlFor="author">Author</label>
            <input type="text" name="author" value={this.state.author} placeholder="Enter Author's name" id="author" onChange={this.myChangeHandler} required></input>
            <label htmlFor="link">Link</label>
            <input type="text" name="link" value={this.state.link} placeholder="Enter Publication Link" id="link" onChange={this.myChangeHandler} required></input>
            <label htmlFor="date">Date</label>
            <input type="date" name="date" value={this.state.date} id="date" onChange={this.myChangeHandler} required></input>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-success">submit</button>
              <button onClick={this.editpublication} className="btn btn-warning">cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>)
  }

  notEditing = () => {
    const { _id, title, author, link, date } = this.props.card;
    const { removeCard } = this.props;
    return (<section className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="text-center publication-title">{title}</h5>
              <p className="text-center text-muted">{moment(date).format("DD/MM/YYYY")}</p>
              <div className="text-center">
                <a href={link} className="text-center">{link}</a>
              </div>
              <div className="mr-4 mt-6">
                <button href="#1" className="btn btn-outline-info" onClick={() => this.editpublication(_id)}><i className="fa fa-pencil"></i>&emsp;Edit</button>
                <button href="#2" className="btn btn-outline-warning" onClick={() => this.printApiHandler(_id)}><i className="fas fa-print"></i>&emsp;Print Pdf</button>
                <button href="#3" className="btn btn-outline-danger" onClick={() => removeCard(_id)}><i className="fa fa-trash"></i>&emsp;Delete</button>
              </div>
            </div>
            <div className="card-footer">
              <h5 className="text-right"> Author: {author}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>);
  }

  render() {
    return (
      this.state.isediting ? this.editing() : this.notEditing()
    )
  }
}