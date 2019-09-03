import axios from "axios";
import HOST from "../variables/hostimg";

export default function callApiWebView(endpoint, method = "GET", data = null) {
  return axios({
    method: method,
    url: `${HOST}${endpoint}`,
    data: data,
    headers: {
      access_token: localStorage.getItem("access_token")
    }
  }).then(res => res.data);
}

