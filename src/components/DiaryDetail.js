import React from "react";
import { Switch, Route } from "react-router-dom";
export default function DiaryDetail({ blogs }) {


  return (
    <div className="ml-10">
      <Switch>
        {blogs.map((route, index) => (
          <Route
            key={index}
            path={`/diary/${index}`}
            exact={route.exact}
            children={
            <div>
              <div className="text-3xl diary">
                {route.title}
              </div>
              <div className="diary">{route.date}</div>
              <div className="mb-5 diary">{route.time}</div>
              <div className="w-3/4 text-xl diary">
              {route.body}
              </div>
              
              </div>}
          />
        ))}
      </Switch>
    </div>
  );
}
