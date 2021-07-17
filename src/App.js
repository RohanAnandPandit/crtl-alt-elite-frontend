import React from 'react';
import HomePage from "./components/HomePage";
import { Route, Switch } from "react-router";
import TipsPage from "./components/TipsPage";

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        
        <Route exact path="/tips/:website" component={TipsPage}/>

      </Switch>
      
    );
  }
}