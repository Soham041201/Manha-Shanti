import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import {doc,setDoc} from "firebase/firestore"; 
import {db} from '../firebase/firebase'
export default function DiaryCreate() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
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
        author:`${email}`,
        time: `${year.getHours()}:${year.getMinutes()}`
        });
        } catch (e) {
      console.error("Error adding document: ", e);
      }
      page.push('/diary')
  }
  return (
    <div className="create">
      <h1 className="text-4xl">Create a new Diary Entry</h1>
      <form onSubmit={handleUpload} className="text-center">
        <input
          type="text"
          required
          value={title}
          placeholder="Title"
          className="text-3xl  input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br/>
        <textarea className=" text-3xl input mt-5"  placeholder="Body" required onChange={(e) => setBody(e.target.value)}/>  <br/>
        <button className="p-1 bg-blue-100 rounded-xl" >Create a New Entry</button>
      </form>
    </div>
  );
}
