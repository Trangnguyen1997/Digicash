import callApi from "utils/callApi";

const thong_bao = {
  thongbao() {
    return callApi("getall-notification", "GET")
      .then(res => res)
      .catch(err => {
        throw err;
      });
  },
  chapnhan(data){
    return callApi("/confirm-agency/APPROVE", "PUT", data)
      .then(res => res)
      .catch(err => {
        throw err;
      });
  }
};
export default thong_bao;
