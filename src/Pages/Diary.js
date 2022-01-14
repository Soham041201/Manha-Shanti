import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import DiaryDetail from "../components/DiaryDetail";
import DiaryList from "../components/DiaryList";
import { Typography, Container, Box, Button } from "@mui/material";
import { collection, query, onSnapshot } from "firebase/firestore";
export default function Diary() {
  const q = query(collection(db, "diary"));
  const [blogs, setBlogs] = useState([]);
  const page = useHistory();

  const handleClick = () => {
    page.push("/diary/create");
  };
  useEffect(() => {
    var data = localStorage.getItem("user");
    const user = JSON.parse(data);
    onSnapshot(
      q,
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().author === user.email) {
            setBlogs(querySnapshot.docs.map((doc) => doc.data()));
          }
        });
      },
      [blogs]
    );
  });

  return (
    <Router>
      <Container sx={{ display: "flex" }}>
        <Box>
          <DiaryList blogs={blogs} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "60vw" }}>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Typography
              sx={{ fontFamily: "Luxurious Roman, cursive", fontSize: "32px" }}
            >
              Your Diary
            </Typography>
            <Button
              sx={{
                backgroundColor: "#87a96b",
                "&:hover": { backgroundColor: "#87a96b" },
              }}
              variant="contained"
              onClick={handleClick}
            >
              New Entry
            </Button>
          </Box>
          <DiaryDetail blogs={blogs} />
        </Box>
      </Container>
    </Router>
  );
}
