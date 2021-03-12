import { Component } from "react";
import {Container, Row,Col } from 'react-bootstrap'
import Register from './Register'
import Header from '../Header/Header'
import Login from './Login'
import {Route} from 'react-router-dom'

 class Body extends Component {
     render(){
         return(
        //  return(
        //      <div className = "container">

        //          <div className = "row">
        //              <div className = "row col-md-4">
        //                  row
        //              </div>
        //              <div className = "row col-md-4">
        //                  row
        //              </div>
        //              <div className = "row col-md-4">
        //                  row
        //              </div>
        //          </div>
        //      </div>
        <Container>
            {/* <Register></Register> */}
            {/* <Row>
           
            <Col>col1</Col>
                <Col></Route></Col>
                
            </Row> */}
            <div>
  
            <Route path = '/register' component={Register}></Route>
            
            <Route path = '/login' component = {Login}></Route>
            {/* <Header></Header> */}
            </div>
          
         
 
        </Container>
         )
     }
 }
 export default Body