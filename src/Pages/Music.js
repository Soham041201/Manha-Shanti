import Box from "@mui/material/Box";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import Player from "../components/Player";
import { db } from "../firebase/firebase";
const Music = () => {
  const storage = getStorage();

  const [file, setFile] = useState(null);
  const [isUpload, setIsUpload] = useState(false);
  const [isUploadVisible, setIsUploadVisible] = useState(false);
  function handleChange(e) {
    setFile(e.target.files[0]);
  }
  const [songs, setSongs] = useState([]);
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "tracks"));
    setSongs(querySnapshot.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getData();
  }, []);

  function handleUpload(e) {
    e.preventDefault();
    const refer = ref(storage, `/songs/${file.name}`);
    uploadBytes(refer, file).then((snapshot) => {
      setIsUpload(true);
      getDownloadURL(ref(storage, snapshot.ref._location.path_))
        .then(async (url) => {
          await setDoc(doc(db, "tracks", `${file.name}`), {
            trackName: file.name,
            url: url,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  return (
   <Box sx={{height:'400px'}}>    
      <h1>Please help us by conributing the music you have</h1>
      <button
        onClick={() => {
          setIsUploadVisible(!isUploadVisible);
        }}
        className="bg-green-400 p-1 m-3 rounded"
      >
        Add music
      </button>
      {isUploadVisible && (
        <form onSubmit={handleUpload}>
          <input required type="file" onChange={handleChange} accept=".mp3" />
          <button
            className="text-blue-500"
            onClick={handleUpload}
            disabled={!file}
            type="submit"
          >
            {isUpload ? `File Uploaded` : `Upload`}
          </button>
        </form>
      )}
        <Player songs={songs} />
        <Box sx={{overflow: "auto",height:'400px'}}>
      {songs &&
        songs.map((song) => (
          <Box
            sx={{
              backgroundColor: "#4caf50",
              width: "500px",
              m: 4,
              p: 2,
              borderRadius: "20px",
            }}
            key={songs[song]}
          >
            {song.trackName}
          </Box>
        ))}
        </Box>
    </Box>
  );
};

export default Music;
