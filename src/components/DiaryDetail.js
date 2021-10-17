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
            children={<div>{route.body}</div>}
          />
        ))}
      </Switch>
    </div>
  );
}
