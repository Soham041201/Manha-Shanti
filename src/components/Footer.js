import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
    return (
       
            <footer className="footer">
            <p class= "bg-green-500 text-center text-white  mt-10 p-10 "> <Link to="/diary">Diary</Link> | <Link to="/podcast">Podcasts</Link> | <Link to="/music">Music</Link></p>
            </footer>
    
    )
}
