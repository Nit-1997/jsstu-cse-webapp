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
      // "baseUrl": 'https://jssstu-cs.herokuapp.com',
      "baseUrl": "http://localhost:4000",
      "adding": false
    }
  }

  getPublications = () => {
    axios.get(this.state.baseUrl + '/publication')
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
    axios.post(this.state.baseUrl + '/publication/add', data)
      .then(publication => {
        this.getPublications();
        this.addPublish();
      })
  }

  publishEdit = (data, id) => {
    console.log(data, id)
    axios.post(this.state.baseUrl + '/publication/edit/'+id, data)
    .then(publication => {
      console.log('editing')
      this.getPublications();
    })
  }

  addPublish = () => {
    this.setState({adding: !this.state.adding})
  }


  render() {
    console.log(this.props.user)
    return (
      <div>
        <Navbar loggedIn={this.props.loggedIn} />
        <div className="container mt">
            <div className="mt-4">
                <button onClick={this.addPublish} className="btn btn-custom text-center float-right"><i className="fa fa-plus" id="plus"></i></button>
            </div>
            <div className="clearfix"></div>
            {this.state.adding && (<Form publish={this.publish} user={this.props.user}/>)}
        </div>
        <Cardlist user={this.props.user} publications={this.state.cards} removeCard={this.removeCard} publishEdit={this.publishEdit}/>
        <Footer />
      </div>
    )
  }
}