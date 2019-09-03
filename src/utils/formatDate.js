import moment from "moment";
import formatNumber from "./formatNumber";
require("moment/locale/vi");

export const formatHours = hours => {
  const Hours = Math.round(hours * 100) / 100;
  return Hours;
};

export const formatStringToDate = dateString => {
  const date = moment(dateString).format("DD-MM-YYYY");
  return date;
};

// show MMMM YYYY
export const formatStringToDateMY = dateString => {
  const date = moment(dateString).format("MMMM YYYY");
  return date;
};

export const formatStringToTime = dateString => {
  const date = moment(dateString).locale("vi");
  return (
    formatNumber(date.hour()) +
    ":" +
    formatNumber(date.minute()) +
    " " +
    formatNumber(date.date()) +
    "/" +
    formatNumber(date.month() + 1) +
    "/" +
    formatNumber(date.year())
  );
};

export const formatStringToTimeHMS = dateString => {
  const date = moment(dateString).locale("vi");
  return formatNumber(date.hour()) + ":" + formatNumber(date.minute());
};

export const countTime = dateString => {
  const date = new moment(dateString).fromNow();
  return date;
};

export const getPreviousDate = () => {
  var today = new Date();
  var dd = "01";
  var mm = "";
  if (today.getMonth() === 0) {
    mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  } else {
    mm = String(today.getMonth()).padStart(2, "0");
  }
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  return today;
};

export const getNextDate = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  return today;
};

export const formatStringToDateEnd = dateString => {
  var date = new Date(dateString);
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = "";
  if (date.getMonth() === 0) {
    mm = "12";
  } else {
    mm = String(date.getMonth()).padStart(2, "0");
  }
  var yyyy = String(date.getFullYear() + 6); // childlist hỗ trợ khi con nhỏ bé hơn 6 tuổi => +6

  date = mm + "/" + dd + "/" + yyyy;

  return date;
};
