
import React,{useState} from "react";
import {Link,useHistory } from "react-router-dom";
import { loginFn } from '../Auth'

export default function SignUp() {

    const page= useHistory()
	const[email,setEmail] = useState("")
	const[password,setPassword] = useState("")
  const handleLogin =(e)=>{
    	e.preventDefault();
        loginFn(email, password).then(async ()=> {
			if(loginFn(email, password)!==null){
				
				page.push("/home")
			
			}
		})
        
    }
  return (
    <div className="login mt-5">
<div class="flex justify-center items-center">
	<div class="py-7 px-12 bg-white rounded-2xl shadow-xl z-20">
		<div>
			<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Login  into your account</h1>
			<p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Login into your account using your registered email and password</p>
		</div>
		<div class="space-y-4">
			<form onSubmit={handleLogin}>
			<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Addres" className="block text-sm py-3 px-4 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500" />
			<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500 mt-2" />
			<button class="transition duration-500 ease-in-out hover:bg-purple-400 tranform hover:-translate-y-1 hover:scale-110  py-3 w-64 text-xl mt-3 ml-7 text-white bg-purple-700 rounded-2xl"  href="/home" type="submit">Login</button>
			</form>
	</div>
			<div class="text-center mt-6">
				
				<p class="mt-4 text-sm">Dont have an account? <span class="underline cursor-pointer"> <Link to="/register">Register</Link> </span>
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
