import axios from "axios";
import HOST from "variables/host";
var FileSaver = require("file-saver");

export default function exportExcel(endpoint, suggestedFileName) {
  return axios
    .get(HOST + endpoint, {
      responseType: "blob",
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    .then(response => {
      const effectiveFileName = suggestedFileName + ".xlsx";
      FileSaver.saveAs(response.data, effectiveFileName);
    })
    .catch(response => {
      console.error(
        "Could not Download the Excel report from the backend.",
        response
      );
    });
}
