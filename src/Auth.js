import { getAuth, signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import app from './firebase/firebase'

    export async function loginFn(email,password){
      
        const auth = getAuth(app);
       await signInWithEmailAndPassword(auth,email,password)
          .then((userCredential) => {
            const user = userCredential.user; 
            localStorage.setItem("isAuth",true)
            const data = JSON.stringify(user)
            localStorage.setItem("user",data); 
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            if(error.message !== "Firebase: Error (auth/network-request-failed)."){
              alert(error.message);
              throw error.message;
            }
            
          });
    }


    export async function logout(){
        const auth = getAuth(app);
      await signOut(auth).then(() => {
            localStorage.clear();
        }).catch((error) => {
       console.log(error);
        });
    }



  export async function register(email,password,confirmPassword) {
        const auth = getAuth(app);
        if(password===confirmPassword){
         await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              localStorage.setItem("isAuth",true)
              const data = JSON.stringify(user)
              localStorage.setItem("user",data); 
            })
            .catch((error) => {
              const errorCode = error.code;
              console.log(errorCode);
                alert(error.message)
                throw error.message;
              // ..
            });   
        }
    }
    const provider = new GoogleAuthProvider();
  
export async function googleLogin(){
  const auth = getAuth(app);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
       localStorage.setItem("isAuth",true)
      const data = JSON.stringify(user)
      localStorage.setItem("user",data); 
  
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode);
      alert(errorMessage)
      throw errorMessage;
    // ..
      // ...
    });

}
    