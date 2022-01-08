import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useRef, useState } from "react";

const Player = ({ songs }) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying, currentSongIndex]);

  const SkipSong = (forwards = true) => {
    if (forwards) {
      if (currentSongIndex === songs.length - 1) {
        setCurrentSongIndex(0);
      } else {
        setCurrentSongIndex(currentSongIndex + 1);
      }
    } else {
      if (currentSongIndex === 0) {
        setCurrentSongIndex(songs.length - 1);
      } else {
        setCurrentSongIndex(currentSongIndex - 1);
      }
    }
  };
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        px: 2,
        background: "rgba(20, 20, 20, 0.4)",
        height: 97,
        backdropFilter: "blur(4px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <audio src={songs[currentSongIndex]?.url} ref={audioEl}></audio>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          m: 2,
          p: 1,
        }}
      >
        <Typography>{`Now Playing : ${songs[currentSongIndex]?.trackName}`}</Typography>
        <Box>
        <Button onClick={() => SkipSong(false)}>
          <SkipPreviousIcon sx={{ color: "white" }} />
        </Button>

        {songs[currentSongIndex] ? (
          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              mx: 2,
              p: 1,
              height: 60,
              borderRadius: "100%",
            }}
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          >
            {!isPlaying ? (
              <PlayArrowIcon sx={{ color: "white" }} />
            ) : (
              <PauseOutlinedIcon sx={{ color: "white" }} />
            )}
          </Button>
        ) : (
          <CircularProgress />
        )}
        <Button onClick={() => SkipSong()}>
          <SkipNextIcon sx={{ color: "white" }} />
        </Button>
        </Box>
      
      </Box>
    </Box>
  );
};

export default Player;
