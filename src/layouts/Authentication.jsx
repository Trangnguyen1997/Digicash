import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "routes/authentication";

class Authentication extends Component {
  getRoutes = () => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
      else {
        return (
          <Route
            path={prop.path}
            exact={prop.exact}
            component={prop.component}
            key={key}
          />
        );
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>{this.getRoutes()}</Switch>
      </div>
    );
  }
}

export default Authentication;
