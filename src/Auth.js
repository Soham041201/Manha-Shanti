import { getAuth, signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword} from "firebase/auth";
import app from './firebase/firebase'


    export function loginFn(email,password){
      
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth,email,password)
          .then((userCredential) => {
            const user = userCredential.user; 
            localStorage.setItem("isAuth",true)
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            alert(error.message);
          });
    }
    export function logout(){
        const auth = getAuth(app);
        signOut(auth).then(() => {
            localStorage.clear();
        }).catch((error) => {
       console.log(error);
        });
    }

  export function register(email,password,confirmPassword) {
        const auth = getAuth(app);
        if(password===confirmPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              localStorage.setItem("isAuth",true)
            })
            .catch((error) => {
              const errorCode = error.code;
              console.log(errorCode);
                alert(error.message) ;
              // ..
            });   
        }
    }
