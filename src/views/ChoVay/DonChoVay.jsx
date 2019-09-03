import React, { Component } from "react";
import logo from "assets/img/logo.svg";
import PropTypes from "prop-types";
import Navtab from "../../components/Navtab/Navtab";

class DonChoVay extends Component {
  state = {};

  render() {
    const routeChoVay = [
      {
        name: "Chợ đơn",
        path: "/cho-vay/cho-don",
        exact: true
      },
      {
        name: "Đơn cho vay",
        path: "/cho-vay/don-cho-vay"
      }
    ];
    return (
      <div className="donchovay-container">
        <Navtab navList={routeChoVay} />
      </div>
    );
  }
}

export default DonChoVay;
DonChoVay.propTypes = {};
DonChoVay.defaultProps = {};
