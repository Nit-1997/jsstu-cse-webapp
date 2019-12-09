import React, { Component } from 'react'
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
      training: {},
      "baseUrl": 'https://jssstu-cs.herokuapp.com',
      // "baseUrl": "http://localhost:4000",
      "adding": false,
      loader: false
    }
  }

  getTrainings = () => {
    axios.get(this.state.baseUrl + '/training/' + this.props.user._id)
      .then(trainings => {
        this.setState({ cards: trainings.data })
      })
  }

  componentDidMount() {
    this.isLoading();
    axios.get(this.state.baseUrl + '/training/' + this.props.user._id)
      .then(trainings => {
        this.setState({ cards: trainings.data })
        this.isLoading();
      })
  }


  removeCard = id => {
    this.isLoading();
    axios.post(this.state.baseUrl + '/training/delete/' + id)
      .then(training => {
        this.getTrainings();
        this.isLoading();
      })
  }


  training = (data) => {
    this.addTraining();
    this.isLoading();
    axios.post(this.state.baseUrl + '/training/add', data)
      .then(training => {
        this.getTrainings();
        this.isLoading();
      })
  }

  trainingEdit = (data, id) => {
    // console.log(data, id)
    this.isLoading();
    axios.post(this.state.baseUrl + '/training/edit/' + id, data)
      .then(training => {
        console.log('editing')
        // this.getTrainings();
        this.componentDidMount();
        this.isLoading();
      })
  }

  addTraining = () => {
    this.setState({ adding: !this.state.adding })
  }

  isLoading = () => {
    this.setState({ loader: !this.state.loader })
  }

  addBtn = () => {
    return (!this.state.loader && (this.state.adding ? <a href="#2" onClick={this.addTraining}> <i id="close" className="material-icons md-48">
      cancel
    </i></a> : <a href="#2" onClick={this.addTraining}> <i className="material-icons md-48">
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
          {this.state.adding && (<Form training={this.training} user={this.props.user} />)}
        </div>
        {
          this.state.cards.map(card => (
            <Card key={card._id} card={card} user={this.props.user} removeCard={this.removeCard} trainingEdit={this.trainingEdit}></Card>
          ))
        }
        <Footer />
      </div>
    )
  }
}