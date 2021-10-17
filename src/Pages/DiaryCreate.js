import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import {doc,setDoc} from "firebase/firestore"; 
import {db} from '../firebase/firebase'
export default function DiaryCreate() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();


  const handleUpload=async(e)=>{
      e.preventDefault();
    try {
      const year = new Date()
  
      await setDoc(doc(db, "diary",`${year.toDateString()}`), {
        title:`${title}`,
        date: `${year.toDateString()}`,
        exact: true,
        body:`${body}`,
        author: "Soham"
        });
        } catch (e) {
      console.error("Error adding document: ", e);
      }
  }
  return (
    <div className="create">
      <h1>Create a new blog</h1>
      <form onSubmit={handleUpload}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body</label>
        <textarea required onChange={(e) => setBody(e.target.value)}></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
