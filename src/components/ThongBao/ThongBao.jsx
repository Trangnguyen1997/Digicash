import React, { Component } from "react";
import PropTypes from "prop-types";
import back from "../../assets/img/back.png";
import hoantac from "../../assets/img/hoanTac.png";
import { Link } from "react-router-dom";
import socket from "../../variables/socket";
import thong_bao from "../../apis/thong_bao.api";

class ThongBao extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      thongbao: []
    };
  }
  showSettings(event) {
    event.preventDefault();
  }
  componentDidMount() {
    thong_bao
      .thongbao()
      .then(res => {
        console.log(res);
        console.log("thành công" + res);
        this.setState({
          thongbao: res
        });
        console.log("yolo", this.state.thongbao);
      })
      .catch(err => {
        console.log("lỗi" + err);
      });
  }
  render() {
    let dd = this.state.thongbao;
    return (
      <div>
        <div className="thongBao__title">
          <span onClick={this.props.toggle}>
            <img src={back} alt="" />
          </span>
          Thông báo
        </div>
        <div className="thongBao">
          <div className="scroll">
            {dd.map((thongbao, index) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="thongBao1">
                  <div className="thongBao1__content" key={index}>
                    <p className="thoiGian">
                      <li>{thongbao.createdAt}</li>
                    </p>
                    <p className="thongBao1__item">{thongbao.description}</p>
                    <div className="button">
                      <button className="tuChoi">Từ chối</button>
                      <button className="xacThuc">Xác thực</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="thongBao2">
          <p className="thongBao2__content">
            <p className="thoiGian2">
              <li>12:30 - 20/06/2019</li>
            </p>
            <span>Lê Hoa Hồng</span> vừa chuyển cho bạn<span> 10.000 đ </span>
            cùng lời nhắn{" "}
            <span>
              Trả tiền mượn bạn mua cây cảnh hồi Tết năm ngoái, cảm ơn bạn.
            </span>
          </p>
        </div> */}

          {/* <div className="thongBao3">
          <p className="thongBao3__content">
            <p className="thoiGian3">
              <li>21:10 - 31/02/2019</li>
            </p>
            Xác nhận bạn là người bảo lãnh của <span>“Trần Lê Hoàng Văn”</span>
            <div className="hoanTac">
              <span>
                <img src={hoantac} alt="" />
              </span>
              Hoàn tác
            </div>
          </p>
        </div> */}

          {/* <div className="thongBao4">
          <p className="thongBao4__content">
            <p className="thoiGian4">
              <li>21:10 - 31/02/2019</li>
            </p>
            Hệ thống của chúng tôi sẽ bảo trì vào ngày 05/03/2019. Xin cảm ơn.
          </p>
        </div> */}
        </div>
      </div>
    );
  }
}
export default ThongBao;
ThongBao.propTypes = {};
ThongBao.defaultProps = {};
