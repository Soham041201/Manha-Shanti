
import React,{useState} from "react";
import {Link,useHistory } from "react-router-dom";
import {register } from '../Auth'
import {doc,setDoc} from "firebase/firestore"; 
import {db} from '../firebase/firebase'
import UploadAndDisplayImage from '../components/ImagePicker'
export default function SignUp() {

    const page= useHistory()
	const [name,setName] = useState("")
	const [surname,setsurname] = useState("")
	const [mobileNumber, setMobilenumber] = useState()
	const[email,setEmail] = useState("")
	const[password,setPassword] = useState("")
  const[confirmPassword,setConfirmPassword] = useState("")
  const handleRegister =(e)=>{
    	e.preventDefault();
       	register(email,password,confirmPassword).then(async ()=>{
			try {
			
				await setDoc(doc(db, "users", `${email}`), {
					firstName: {name},
				  lastName: {surname},
				  CellNumber: {mobileNumber},
				  DisplayImage: localStorage.getItem("UserImage")
				
				  });
				  
				// localStorage.setItem("id",docRef.id)
			  } catch (e) {
				console.error("Error adding document: ", e);
			  }
		page.push("/home")
	   })
        
    }


  return (
    <div className="login mt-5">
<div class="flex justify-center items-center">
	<div class="py-7 px-12 bg-white rounded-2xl shadow-xl z-20">
		<div>
			<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Create a new account</h1>
			<p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Register your account using your email and password and let us take care of your peace</p>
		</div>
		<div class="space-y-4">
			<form onSubmit={handleRegister}>
			<input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="First Name" className="flex-inline text-sm py-3 px-4 mb-2 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500" />
			<input type="text" value={surname} onChange={(e)=>setsurname(e.target.value)} placeholder="Last Name" className="flex-inline text-sm py-3 px-4 mb-2 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500" />
			<input type="text" value={mobileNumber} onChange={(e)=>setMobilenumber(e.target.value)} placeholder="Mobile number" className="block text-sm py-3 px-4 mb-2 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500" />	
			<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Addres" className="block text-sm py-3 px-4 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500" />
			<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500 mt-2" />
      <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="block text-sm py-3 px-4 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500 mt-2" />
	  <UploadAndDisplayImage/>
			<button class="py-3 w-64 text-xl mt-3 ml-7 text-white bg-purple-400 rounded-2xl"  type="submit">Register</button>
			</form>
	</div>
			<div class="text-center mt-6">
				
				<p class="mt-4 text-sm">Already have an account?  <span class="underline cursor-pointer"> <Link to="/">Login</Link> </span>
				</p>
			</div>
		</div>
		<div class="w-40 h-40 absolute bg-purple-300 rounded-full top-30 right-12 hidden md:block "></div>
		<div
			class="w-20 h-20 absolute bg-purple-300 rounded-full bottom-20 left-10 transform  hidden md:block">
		</div>
	</div>
    </div>
  );
}
