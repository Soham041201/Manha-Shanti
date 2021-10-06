import React,{useEffect,useState} from 'react'
import { doc, getDoc } from "firebase/firestore"
import {db} from '../firebase/firebase'
export default function Profile(){
   
   ;
    const [mobile,setMobile] =useState()
    const [name,setName] = useState()
    const [surname,setSurname] = useState()
    
    
useEffect(async () => {
    
    var data = localStorage.getItem("user")
    const user= JSON.parse(data)
    const docRef = doc(db, "users",user.email)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(docSnap.data());
            setName(docSnap.data().firstName.name)
            setSurname(docSnap.data().lastName.surname)
            setMobile(docSnap.data().CellNumber.mobileNumber)
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          } 
},[])
    
    
    return (
        <div>
            <h1>{`Full Name: ${name} ${surname}`}</h1>
            <h1>{mobile}</h1>
            <h1>Profile Page</h1>
        </div>
    )
}
