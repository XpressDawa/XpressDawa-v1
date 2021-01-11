import './App.css';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Homepage from "./components/Home/homepage";
import Lastpage from "./components/Last/Lastpage";
import Login from "./components/GetStarted/Login";
import Profile from "./components/Profile/Profile";
import Thank from "./components/Thank/Thank";
// https://reactrouter.com/web/guides/quick-start
import { Route , withRouter, Switch} from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <NavbarContainer />
    <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Homepage} />
          <Route path="/" component={Lastpage} />
          <Route path="/login" component={Login} />
    </Switch>
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded mr-2" alt="..." />
        <strong class="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
    </div>
  );
}

export default withRouter(App);
// https://blog.theodo.com/2016/02/introduction-to-react/ 