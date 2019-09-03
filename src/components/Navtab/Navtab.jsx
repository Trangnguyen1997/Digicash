import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class Navtab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav-tabs">
        {this.props.navList.map((navItem, index) => {
          return (
            <NavLink
              key={index}
              to={navItem.path}
              className="nav-tabs__item"
              style={{ opacity: "0.5" }}
              exact
              activeStyle={{
                opacity: "1",
                borderBottom: "2px solid #357ced"
              }}
            >
              {navItem.name}
            </NavLink>
          );
        })}
      </div>
    );
  }
}

export default Navtab;
Navtab.propTypes = {
  navList: PropTypes.string
};
Navtab.defaultProps = {};
