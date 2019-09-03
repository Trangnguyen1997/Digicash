import TinDung from "../views/HoSo/TinDung";
import TangDiem from "../views/HoSo/TangDiem";
import TaiSan from "../views/HoSo/TaiSan";
import DonVay from "../views/XinVay/DonVay";
import TaoDon from "../views/XinVay/TaoDon";
import ChoDon from "../views/ChoVay/ChoDon";
import DonChoVay from "../views/ChoVay/DonChoVay";
import DoiTien from "../views/ViTien/DoiTien";
import HanMuc from "../views/ViTien/HanMuc";
import SoDu from "../views/ViTien/SoDu";
import Thuong from "../views/ViTien/Thuong";
import TrangChu from "../views/TrangChu/TrangChu";
import GioiThieu from "../views/GioiThieu/GioiThieu";
import ThongBao from "../components/ThongBao/ThongBao";

const routes = [
  {
    name: "Giới Thiệu",
    path: "/gioi-thieu",
    exact: true,
    component: GioiThieu
  },
  {
    name: "Tín Dụng",
    path: "/ho-so/tin-dung",
    exact: true,
    component: TinDung
  },
  {
    name: "Tăng Điểm",
    path: "/ho-so/tang-diem",
    exact: true,
    component: TangDiem
  },
  {
    name: "Tài Sản",
    path: "/ho-so/tai-san",
    exact: true,
    component: TaiSan
  },
  {
    name: "Đơn Vay",
    path: "/xin-vay/don-vay",
    exact: true,
    component: DonVay
  },
  {
    name: "Tạo Đơn",
    path: "/xin-vay/tao-don",
    exact: true,
    component: TaoDon
  },
  {
    name: "Chợ Đơn",
    path: "/cho-vay/cho-don",
    exact: true,
    component: ChoDon
  },
  {
    name: "Đơn Cho Vay",
    path: "/cho-vay/don-cho-vay",
    exact: true,
    component: DonChoVay
  },
  {
    name: "Số Dư",
    path: "/vi-tien/so-du",
    exact: true,
    component: SoDu
  },
  {
    name: "Hạn Mức",
    path: "/vi-tien/han-muc",
    exact: true,
    component: HanMuc
  },
  {
    name: "Thưởng",
    path: "/vi-tien/thuong",
    exact: true,
    component: Thuong
  },
  {
    name: "Đổi Tiền",
    path: "/vi-tien/doi-tien",
    exact: true,
    component: DoiTien
  },
  // test thông báo
  {
    name: "Thông báo",
    path: "/thongbao",
    exact: true,
    component: ThongBao
  },
  {
    path: "/",
    exact: true,
    component: TrangChu
  }
];

export default routes;
