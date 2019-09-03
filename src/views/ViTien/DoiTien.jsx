import React, { Component } from "react";
import logo from "assets/img/logo.svg";
import PropTypes from "prop-types";

class DoiTien extends Component {
  state = {};

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Trang Ví Tiền - Đổi Tiền</p>
        </header>
      </div>
    );
  }
}

export default DoiTien;
DoiTien.propTypes = {};
DoiTien.defaultProps = {};
