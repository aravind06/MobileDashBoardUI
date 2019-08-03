import React from "react";
import DashBoard from "./components/dashboard";
import MobileDisplay from "./components/mobileDisplay";
import { Route, Switch } from 'react-router-dom';
export const RouterPath = (
  <Switch>
  <Route path="/" exact component ={DashBoard} />
  <Route path="/details" component ={MobileDisplay} />
  </Switch>
);