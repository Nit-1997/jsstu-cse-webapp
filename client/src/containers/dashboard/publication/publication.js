import React, { Component } from 'react'
import "./form.css"
import Cardlist from "./cardList"
import Form from "./form"
import Navbar from '../../landing/landing'
import Footer from '../../landing/Footer'
import axios from 'axios'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      publication: {},
      "baseUrl": 'https://jssstu-cs.herokuapp.com',
      // "baseUrl": "http://localhost:4000",
      "adding": false
    }
  }

  getPublications = () => {
    axios.get(this.state.baseUrl + '/publication/' + this.props.user._id)
      .then(publications => {
        this.setState({ cards: publications.data })
      })
  }

  componentDidMount() {
    this.getPublications();
  }


  removeCard = id => {
    axios.post(this.state.baseUrl + '/publication/delete/' + id)
      .then(publication => {
        this.getPublications();
      })
  }


  publish = (data) => {
    this.addPublish();
    axios.post(this.state.baseUrl + '/publication/add', data)
      .then(publication => {
        this.getPublications();
      })
  }

  publishEdit = (data, id) => {
    console.log(data, id)
    axios.post(this.state.baseUrl + '/publication/edit/' + id, data)
      .then(publication => {
        console.log('editing')
        this.getPublications();
      })
  }

  addPublish = () => {
    this.setState({ adding: !this.state.adding })
  }

  addBtn = () => {
    return (this.state.adding ? <a href="#2" onClick={this.addPublish}> <i className="material-icons md-48">
    cancel
    </i></a> : <a href="#2" onClick={this.addPublish}> <i className="material-icons md-48">
        add_circle
  </i></a>)
  }


  render() {
    // console.log(this.props.user)
    return (
      <div>
        <Navbar loggedIn={this.props.loggedIn} />
        <div className="container mt mb-4">
          <div className="mt-4 text-center">
            {this.addBtn()}
          </div>
          {this.state.adding && (<Form publish={this.publish} user={this.props.user} />)}
        </div>
        <Cardlist user={this.props.user} publications={this.state.cards} removeCard={this.removeCard} publishEdit={this.publishEdit} />
        <Footer />
      </div>
    )
  }
}