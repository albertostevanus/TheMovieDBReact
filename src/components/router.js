import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "../components/detail";
import Homepage from "../components/homepage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
