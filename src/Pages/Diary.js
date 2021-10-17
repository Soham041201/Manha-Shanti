import React, { useEffect, useState} from "react";
import {doc,setDoc} from "firebase/firestore"; 
import {db} from '../firebase/firebase'
import { BrowserRouter as Router } from "react-router-dom";
import DiaryDetail from "../components/DiaryDetail";
import DiaryList from "../components/DiaryList";
// import { blogs } from "../DiaryData";
import { collection, query,onSnapshot } from "firebase/firestore";

export default function Diary() {
  const [flag,setFlag] = useState(false)
  const q = query(collection(db, "diary"));
  const handleUpload=async()=>{
    try {
      const year = new Date()
  
      await setDoc(doc(db, "diary",`${year.toDateString()}`), {
        title:"DCWC",
        date: `${year.toDateString()}`,
        exact: true,
        body:"This is workingqwdw dw",
        author: "Soham"
        });
        } catch (e) {
      console.error("Error adding document: ", e);
      }
  }
  const [blogs,setBlogs]= useState([])

useEffect( ()=>{
 
   onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if(doc.data().author ==='Soham'){
        blogs.push(doc.data());
      }
               
        // console.log(doc.data());
    });
    setFlag(true)
   setBlogs(blogs);
  },[]);
  
})

  
  
  

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div>
          <DiaryList blogs={blogs}/>
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <DiaryDetail blogs={blogs} />
        </div>
      </div>
      <button  onClick={handleUpload}>Send data</button>
    </Router>
  );
}
