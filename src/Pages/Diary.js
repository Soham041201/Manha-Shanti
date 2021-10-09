import mock from '../mock.json'
import DiaryList from "../components/DiaryContent";
import DiarySideBar from "../components/DiarySideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function Diary() {
  //Get data from firebase json

  return (
    <div className="flex">
      <div className="sidebar w-1/8">
        <DiarySideBar />
      </div>
      <div className="content w-7/8 ">
        <h1 className="text-3xl">Your Diary</h1>
        <Switch>
          <Router>
            <Route path="/diary/:id">
              <DiaryList
                title={mock.blogs[0].title}
                date={mock.blogs[0].date}
                body={mock.blogs[0].body}
              />
            </Route>
          </Router>
        </Switch>
      </div>
    </div>
  );
}
