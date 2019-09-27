import React, { Component } from 'react';
import {Container,Button} from 'react-bootstrap';
import {Route,Switch} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Cookies from 'universal-cookie';


class App extends Component {
 constructor() {
    super()
    this.state = {
      
    }
  }

  componentDidMount() {
    
  }

  componentDidUpdate(){
   
  }


  render() {
    return (
       <div>
         <header>
           <Switch>
              <Route path="/" exact render={() => <h1>Welcome to jsstu cs dept website</h1>}/> 
           </Switch>
         </header>
       </div>
    );
  }
}

export default withRouter(App);
