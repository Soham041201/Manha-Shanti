import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function DiaryList({ blogs }) {
  
  
  return (
    <div className="rounded-xl bg-white ml-10 p-2 h-screen w-48">
      <h1 className="text-2xl">Diary List</h1>
      {blogs?blogs.map((route, index) => (
        <div key={route.id} className="p-2 bg-red-100 m-3 rounded-xl">
          <Link to={`/diary/${index}`}>
            <h1>{route.date}</h1>
            <h3>{route.title}</h3>
          </Link>
        </div>
      )):<Loading/>}
    </div>
  );
} 
