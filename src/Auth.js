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

  
export async function googleLogin(){
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("isAuth",true)
      const data = JSON.stringify(user)
      localStorage.setItem("user",data); 
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage)
      throw errorMessage;
    });

}
    