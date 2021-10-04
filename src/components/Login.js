
import React,{useRef} from "react";
import { Form, Button, Card } from "react-bootstrap";
import {Link,useHistory } from "react-router-dom";
import { loginFn } from '../Auth'
export default function SignUp() {

    const page= useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()
  const handleLogin =(e)=>{
        loginFn(emailRef.current.value, passwordRef.current.value,page)
        page.push("/home")
    }


  return (
    <div className="login">
      <Card>
        <Card.Body>
          <h2 className="text-center mb4-4">Login</h2>
          <Form>
            <Form.Group id="email">
               <div className="error">
                   </div> 
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef}required/>
            </Form.Group>
            <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef}required/>
            </Form.Group>
            
          </Form>
          <Button type="button" onClick={handleLogin} className="w-100">Login</Button>  
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Dont have an account?  <Link to="/register">Register</Link>
      </div>
    </div>
  );
}
