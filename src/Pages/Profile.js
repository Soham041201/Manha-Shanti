import React,{useEffect,useState} from 'react'
import { doc, getDoc } from "firebase/firestore"
import {db} from '../firebase/firebase'
import Loading from '../components/Loading'

export default function Profile(){
   
   
    const [mobile,setMobile] =useState()
    const [name,setName] = useState()
    const [surname,setSurname] = useState()
    const [image,setImage] = useState()
    
useEffect(async () => {
    
    var data = localStorage.getItem("user")
    const user= JSON.parse(data)
    if(user.email!==null){
        const docRef = doc(db, "users",user.email)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(docSnap.data());
            setName(docSnap.data().firstName.name)
            setSurname(docSnap.data().lastName.surname)
            setMobile(docSnap.data().CellNumber.mobileNumber)
            setImage(docSnap.data().DisplayImage)
          } else {
           
            console.log("No such document!");
          } 
    }
    
},[])
    
    
    return (    
        
        <div className=" p-10 h-full w-full bg-back-pattern bg-no-repeat"> 
        

            {image?
            <div className="profile-data flex">
            
          
           <div className="w-1/4 h-1/4 block-inline "> <img src={`${image}`} className="rounded-full " alt="" /></div>
           <div className= "data-text block-inline bg-white ml-40 text-3xl">
                
           <h1>{`Full Name: ${name} ${surname}`}</h1>
            <h1>Mobile Number: {mobile}</h1>
            </div>
            <div className=" bg-no-repeat bg-center  w-40 pd-40 ml-40 ">
             {/* <img className="p-40 h-20" id="img" src ="./images/profilep.jpg"alt=""/>  */}
            </div>
            
            </div>:<Loading/>}
            </div>
        )
}
