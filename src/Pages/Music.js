import { getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import React, { useState,useEffect } from "react";
import Player from '../components/Player'
import Box from '@mui/material/Box';

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
<Box> 
<div>
  <p className="text-center text-3xl text-orange-200"> Add your favorite music and listen here!</p>
</div>
<Box sx={{display:'flex'}}>
  <div className="w-1/2">
  <img id="img" src="./images/img3.png" alt="img"/>
  </div>
</Box> 
<div className="w-1/2">
  <p className="text-orange-200">Sometimes we get stressed out so much that we cant look at things practically.In times like this we should listen to something pleasant.Here you can add your favourite music which you would like to listen when you feel stressed out or anxious. Get ready to be calm.</p>
</div>
 
 

<div className="mt-72 bg-white">
<Player src={songs[0]}/>

<button onClick={()=>setIsUploadVisible(!isUploadVisible)} className="bg-green-400 Class
Properties
animate-none	animation: none;
animate-spin	animation: spin 1s linear infinite;

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
animate-ping	animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
animate-pulse p-1 m-3 rounded">Add music</button>
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
    </Box>

  ) ;
}

export default Music;