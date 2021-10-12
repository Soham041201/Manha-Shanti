import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function DiaryList({ blogs }) {
  return (
    <div className="p-10">
      {blogs.map((route, index) => (
        <div key={route.id} className="p-2 bg-red-100 mb-2">
          <Link to={`/diary/${index}`}>
            <h1>{route.title}</h1>
            <h3>{route.date}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
