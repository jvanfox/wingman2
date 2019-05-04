import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./login.js";
import Register from "./register.js";
import Main from "./main.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/main" component={Main}/>
                   </Switch>
        </div>
      </Router>
    );
  }
}

export default App;