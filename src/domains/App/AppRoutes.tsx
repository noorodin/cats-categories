import React, { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";

import Category from "domains/Category";
import Home from "domains/Home";

const AppRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path={`/category`}>
        <Category />
      </Route>
      <Route path="*">
        <h1>Not Found!</h1>
      </Route>
    </Switch>
  );
};

export default memo(AppRoutes);
