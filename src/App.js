import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../src/components/Home"
import Form from "../src/components/assigment1"
import Renk from "../src/components/assigment2"
export default function App() {
  return (
    <Router>
     

       
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/form">
          <Form/>
          </Route>
          <Route exact path="/background">
           <Renk></Renk>
          </Route>
        </Switch>
      
    </Router>
  );
}