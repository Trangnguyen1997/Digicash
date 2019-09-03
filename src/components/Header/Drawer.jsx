import React, { Component } from "react";
// import PropTypes from "prop-types";
import { slide as Menu } from "react-burger-menu";
import Intersection43 from "../../assets/img/Intersection 43.png";
import back from "../../assets/img/dBack.png";
import { NavLink } from "react-router-dom";
import user_infor from "../../apis/authentication.api";

class Drawer extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      CMND: "",
      passport: "",
      phone: "",
      score: "",
      requested_agency: "",
      driverLicense: "",
      id: ""
    };
  }

  showSettings(event) {
    event.preventDefault();
  }
  componentDidMount() {
    user_infor
      .userInfor()
      .then(res => {
        // console.log(res.name);
        this.setState({
          name: res.name,
          CMND: res.CMND,
          passport: res.passport,
          phone: res.phone,
          score: res.score,
          requested_agency: res.requested_agency,
          driverLicense: res.driverLicense,
          id: res.id
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Menu right>
        <div className="drawer" id="drawer">
          <p className="hello">
            Xin chào, <span>{this.state.name}</span>
          </p>
          <p className="cmnd">
            <span>
              <img src={back} alt="" />
            </span>
            CMND: {this.state.CMND}
          </p>
          <p className="default">(mặc định)</p>
        </div>
        <div className="list-menu">
          <ul>
            <li>
              <a id="" className="menu-item" href="">
                <span>
                  <i className="fa fa-user-o"></i>
                </span>
                Ninh Dương Lan Ngọc
              </a>
            </li>
            <li>
              <a id="" className="menu-item" href="">
                <span>
                  <i className="fa fa-user-o"></i>
                </span>
                Ngô Kiến Huy
              </a>
            </li>
            <li>
              <a id="" className="menu-item" href="">
                <span>
                  <i className="fa fa-user-o"></i>
                </span>
                Mạc Văn Khoa
              </a>
            </li>
            <li>
              <a id="" className="menu-item" href="">
                <span>
                  <i className="fa fa-plus"></i>
                </span>
                Thêm tài khoản
              </a>
            </li>
            <hr />
            <li>
              <NavLink to="/" id="" className="menu-item" href="">
                <span>
                  <i className="fa fa-home"></i>
                </span>
                Home
              </NavLink>
            </li>
            <li>
              <a id="" className="menu-item" href="">
                <span>
                  <i className="fa fa-info-circle"></i>
                </span>
                About
              </a>
            </li>
            <li>
              <NavLink
                // eslint-disable-next-line no-undef
                to={`/tai-khoan/doi-mat-khau/${this.state.id}`}
                className="menu-item"
                href=""
              >
                <span>
                  <i className="fa fa-lock"></i>
                </span>
                Đổi mật khẩu
              </NavLink>
            </li>
            <li>
              <NavLink to="/tai-khoan/dang-nhap" className="menu-item" href="">
                <span>
                  <i className="fa fa-sign-out"></i>
                </span>
                Đăng xuất
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="Intersection-43">
          <img src={Intersection43} alt="" />
        </div>
      </Menu>
    );
  }
}
export default Drawer;
Drawer.propTypes = {};
Drawer.defaultProps = {};
