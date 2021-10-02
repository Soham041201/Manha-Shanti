
import React,{useRef, useState} from "react";
import app from '../firebase/firebase'
import { Form, Button, Card } from "react-bootstrap";
import {Link} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
export default function SignUp() {
  
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [errorMessage,setErrorMessage] = useState()
    function handleLogin(e){
      
        e.preventDefault();
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
          .then((userCredential) => {
            const user = userCredential.user;  
          })
          .catch((error) => {
            const errorCode = error.code;
              setErrorMessage(error.message) ;
            // ..
          });   
        
          
    }


  return (
    <div className="login">
      <Card>
        <Card.Body>
          <h2 className="text-center mb4-4">Login</h2>
          <Form>
            <Form.Group id="email">
               <div className="error">
               <p >{errorMessage}</p>
                   </div> 
              
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef}required/>
            </Form.Group>
            <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef}required/>
            </Form.Group>
            <Button type="submit" onClick={handleLogin} className="w-100">Login</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Dont have an account?  <Link to="/register">Register</Link>
      </div>
    </div>
  );
}
