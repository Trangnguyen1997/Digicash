import formatNumber from "./formatNumber";

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export function getDateArray(startDate, stopDate) {
  // console.log(startDate);
  // console.log(stopDate);
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate < stopDate) {
    const date = new Date(currentDate);
    const year = date.getFullYear();
    const month = formatNumber(parseInt(date.getMonth()) + 1);
    const day = formatNumber(date.getDate());
    dateArray.push(year + "-" + month + "-" + day);
    currentDate = currentDate.addDays(1);
  }
  console.log(dateArray);
  return dateArray;
}

export function getDateFormat(date) {
  var dateFormat = new Date(date);
  const year = dateFormat.getFullYear();
  const month = formatNumber(parseInt(dateFormat.getMonth()) + 1);
  const day = formatNumber(dateFormat.getDate());
  dateFormat = year + "-" + month + "-" + day;
  return dateFormat;
}

// export const getDateArrayEnd = (start, end) => {
//   var arr = new Array();
//   var dt = new Date(start);
//   while (dt < end) {
//     const date = new Date(dt);
//     const year = date.getFullYear();
//     const month = formatNumber(parseInt(date.getMonth()) + 1);
//     const day = formatNumber(date.getDay());
//     arr.push(year + "-" + month + "-" + day);
//     dt.setDate(dt.getDate() + 1);
//   }
//   return arr;
// };
