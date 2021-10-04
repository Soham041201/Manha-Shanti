
import React,{useRef} from "react";
import { Form, Button, Card } from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import { register } from "../Auth";
export default function SignUp() {
   
    const page= useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
   
  
    const handleSignIn = async()=>{
      await register(emailRef,passwordRef,passwordConfirmRef)
        page.push("/home")
    }


  return (
    <div className="sign-up">
      <Card>
        <Card.Body>
          <h2 className="text-center mb4-4">Register</h2>
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
            <Form.Group id="password-confirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef}required />
            <Button type="button" onClick={handleSignIn} className="w-100">SignUp</Button>
            </Form.Group>
            
          </Form>
        </Card.Body>
      </Card>
      
      <div className="w-100 text-center mt-2">
        Already have an account ? <Link to="/">Login</Link>
      </div>
    </div>
  );
}
