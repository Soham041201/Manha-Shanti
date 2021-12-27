import {getStorage,ref, uploadBytes } from "firebase/storage";
import React, { useState} from "react";
import Player from '../components/Player'
const  Music = ()=> {
  const storage = getStorage();
  const songs = []
  const [file, setFile] = useState(null);
  const [isUpload,setIsUpload] = useState(false);
  const  [isUploadVisible,setIsUploadVisible] = useState(false);
  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const refer = ref(storage, `/songs/${file.name}`);
    uploadBytes(refer, file)
      .then((snapshot) => {
        setIsUpload(true);
        console.log("Uploaded a file!");
      })
  }



  return(
<div> 


<Player src={songs[0]}/>

<h1>Please help us by conributing the music you have</h1>
<button onClick={()=>setIsUploadVisible(!isUploadVisible)} className="bg-green-400 p-1 m-3 rounded">Add music</button>
{isUploadVisible && 
  <form onSubmit={handleUpload}>
        <input required type="file" onChange={handleChange}/>
        <button
          className="text-blue-500"
          onClick={handleUpload}
          disabled={!file}
          type="submit"
        >
          {isUpload ? `File Uploaded`:`Upload`}
        </button>
      </form>
}

</div>
  ) ;
}

export default Music;