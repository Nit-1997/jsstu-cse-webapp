import React, { Component } from 'react'
import axios from 'axios'
// import { formData } from "../../formData"
import Card from "./card"
import "./form.css"

export default class Cardlist extends Component {

    render() {
        return (
            <section className="cardList">
                {
                    this.props.publications.map(card => (
                        <Card key={card.id} card={card} removeCard={this.props.removeCard} publishEdit={this.props.publishEdit}></Card>
                    )
                    )
                }

            </section>
        );
    }
}