import React, { Component } from "react";
import Card from "./card";
import Spinner from "../../spinner/Spinners";
import "./form.css";

export default class Cardlist extends Component {
  render() {
    if (this.props.loader) return <Spinner />;
    return (
      <section className="cardList">
        {this.props.publications.map(card => (
          <Card
            key={card._id}
            card={card}
            user={this.props.user}
            removeCard={this.props.removeCard}
            publishEdit={this.props.publishEdit}
          ></Card>
        ))}
      </section>
    );
  }
}
