
import React,{useRef, useState} from "react";
import app from '../firebase/firebase'
import { Form, Button, Card } from "react-bootstrap";
import {Link} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import App from './App'
export default function SignUp() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [errorMessage,setErrorMessage] = useState()
    function handleSignIn(e){
      
        e.preventDefault();
        const auth = getAuth(app);
        if(passwordConfirmRef.current.value===passwordRef.current.value){
          createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            
          })
          .catch((error) => {
            const errorCode = error.code;
              setErrorMessage(error.message) ;
            // ..
          });   
        }
          
    }


  return (
    <div className="sign-up">
      <Card>
        <Card.Body>
          <h2 className="text-center mb4-4">Register</h2>
          <Form>
            <Form.Group id="email">
            <div className="error">
               <p>{errorMessage}</p>
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
            
            </Form.Group>
            <Button type="submit" onClick={handleSignIn} className="w-100">SignUp</Button>
          </Form>
        </Card.Body>
      </Card>
      
      <div className="w-100 text-center mt-2">
        Already have an account ? <Link to="/">Login </Link>
      </div>
    </div>
  );
}
