import React from "react";
import {doc,setDoc} from "firebase/firestore"; 
import {db} from '../firebase/firebase'
import { BrowserRouter as Router } from "react-router-dom";
import DiaryDetail from "../components/DiaryDetail";
import DiaryList from "../components/DiaryList";
import { blogs } from "../mock";

export default function Diary() {

  
  const handleUpload=async()=>{
    try {
			
      await setDoc(doc(db, "diary", "sattigeri.soham@gmail.com"), {
        title:"DCWC",
        date: 2022,
        exact: true,
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        id:1,
        author: "Soham"
      
        });
        
      // localStorage.setItem("id",docRef.id)
      } catch (e) {
      console.error("Error adding document: ", e);
      }
  }
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div>
          <DiaryList blogs={blogs.filter((blog)=>blog.author === 'Soham')} />
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <DiaryDetail blogs={blogs} />
        </div>
      </div>
      <button onClick={handleUpload}>Send data</button>
    </Router>
  );
}
