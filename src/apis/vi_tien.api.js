// import axios from "axios";
// import HOST from "variables/host";
import callApi from "utils/callApi";

const vi_tien = {
  vitien() {
    return callApi("wallet-credit-debit", "GET")
      .then(res => res)
      .catch(err => {
        throw err;
      });
  },
  thanhtoan() {
    return callApi("loan-payment/getlistloanpaying", "GET")
      .then(res => res)
      .catch(err => {
        throw err;
      });
  }
};

export default vi_tien;
