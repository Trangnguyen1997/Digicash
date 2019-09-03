import React, { Component } from "react";
import logo from "assets/img/logo.svg";
import PropTypes from "prop-types";

class DonVay extends Component {
  state = {};

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Trang Xin Vay - Đơn Vay</p>
        </header>
      </div>
    );
  }
}

export default DonVay;
DonVay.propTypes = {};
DonVay.defaultProps = {};
