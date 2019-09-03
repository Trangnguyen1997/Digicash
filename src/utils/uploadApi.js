import axios from "axios";
import HOST from "../variables/host";
export default function uploadApi(endpoint, formData) {
  return axios({
    method: "POST",
    url: `${HOST}/${endpoint}`,
    data: formData,
    headers: {
      "content-type": "multipart/form-data",
      access_token: localStorage.getItem("access_token")
    },
  }).then(res => res.data);
}
