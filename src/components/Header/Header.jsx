import React from "react";
import logo from "../../assets/img/Digicash_logo_Final.png";
import notification from "../../assets/img/notification.png";
import menu from "../../assets/img/menu.png";
import {
  Collapse,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LoginButton from "../Button/LoginButton";
import Drawer from "./Drawer";
import ThongBao from "../ThongBao/ThongBao";
import { listenNotiFromServer } from "../../variables/socket";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isLogging: false,
      isNotiShow: false
    };
  }
  componentWillMount() {
    const arr = listenNotiFromServer();
    console.log(arr);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="header">
        {/*  noti={} bỏ vào thongbao */}
        {this.state.isNotiShow && <ThongBao />}
        <Navbar color="light" light expand="md">
          <Link to="/">
            <img src={logo} className="img-logo-header" alt="" />
          </Link>
          {this.state.isLogging ? (
            <LoginButton titleButton="Đăng nhập ngay" />
          ) : (
            <div className="Navbar-icons">
              <div className="Navbar-toggler-notification">
                <img src={notification} alt="" />
              </div>
              {/* <NavbarToggler onClick={this.toggle} /> */}
              <button className="navbar-toggler" onClick={this.toggle}>
                <span
                  className="navbar-toggler-icon"
                  style={{ backgroundImage: `url(${menu})` }}
                >
                  <Drawer />
                </span>
              </button>
            </div>
          )}
        </Navbar>
      </div>
    );
  }
}

export default Header;
Header.propTypes = {};
Header.defaultProps = {};
