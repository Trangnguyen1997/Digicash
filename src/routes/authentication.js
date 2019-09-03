import DangNhap from "../views/TaiKhoan/DangNhap";
import DangKy from "../views/TaiKhoan/DangKy";
import DoiMatKhau from "../views/TaiKhoan/DoiMatKhau";
import QuenMatKhau from "../views/TaiKhoan/QuenMatKhau";

const routes = [
  {
    name: "Tín Dụng",
    path: "/tai-khoan/dang-nhap",
    exact: true,
    component: DangNhap
  },
  {
    name: "Tăng Điểm",
    path: "/tai-khoan/dang-ky",
    exact: true,
    component: DangKy
  },
  {
    name: "",
    path: "/tai-khoan/doi-mat-khau/:id",
    exact: true,
    component: DoiMatKhau
  },
  {
    name: "",
    path: "/tai-khoan/quen-mat-khau",
    exact: true,
    component: QuenMatKhau
  }
];

export default routes;
