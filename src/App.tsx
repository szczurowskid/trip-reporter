import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ReportDetails from "./containers/ReportDetails";
import ReportList from "./containers/ReportList";
import Navigation from "./components/Navigation";

const App: React.FC = () => {
  return (
      <Router>
        <Navigation/>
        <main>
          <Switch>
            <Route path="/report/:id">
              <ReportDetails />
            </Route>
            <Route path="/">
              <ReportList />
            </Route>
          </Switch>
        </main>
      </Router>
  );
}

export default App;
