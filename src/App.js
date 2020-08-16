import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./assets/css/stylesheets/styles.css";

import CheckIn from "./components/CheckIn";
import TrianAvailability from "./components/TrainAvailability";
import PassengerDetails from "./components/PassengerDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            />
            <Route exact path="/" component={CheckIn} />
            <Route exact path="/trainselection" component={TrianAvailability} />
            <Route
              exact
              path="/passenger/details"
              component={PassengerDetails}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
