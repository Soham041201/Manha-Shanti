import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
    const year = new Date()
    return (
       
            <footer className="footer">
            <p className= "bg-green-500 text-center text-white pt-10  "> <Link to="/diary">Diary</Link> | <Link to="/podcast">Podcasts</Link> | <Link to="/music">Music</Link></p>
            <p className= "bg-green-500 text-center text-white  pb-3 pt-5 ">© Soham Sattigeri and Vaishnavi Deshpande {year.getFullYear()}</p>
            </footer>
    
    )
}
