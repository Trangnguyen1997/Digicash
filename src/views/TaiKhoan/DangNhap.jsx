import React, { Component } from "react";
import PropTypes from "prop-types";
import LOGO from "../../assets/img/Digicash_logo_Final.png";
import { NavLink } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmpty } from "validator";
import authentication from "../../apis/authentication.api";
import { Redirect } from "react-router-dom";
import { handleSocket} from "../../variables/socket";

const required = value => {
  if (isEmpty(value)) {
    return (
      <small className="form-text text-danger">
        Vui lòng nhập Số CMND/ Passport để đăng nhập
      </small>
    );
  }
};
const required2 = value => {
  if (isEmpty(value)) {
    return (
      <small className="form-text text-danger">
        Vui lòng nhập Mật khẩu để đăng nhập
      </small>
    );
  }
};

class DangNhap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cmnd: "",
      pass: "",
      isLoading: false
    };
  }
  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  onSubmit(e) {
    e.preventDefault();
    this.form.validateAll();
    this._login();
  }

  _login = () => {
    const data = {
      username: this.state.cmnd,
      password: this.state.pass
    };
    authentication
      .login(data)
      .then(res => {
        localStorage.setItem("accessToken", res);
        handleSocket();
        // console.log("Đăng nhập thành công và token của bạn là: " + res);
        this.setState({
          isLoading: true
        });
      })
      .catch(err => {
        console.log("Đăng nhập thất bại" + err);
        this.setState({ message: "Tài khoản hoặc mật khẩu không chính xác" });
      });
  };
  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    localStorage.clear();
  }
  render() {
    if (this.state.isLoading) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <div className="login__logo">
          <img src={LOGO} alt="" />
        </div>
        <Form
          className="login__form"
          onSubmit={e => this.onSubmit(e)}
          ref={c => {
            this.form = c;
          }}
        >
          <div className="form-group">
            <label className="form__text">Số CMND/ Passport</label>
            <Input
              type="tel"
              className="form-control"
              id="cmnd"
              validations={[required]}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label className="form__text">Mật khẩu</label>
            <Input
              type="password"
              className="form-control"
              id="pass"
              validations={[required2]}
              onChange={this.handleInput}
            />
          </div>
          <button type="submit" className="btn">
            Đăng nhập
          </button>
          <CheckButton
            style={{ display: "none" }}
            ref={c => {
              this.checkBtn = c;
            }}
          />
          <div className="login__text">
            <NavLink to="/tai-khoan/quen-mat-khau">Quên mật khẩu?</NavLink>
          </div>

          <small className="form-text text-danger">{this.state.message}</small>
        </Form>
        <div className="regis">
          <p className="regis__h1">-------------------------------</p>
          <p className="regis__h2">Bạn chưa có tài khoản?</p>
          <NavLink to="/tai-khoan/dang-ky">
            <p className="regis__h3">ĐĂNG KÝ NGAY</p>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default DangNhap;
DangNhap.propTypes = {};
DangNhap.defaultProps = {};
