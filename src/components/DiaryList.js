import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

export default function DiaryList({ blogs }) {
  
  
  return (
    <div className="rounded-xl">
      {blogs.map((route, index) => (
        <div key={route.id} className="p-2 bg-red-100 m-3 rounded-xl">
          <Link to={`/diary/${index}`}>
            <h1>{route.date}</h1>
            <h3>{route.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
} 
