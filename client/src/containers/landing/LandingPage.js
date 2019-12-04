import React, { Component } from 'react'
import Navbar from './landing';
import Body from './Body';
import Footer from './Footer';

class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar loggedIn={this.props.loggedIn} />
                <Body loggedIn={this.props.loggedIn} />
                <Footer />
            </div>
        )
    }
}

export default Landing
