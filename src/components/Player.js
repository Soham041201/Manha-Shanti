import React,{useState,useRef, useEffect} from 'react'
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { getDownloadURL, getStorage, listAll, ref} from "firebase/storage";
const Player = ()=> {
  const storage = getStorage();
  const [songs,setSongs] = useState([]);
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    let currentSongIndex =0;
    


    const handleList = async () => {
      const listRef = ref(storage, '/songs');
      await listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(ref(storage,itemRef._location.path_ )).then((url) => {
              setSongs([...songs,url]);
            });
        }); 
      }).catch((error) => {
        console.log(error);
      });
    }
    
    useEffect(()=>{
      handleList()
        if(isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    },[isPlaying]);


    const SkipSong = (forwards) =>{
        if(true){
          if(currentSongIndex === songs.length-1){
            currentSongIndex = 0;
            
          }
          currentSongIndex =  currentSongIndex+1
        }else{
            if(currentSongIndex === 0){
              currentSongIndex = songs.length-1;
            }
            currentSongIndex =  currentSongIndex-1
    }}
    return (
       <Box >
           <audio src={songs[currentSongIndex]} ref={audioEl}></audio>
           <Box sx={{
             justifyContent:'center',
             alignItems:'center',
              display:'flex',
              m:0,
              p:1,
              backgroundColor:'gray',
           }}>
           <Button onClick={() => SkipSong(false)}>
            <SkipPreviousIcon sx={{ color: 'white' }} />
          </Button>
      
                <Button
            variant='outlined'
            sx={{
              borderColor: 'white',
              mx: 2,
              p: 1,
              height: 60,
              borderRadius: '100%',
            }}
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          >
            {!isPlaying ? (
              <PlayArrowIcon sx={{ color: 'white' }} />
            ) : (
              <PauseOutlinedIcon sx={{ color: 'white' }} />
            )}
          </Button>
          <Button onClick={() => SkipSong(true)}>
            <SkipNextIcon sx={{ color: 'white' }} />
          </Button>
           </Box>
       </Box>
    )
}

export default Player;
