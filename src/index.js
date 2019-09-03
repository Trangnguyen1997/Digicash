import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-input-range/lib/css/index.css";
import "assets/scss/index.scss";
import App from "./layouts/App.jsx";
import * as serviceWorker from "./serviceWorker";
import Authentication from "./layouts/Authentication.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path={"/tai-khoan"}
        render={props => <Authentication {...props} />}
      />
      <Route path={"/"} render={props => <App {...props} />} />
      <App />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
