import Box from "@mui/material/Box";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import Player from "../components/Player";
import { db } from "../firebase/firebase";
const Podcast = () => {
  const storage = getStorage();

  const [file, setFile] = useState(null);
  const [isUpload, setIsUpload] = useState(false);
  const [isUploadVisible, setIsUploadVisible] = useState(false);
  function handleChange(e) {
    setFile(e.target.files[0]);
  }
  const [songs, setSongs] = useState([]);
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "podcast"));
    setSongs(querySnapshot.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getData();
  }, []);

  function handleUpload(e) {
    e.preventDefault();
    const refer = ref(storage, `/podcast/${file.name}`);
    uploadBytes(refer, file).then((snapshot) => {
      setIsUpload(true);
      getDownloadURL(ref(storage, snapshot.ref._location.path_))
        .then(async (url) => {
          console.log(url);
          await setDoc(doc(db, "podcast", `${file.name}`), {
            trackName: file.name,
            url: url,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Uploaded a file!");
    });
  }

  return (
    <div>
      <h2>Please help us by conributing the podcast you have</h2>
      <button
        onClick={() => {
          console.log(songs);
          setIsUploadVisible(!isUploadVisible);
        }}
        className="bg-green-400 p-1 m-3 rounded"
      >
        Add Podcasts
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
      <Box sx={{ display: "flex" }}>
        {songs &&
          songs.map((song) => (
            <Box
              sx={{
                backgroundColor: "#4caf50",
                width: "200px",
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
    </div>
  );
};

export default Podcast;
