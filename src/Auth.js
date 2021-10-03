import React from 'react'
import { getAuth, signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword} from "firebase/auth";
import app from './firebase/firebase'
class Auth {
    constructor(){
        this.authenticated = false;
    }

    login(email,password){
        var loginError
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth,email,password)
          .then((userCredential) => {
            const user = userCredential.user; 
            this.authenticated = true;
            console.log(this.authenticated);
            return user
          })
          .catch((error) => {
            const errorCode = error.code;
                alert(error.message);
          });
         
    }
    logout(){
        const auth = getAuth(app);
        signOut(auth).then(() => {
            this.authenticated = false;
            console.log(this.authenticated);
        }).catch((error) => {
       console.log(error);
        });
    }
    isAuthenticated(){
        return this.authenticated;
    }

    register(email,password,confirmPassword) {
        const auth = getAuth(app);
        if(password===confirmPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
            })
            .catch((error) => {
              const errorCode = error.code;
                alert(error.message) ;
              // ..
            });   
          }
    }
}

export default new Auth()
