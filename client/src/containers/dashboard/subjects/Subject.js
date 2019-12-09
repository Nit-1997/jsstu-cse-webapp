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
      subject: {},
      "baseUrl": 'https://jssstu-cs.herokuapp.com',
      // "baseUrl": "http://localhost:4000",
      "adding": false,
      loader: false
    }
  }

  getSubjects = () => {
    axios.get(this.state.baseUrl + '/subject/' + this.props.user._id)
      .then(subjects => {
        this.setState({ cards: subjects.data })
      })
  }

  componentDidMount() {
    this.isLoading();
    axios.get(this.state.baseUrl + '/subject/' + this.props.user._id)
      .then(subjects => {
        this.setState({ cards: subjects.data })
        this.isLoading();
      })
  }


  removeCard = id => {
    this.isLoading();
    axios.post(this.state.baseUrl + '/subject/delete/' + id)
      .then(subject => {
        this.getSubjects();
        this.isLoading();
      })
  }


  subject = (data) => {
    this.addSubject();
    this.isLoading();
    axios.post(this.state.baseUrl + '/subject/add', data)
      .then(subject => {
        this.getSubjects();
        this.isLoading();
      })
  }

  subjectEdit = (data, id) => {
    // console.log(data, id)
    this.isLoading();
    axios.post(this.state.baseUrl + '/subject/edit/' + id, data)
      .then(subject => {
        console.log('editing')
        // this.getSubjects();
        this.componentDidMount();
        this.isLoading();
      })
  }

  addSubject = () => {
    this.setState({ adding: !this.state.adding })
  }

  isLoading = () => {
    this.setState({ loader: !this.state.loader })
  }

  addBtn = () => {
    return (!this.state.loader && (this.state.adding ? <a href="#2" onClick={this.addSubject}> <i id="close" className="material-icons md-48">
      cancel
    </i></a> : <a href="#2" onClick={this.addSubject}> <i className="material-icons md-48">
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
          {this.state.adding && (<Form subject={this.subject} user={this.props.user} />)}
        </div>
        {
          this.state.cards.map(card => (
            <Card key={card._id} card={card} user={this.props.user} removeCard={this.removeCard} subjectEdit={this.subjectEdit}></Card>
          ))
        }
        <Footer />
      </div>
    )
  }
}