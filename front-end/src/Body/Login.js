import React,{ Component } from "react";
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import { Container, Button } from "react-bootstrap";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
    email : '',
    password : '',
    loginSuccess : false
    }

    this.state={
      config : {
        headers : {'Authorization': `Bearer ${localStorage.getItem('token')}`}
      }
    }
  }
    loginUser(){
    
      axios.get('http://localhost:100/checklogin',this.state.config).then((response) =>{
        this.setState({ loginSuccess: true })
      })
    }
    // form handler
  handleChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }

   //login function  handler 
   submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:100/user/login', this.state)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        this.setState({ loginSuccess: true })
      }).catch((err) => this.setState({ loginSuccess: false }))
    this.setState({ email: '', password: '' })
    console.log("allgood")
  }

  
    render(){ 
      if (this.state.loginSuccess === true) {
        return <Redirect to='/register' />
        
      }
      
        return(
          
          <div>
          <Container>
          <form>

          <input type="text" name="email" id="" placeholder="Username/Email" value={this.state.email} onChange={this.handleChange} />

          <input type="password" name="password" id="" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          <button type="submit" onClick={this.submitForm}>Login</button>
</form>

          </Container>
          </div>

    
    )

  }
}

export default Login