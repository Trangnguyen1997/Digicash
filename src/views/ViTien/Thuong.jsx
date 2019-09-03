import React, { Component } from "react";
import logo from "assets/img/logo.svg";
import PropTypes from "prop-types";

class Thuong extends Component {
  state = {};

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Trang Ví Tiền - Thưởng</p>
        </header>
      </div>
    );
  }
}

export default Thuong;
Thuong.propTypes = {};
Thuong.defaultProps = {};
