import React from "react";
import { Switch, Route } from "react-router-dom";
export default function DiaryDetail({ blogs }) {


  return (
    <div>
      <Switch>
        {blogs.map((route, index) => (
          <Route
            key={index}
            path={`/diary/${index}`}
            exact={route.exact}
            children={
            <div>
              <div className="text-3xl">
                {route.title}
              </div>
              <div>{route.date}</div>
              <div className="mb-5">{route.time}</div>
              <div>
              {route.body}
              </div>
              
              </div>}
          />
        ))}
      </Switch>
    </div>
  );
}
