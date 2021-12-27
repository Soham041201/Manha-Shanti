import React, { useEffect, useState} from "react";
import {db} from '../firebase/firebase'
import { BrowserRouter as Router ,useHistory} from "react-router-dom";
import DiaryDetail from "../components/DiaryDetail";
import DiaryList from "../components/DiaryList";
import { collection, query,onSnapshot } from "firebase/firestore";
import Loading from "../components/Loading";
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
  },[blogs]);
  
})

  return (
    <Router>
      <div className="inline-flex space-x-2">
        <div className="inline-block w-1/7">
          <DiaryList blogs={blogs}/>
        </div>
        <div className="inline-block w-7/8">
          <h1 className="text-4xl ml-12">Welcome to your diary page!</h1>
        <button className="p-2 bg-green-100 rounded-l mt-5" onClick={handleClick}>New Entry</button>
          <DiaryDetail blogs={blogs} />
        </div>
      </div>
         </Router>
  );
}
