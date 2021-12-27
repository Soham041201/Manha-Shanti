import React,{useEffect} from 'react'
import { getStorage, ref, listAll,getDownloadURL } from "firebase/storage";


const Podcast = ()=> {
  
    const storage = getStorage();

    const songs = []
useEffect(()=>{
    handleList()
},)
const handleList = async () => {
    const listRef = ref(storage, '/songs');
    await listAll(listRef)
    .then((res) => {
        console.log(res);
      res.items.forEach((itemRef) => {
        getDownloadURL(ref(storage,itemRef._location.path_ )).then((url) => {
            console.log(url)
            songs.push(url);
          });
          console.log(itemRef._location.path_);
      });
      
    }).catch((error) => {
      console.log(error);
    });
console.log(songs);
}


    return (
        <div>
    
        </div>
    )
}

export default Podcast