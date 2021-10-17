import React, { useEffect, useState} from "react";
import {db} from '../firebase/firebase'
import { BrowserRouter as Router ,useHistory} from "react-router-dom";
import DiaryDetail from "../components/DiaryDetail";
import DiaryList from "../components/DiaryList";
// import { blogs } from "../DiaryData";
import { collection, query,onSnapshot } from "firebase/firestore";

export default function Diary() {
  const [flag,setFlag] = useState(false)
  const q = query(collection(db, "diary"));
  const [blogs,setBlogs]= useState([])
  const page = useHistory()

  const handleClick= () => {
  page.push('/diary/create')
  }
useEffect( ()=>{
  var data = localStorage.getItem("user");
  const user = JSON.parse(data);
   onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if(doc.data().author ===user.email){
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
      <div style={{ display: "flex"}}>
        <div className="bg-green-300 h-screen m-4 rounded-xl">
          <DiaryList blogs={blogs}/>
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <h1 className="text-3xl ">Your Diary</h1>
        <button className="p-1 bg-blue-100 rounded-xl mt-5" onClick={handleClick}>Create a new entry</button>
          <DiaryDetail blogs={blogs} />
        </div>
      </div>
         </Router>
  );
}
