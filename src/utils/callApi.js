import axios from "axios";
import HOST from "variables/host";

export default function callApi(
  endpoint,
  method = "GET",
  data = null,
  form_data = false
) {
  return axios({
    method: method,
    url: `${HOST}/${endpoint}`,
    data: data,
    headers: {
      accessToken: localStorage.getItem("accessToken")
      // accessToken:
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjp7InN0YXR1cyI6ZmFsc2V9LCJhdmF0YXIiOnsiZnJvbnRfaW1hZ2UiOltdLCJzdGF0dXMiOmZhbHNlfSwicGFzc3BvcnQiOnsibnVtYmVyIjoiYTY2MTExMTEzMyJ9LCJ0d29GQSI6eyJzdGF0dXMiOmZhbHNlfSwic2V4IjoiTUFMRSIsInByZXN0aWdlX3BvaW50cyI6MCwicmV3YXJkX3BvaW50cyI6MCwic3RhdHVzIjoiQUNUSVZFIiwicmVxdWVzdGVkX2FnZW5jeSI6bnVsbCwieW91cl9hZ2VudCI6IiIsImNoaWxkX3JlcXVlc3RlZF9hZ2VuY3kiOltdLCJwaG9uZSI6IjEyMzQ2NzMiLCJhZ2VudF9jb2RlIjoiRkIyMzc4IiwibGlzdF9jaGlsZF9hZ2VudCI6W10sImNyZWF0ZWRBdCI6IjIwMTktMDgtMjNUMDg6MjA6NDIuNDYxWiIsInVwZGF0ZWRBdCI6IjIwMTktMDgtMjNUMDg6MjA6NDIuNDYxWiIsImlkIjoiNWQ1ZmExZGExODcxNDMwMDFlNDQ1OGE1In0sImlhdCI6MTU2Njg4NDcyMSwiZXhwIjoxNTY3NDg5NTIxfQ.3-Ah_9R7VXA2HfhubWodCCc8vEUg42dGVPA20Duy_Ic"
    }
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
      if (!err.response) {
        window.location.href = "/login";
      } else {
        const status = err.response.data.status;
        if (status === 403 && window.location.href !== "/tai-khoan/dang-nhap")
          window.location.href = "/tai-khoan/dang-nhap";
      }
      throw err;
    });
}
