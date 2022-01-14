import { Box, Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export default function Profile() {
  const [mobile, setMobile] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [image, setImage] = useState();
  useEffect(() => {
    fetch();
    async function fetch() {
      var data = localStorage.getItem("user");
      const user = JSON.parse(data);
      console.log(user);
      setName(user.displayName);
      setImage(user.photoURL);
      if (user.email !== null) {
        const docRef = doc(db, "users", user.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log(docSnap.data());
          setName(docSnap.data().firstName.name);
          setSurname(docSnap.data().lastName.surname);
          setMobile(docSnap.data().CellNumber.mobileNumber);
          setImage(docSnap.data().DisplayImage);
        } else {
          console.log("No such document!");
        }
      }
    }
  }, []);

  return (
    <Container sx={{ display: "flex", justifyContent: "center", p: 3 }}>
      {name && (
        <Box>
          <Box sx={{ mx: 10 }}>
            <img src={`${image}`} className=" w-56 rounded-full " alt="User" />
          </Box>
          <Box sx={{textAlign:'center',mt:2}}>
            {name && <h1>{`Name: ${name} ${surname}`}</h1>}
            {mobile && <h1>Contact number: {mobile}</h1>}
          </Box>
        </Box>
      )}
    </Container>
  );
}
