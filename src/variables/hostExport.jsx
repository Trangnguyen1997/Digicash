var HOST = "";
if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
    /^192(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
) {
  // HOST = "/cms/api";
  HOST = "http://shv.wejelly.com";
} else {
  HOST = window.location.protocol + "//" + window.location.hostname;
}

export default HOST;
