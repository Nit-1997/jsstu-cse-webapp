import React, { Component } from 'react'
import "./form.css"
// import Cardlist from "./cardList"
import Form from "./form"
import Navbar from '../../landing/landing'
import Footer from '../../landing/Footer'
import Spinner from '../../spinner/Spinners'
import Card from './card'
import axios from 'axios'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      award: {},
      "baseUrl": 'https://jssstu-cs.herokuapp.com',
      // "baseUrl": "http://localhost:4000",
      "adding": false,
      loader: false
    }
  }

  getAwards = () => {
    axios.get(this.state.baseUrl + '/award/' + this.props.user._id)
      .then(awards => {
        this.setState({ cards: awards.data })
      })
  }

  componentDidMount() {
    this.isLoading();
    axios.get(this.state.baseUrl + '/award/' + this.props.user._id)
      .then(awards => {
        this.setState({ cards: awards.data })
        this.isLoading();
      })
  }


  removeCard = id => {
    this.isLoading();
    axios.post(this.state.baseUrl + '/award/delete/' + id)
      .then(award => {
        this.getAwards();
        this.isLoading();
      })
  }


  award = (data) => {
    this.addAward();
    this.isLoading();
    axios.post(this.state.baseUrl + '/award/add', data)
      .then(award => {
        this.getAwards();
        this.isLoading();
      })
  }

  awardEdit = (data, id) => {
    // console.log(data, id)
    this.isLoading();
    axios.post(this.state.baseUrl + '/award/edit/' + id, data)
      .then(award => {
        console.log('editing')
        // this.getAwards();
        this.componentDidMount();
        this.isLoading();
      })
  }

  addAward = () => {
    this.setState({ adding: !this.state.adding })
  }

  isLoading = () => {
    this.setState({ loader: !this.state.loader })
  }

  addBtn = () => {
    return (!this.state.loader && (this.state.adding ? <a href="#2" onClick={this.addAward}> <i id="close" className="material-icons md-48">
      cancel
    </i></a> : <a href="#2" onClick={this.addAward}> <i className="material-icons md-48">
        add_circle
  </i></a>))
  }


  render() {
    // console.log(this.props.user)
    if (this.state.loader) {
      return (
        <div>
          <Navbar loggedIn={this.props.loggedIn} />
          <div style={{ "marginTop": "100px" }}>
            <Spinner />
          </div>
          <Footer />
        </div>
      )
    }
    return (
      <div>
        <Navbar loggedIn={this.props.loggedIn} />
        <div className="container mt mb-4">
          <div className="mt-4 text-center">
            {this.addBtn()}
          </div>
          {this.state.adding && (<Form award={this.award} user={this.props.user} />)}
        </div>
        {
          this.state.cards.map(card => (
            <Card key={card._id} card={card} user={this.props.user} removeCard={this.removeCard} awardEdit={this.awardEdit}></Card>
          ))
        }
        <Footer />
      </div>
    )
  }
}