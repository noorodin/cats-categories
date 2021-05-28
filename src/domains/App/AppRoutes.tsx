import React, { FC, memo, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingFallback from "components/LoadingFallback";

const Category = lazy(() => import("domains/Category"));
const Home = lazy(() => import("domains/Home"));

const AppRoutes: FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
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
    </Suspense>
  );
};

export default memo(AppRoutes);
