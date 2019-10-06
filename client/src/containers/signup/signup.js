import React,{ Component } from "react";
import './signup.css';
// import  { Redirect } from 'react-router-dom'
// import {Form,Button} from 'react-bootstrap';
import {Toast,Spinner} from 'react-bootstrap';
import ErrorImg from '../../assets/error.png';
// import axios from 'axios';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
        email:'',
        name:'',
        password:'',
        confirm:'',
        image:'',
        designation:'',
        mode:'',
        show:false
   }
  }
  
  onChangeHandler = (e) => {
      this.setState({[e.target.id]:e.target.value},()=>{
        console.log(this.state);
      })
  }

  onChangeHandlerFile = (e) =>{
    this.setState({image:e.target.files[0]},()=>{
        console.log(this.state);
      })
  }

  onSubmitHandler = (e) =>{
     e.preventDefault();
    if(this.state.password === this.state.confirm){
        const formData = new FormData();
        formData.append('image',this.state.image);
        formData.append('email',this.state.email);
        formData.append('name',this.state.name);
        formData.append('mode',this.state.mode);
        formData.append('designation',this.state.designation);
        formData.append('password',this.state.password);
        this.props.onSignup(formData,this.state.email,this.state.password);
        // this.props.history.push({
        //       pathname: '/'
        //  });
    }else{
      window.scrollTo(0, 0);
      this.setState({show:true},()=>{
        console.log(this.state.show);
      });  
    }
  }

  render() {
    let baseComp;
    if(this.props.loading){
       baseComp = (
          <div style={{'text-align':'center'}}>
                   <Spinner  style={{'height':'100px','width':'100px'}} animation="border"/>         
           </div>
        ) 
    }else{
      baseComp = (
        <form onSubmit={this.onSubmitHandler}>
                        
                        <div className="form-label-group">
                          <input onChange={this.onChangeHandler} type="email" id="email" className="form-control" placeholder="Email address" required autofocus/>
                          <label for="email">Email address</label>
                        </div>

                       <div className="form-label-group">
                            <input className="form-control" onChange={this.onChangeHandlerFile} type="file" id="image" name="image" accept="image/*" required/>
                            <label for="username">Upload Avatar</label>
                       </div>
                       
                        <div className="form-label-group">
                          <input onChange={this.onChangeHandler} type="text" id="name" className="form-control" placeholder="Enter name" required autofocus/>
                          <label for="name">Name</label>
                        </div>
                       
                         <div className="form-group">
                          <select onChange={this.onChangeHandler} id="designation" className="form-control extra" required autofocus>
                              <option disabled selected>Designation</option>
                              <option value="Associate_prof">Associate Professor</option>
                              <option value="Head_of_Dept">Head of Department</option>
                              <option value="Assistant_prof">Assistant Professor</option>
                              <option value="Others">Others</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <select onChange={this.onChangeHandler} id="mode" className="form-control extra" required autofocus>
                              <option disabled selected>Mode</option>
                              <option value="faculty">Faculty</option>
                              <option value="hod">Hod</option>
                              <option value="admin">Admin</option>
                          </select>
                        </div>

                        <div className="form-label-group">
                          <input onChange={this.onChangeHandler} type="password" id="password" className="form-control" placeholder="Password" required/>
                          <label for="password">Password</label>
                        </div>
                        <div className="form-label-group">
                          <input onChange={this.onChangeHandler} type="password" id="confirm" className="form-control" placeholder="Confirm Password" required/>
                          <label for="confirm">Confirm Password</label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign Up</button>          
                      </form>
      )
    }
    return (
      <div className="commHeader">
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
              <strong className="mr-auto">Password Mistmatch</strong>
              <small>just now</small>
          </Toast.Header>

          <Toast.Body>
             Passwords don't match
          </Toast.Body>
      </Toast>


      <div className="container-fluid">
          <div className="row no-gutter">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">Sign Up</h3>
                        {baseComp}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
     </div>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onSignup:(formData,username,password) => dispatch(actions.signup(formData,username,password))
  }
}

const mapStateToProps = state =>{
    return{
     loading:state.auth.loading,
     error:state.auth.error,
     user:state.auth.user
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Signup);
