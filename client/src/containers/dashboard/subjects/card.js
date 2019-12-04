import React, { Component } from "react";
import "../awards/form.css"
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet
} from "@react-pdf/renderer";

export default class Card extends Component {
  constructor(props) {
    super(props);
    const { title, code, year, section } = this.props.card;
    this.state = {
      title: title,
      code: code,
      year: year,
      section: section,
      user: this.props.user._id,
      isediting: false
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }

  componentDidMount() {

  }

  editsubject = () => {
    this.setState({ isediting: !this.state.isediting });
  };

  printApiHandler = id => {
    console.log("print");
  };

  mySubmitHandler = event => {
    event.preventDefault();
    this.props.subjectEdit(this.state, this.props.card._id);
    this.editsubject();
  };

  myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
    // console.log(this.state, this.props);
  };

  editing = () => {
    return (<div className="container">
      <div className="row">
        <div className="col-md-8 wow slideInLeft mt m-auto">
          <div className="card mt-2">
            <div className="card-body">
              <form className="dashboard-form" onSubmit={this.mySubmitHandler}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={this.state.title} placeholder="Enter Subject Title" id="title" onChange={this.myChangeHandler} required></input>
                <label htmlFor="code">Subject Code</label>
                <input type="text" placeholder="Enter Subject Code" name="code" value={this.state.code} id="code" onChange={this.myChangeHandler} required></input>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Year</label>
                  </div>
                  <select name="year" onChange={this.myChangeHandler} defaultValue={this.state.year} className="custom-select" id="inputGroupSelect01">
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
                  <select name="section" onChange={this.myChangeHandler} defaultValue={this.state.section} className="custom-select" id="inputGroupSelect01">
                    <option value="0" disabled>Choose...</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-success">submit</button>
                  <button onClick={this.editsubject} className="btn btn-warning">cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };

  notEditing = () => {
    const { _id, title, code, year, section } = this.props.card;
    const { removeCard } = this.props;
    // console.log(this.props.user, this.props.card)

    const docStyles = StyleSheet.create({
      page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4"
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
      }
    });

    // Create Document Component
    const PubDoc = () => (
      <Document>
        <Page size="A4" style={docStyles.page}>
          <View style={docStyles.section}>
            <Text> Subject Title: {title}</Text>
            <Text> Subject Code: {code}</Text>
            <Text> Year: {year}</Text>
            <Text> Section: {section}</Text>
          </View>
        </Page>
      </Document>
    );

    return (
      <section className="container mt-4">
        <div className="row">
          <div className="col-md-12 wow slideInLeft">
            <div className="card">
              <div className="card-body">
                <h5 className="text-center dashboard-title">{title} {code}</h5>
                <p className="text-center">Year: {year} Section: {section}</p>

                <div className="mt-4 text-center">
                  <button
                    href="#2"
                    className="btn btn-outline-warning"
                    onClick={() => this.printApiHandler(_id)}
                  >
                    <i className="fas fa-print"></i>&emsp;
                    <PDFDownloadLink
                      document={PubDoc()}
                      fileName="subjects.pdf"
                    >
                      {({ blob, url, loading, error }) =>
                        loading ? "Loading pdf" : "Print PDF"
                      }
                    </PDFDownloadLink>
                    &emsp;
                  </button>
                  <button
                    href="#1"
                    className="btn btn-outline-info"
                    onClick={() => this.editsubject(_id)}
                  >
                    <i className="fa fa-pencil"></i>&emsp;Edit&emsp;
                  </button>
                  <button
                    href="#3"
                    className="btn btn-outline-danger"
                    onClick={() => removeCard(_id)}
                  >
                    <i className="fa fa-trash"></i>&emsp;Delete&emsp;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  render() {
    return this.state.isediting ? this.editing() : this.notEditing();
  }
}
