import error_EN from "errors/error_EN.jsx";
import error_VN from "errors/error_VN.jsx";

const renderError = message => {
  const lang = localStorage.getItem("lang");
  switch (lang) {
    case "vi":
      return error_VN[message]
        ? error_VN[message]
        : "Đã có lỗi xảy ra, vui lòng thử lại sau";
    case "en":
      return error_EN[message] ? error_VN[message] : "There are eror";
    default:
      return error_EN[message];
  }
};

export default renderError;
