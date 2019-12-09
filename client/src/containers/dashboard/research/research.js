import React, { Component } from 'react'
import "../awards/form.css"
// import Cardlist from "./cardList"
import Form from "./form"

import Footer from '../../landing/Footer'
import Spinner from '../../spinner/Spinners'
import Card from './card'
import axios from 'axios'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      research: {},
      "baseUrl": 'https://jssstu-cs.herokuapp.com',
      // "baseUrl": "http://localhost:4000",
      "adding": false,
      loader: false
    }
  }

  getResearchs = () => {
    axios.get(this.state.baseUrl + '/research/' + this.props.user._id)
      .then(researchs => {
        this.setState({ cards: researchs.data })
      })
  }

  componentDidMount() {
    this.isLoading();
    axios.get(this.state.baseUrl + '/research/' + this.props.user._id)
      .then(researchs => {
        this.setState({ cards: researchs.data })
        this.isLoading();
      })
  }


  removeCard = id => {
    this.isLoading();
    axios.post(this.state.baseUrl + '/research/delete/' + id)
      .then(research => {
        this.getResearchs();
        this.isLoading();
      })
  }


  research = (data) => {
    this.addResearch();
    this.isLoading();
    axios.post(this.state.baseUrl + '/research/add', data)
      .then(research => {
        this.getResearchs();
        this.isLoading();
      })
  }

  researchEdit = (data, id) => {
    // console.log(data, id)
    this.isLoading();
    axios.post(this.state.baseUrl + '/research/edit/' + id, data)
      .then(research => {
        console.log('editing')
        // this.getResearchs();
        this.componentDidMount();
        this.isLoading();
      })
  }

  addResearch = () => {
    this.setState({ adding: !this.state.adding })
  }

  isLoading = () => {
    this.setState({ loader: !this.state.loader })
  }

  addBtn = () => {
    return (!this.state.loader && (this.state.adding ? <a href="#2" onClick={this.addResearch}> <i id="close" className="material-icons md-48">
      cancel
    </i></a> : <a href="#2" onClick={this.addResearch}> <i className="material-icons md-48">
        add_circle
  </i></a>))
  }


  render() {
    // console.log(this.props.user)
    if (this.state.loader) {
      return (
        <div>
          
          <div style={{ "marginTop": "100px" }}>
            <Spinner />
          </div>
          <Footer />
        </div>
      )
    }
    return (
      <div>
        
        <div className="container mt mb-4">
          <div className="mt-4 text-center">
            {this.addBtn()}
          </div>
          {this.state.adding && (<Form research={this.research} user={this.props.user} />)}
        </div>
        {
          this.state.cards.map(card => (
            <Card key={card._id} card={card} user={this.props.user} removeCard={this.removeCard} researchEdit={this.researchEdit}></Card>
          ))
        }
        <Footer />
      </div>
    )
  }
}