
import React,{useRef, useState} from "react";
import app from '../firebase/firebase'
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { Form, Button, Card } from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import firebase from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default function SignUp() {
   
    const page= useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [errorMessage,setErrorMessage] = useState()
    const docData = {
      stringExample: "Hello world!",
      booleanExample: true,
      numberExample: 3.14159265,
      dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
      arrayExample: [5, true, "hello"],
      nullExample: null,
      objectExample: {
          a: 5,
          b: {
              nested: "foo"
          }
      }
  };
  
    function handleSignIn(e){
      
        e.preventDefault();
        const auth = getAuth(app);
        if(passwordConfirmRef.current.value===passwordRef.current.value){
          createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
          .then((userCredential) => {
            
            const user = userCredential.user;
            page.push("/home")
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
