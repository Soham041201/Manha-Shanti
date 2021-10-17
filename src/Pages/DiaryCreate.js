import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import {doc,setDoc} from "firebase/firestore"; 
import {db} from '../firebase/firebase'
export default function DiaryCreate() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();
  const page = useHistory();
  
  useEffect(()=>{
    var data = localStorage.getItem("user");
    const user = JSON.parse(data);
    setEmail(user.email)
  })
  
  const handleUpload=async(e)=>{
      e.preventDefault();
    try {
      const year = new Date()
      await setDoc(doc(db, "diary",`${email} ${year.toDateString()}`), {
        title:`${title}`,
        date: `${year.toDateString()}`,
        exact: true,
        body:`${body}`,
        author:`${email}`
        });
        } catch (e) {
      console.error("Error adding document: ", e);
      }
      page.push('/diary')
  }
  return (
    <div className="create">
      <h1>Create a new Diary Entry</h1>
      <form onSubmit={handleUpload}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body</label>
        <textarea className="m-2" required onChange={(e) => setBody(e.target.value)}></textarea>
        <button className="p-1 bg-blue-100 rounded-xl ml-10" >Submit</button>
      </form>
    </div>
  );
}
