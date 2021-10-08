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
        <div className="h-full w-full">
            {image?<div className="profile-data">
            <h1>{`Full Name: ${name} ${surname}`}</h1>
            <h1>Mobile Number {mobile}</h1>
            <h1>Profile Page</h1>
            <img src={`${image}`} alt="" />
            </div>:<Loading/>}
            </div>
        )
}
