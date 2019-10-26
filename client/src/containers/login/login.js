import React,{Component} from "react";
import './login.css';
// import {NavLink} from 'react-router-dom';
// import {Form,Button} from 'react-bootstrap';
import {Toast,Spinner} from 'react-bootstrap';
// import axios from '../../axios';
import ErrorImg from '../../assets/error.png';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Navbar from '../landing/landing';
import Footer from '../landing/Footer';

class Login extends Component {
 constructor() {
    super();
    this.state = {
        username:'',
        password:'',
        show:false
   }
  }

  onChange = (e) => {
      this.setState({[e.target.id]:e.target.value},()=>{
        console.log(this.state);
      })
  }

  onSubmitHandler = (e) =>{
     e.preventDefault();
    const formData = {
       username:this.state.username,
       password:this.state.password
    }
    this.props.onLogin(formData);
    if(this.props.user){
      // this.props.history.push({
      //         pathname: '/'
      // });
    }
  }

  onForgotPasswordHandler = () => {
    console.log("Forgot password");
  }

  render() {
    let baseComp;
    if(this.props.loading){
       baseComp = (
          <div style={{textAlign:'center'}}>
                   <Spinner  style={{'height':'100px','width':'100px'}} animation="border"/>         
           </div>
        ) 
    }else{
      baseComp = (
         <form onSubmit={this.onSubmitHandler}>
                        <div className="form-label-group">
                          <input onChange={this.onChange} type="email" id="username" className="form-control" placeholder="Email address" required autoFocus/>
                          <label htmlFor="username">Email address</label>
                        </div>

                        <div className="form-label-group">
                          <input onChange={this.onChange} type="password" id="password" className="form-control" placeholder="Password" required/>
                          <label htmlFor="password">Password</label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                        <div className="text-center">
                          <a style={{'color':'black'}} className="small" href='{this.onForgotPasswordHandler}'>Forgot password?</a>
                        </div>
         </form>
      )
    }
    return (
      <div>
      <Navbar/>
       <Toast
        onClose={() => this.setState({show:false})}
        show={this.state.show} delay={4000} autohide
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
          <Toast.Header>
              <img src={ErrorImg} className="rounded mr-2 toastImg" alt="" />
              <strong className="mr-auto">Invalid details</strong>
              <small>just now</small>
          </Toast.Header>

          <Toast.Body>
             username or password is incorrect
          </Toast.Body>
      </Toast>
      <div className="container-fluid commHeader">
          <div className="row no-gutter">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">Sign In</h3>
                        {baseComp}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
       <Footer/>
      </div>
  );
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onLogin:(formData) => dispatch(actions.login(formData))
  }
}
const mapStateToProps = state =>{
    return{
     loading:state.auth.loading,
     error:state.auth.error,
     user:state.auth.user
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);


