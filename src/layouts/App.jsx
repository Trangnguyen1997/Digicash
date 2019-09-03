import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import routes from "routes/app";
import Navbar from "../components/Navbar/Navbar";

class App extends Component {
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
        <Header></Header>
        <Switch>{this.getRoutes()}</Switch>
        <Navbar></Navbar>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
