import React from 'react'
import {Link} from 'react-router-dom'
import mock from '../mock.json'
export default function DiarySideBar() {
    return (
        <div className="bg-green-400 h-screen w-40 rounded-xl mx-3 mb-10">
            <h1 className="text-xl mx-10">Side Bar</h1>
            <div className="bg-green-300 m-2 p-2">
                <Link to={`diary/${mock.blogs[0].id}`}>
                <h2>{mock.blogs[0].title}</h2>
                <p>{mock.blogs[0].date}</p>
                </Link>
            </div>
        </div>
    )
}
