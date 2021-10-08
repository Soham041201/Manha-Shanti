import React, { useState } from "react";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default function App() {
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    debugger;
    setFile(e.target.files[0])
  }

  function handleUpload(e) {
    e.preventDefault();
    const refer = ref(storage, `/images/${file.name}`);
    uploadBytes(refer, file)
      .then((snapshot) => {
        debugger;
        console.log("Uploaded a blob or file!");
      })
      .then(() => {
        getDownloadURL(ref(storage, `images/${file.name}`)).then((url) => {
          console.log(url);
          localStorage.setItem("UserImage",url)
          setURL(url);
        });
      });
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button className ="text-blue-500" onClick={handleUpload} disabled={!file}>
          Upload your Image to manha shanti
        </button>
      </form>
      <img src={url} alt="" />
    </div>
  );
}
