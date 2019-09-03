export const paramFromData = data => {
  const pathname = window.location.pathname;
  const keys = Object.keys(data);
  var paramStr = "";
  keys.map((key, index) => {
    if (data[key]) {
      if (index === 0) paramStr = paramStr.concat(`?${key}=${data[key]}`);
      else paramStr = paramStr.concat(`&${key}=${data[key]}`);
    }
    return null;
  });
  return pathname + paramStr;
};

export const paramFromDatas = (data1, data2) => {
  const pathname = window.location.pathname;
  const keys_1 = Object.keys(data1);
  const keys_2 = Object.keys(data2);
  var paramStr = "";
  keys_1.map((key, index) => {
    if (data1[key]) {
      if (index === 0) paramStr = paramStr.concat(`?${key}=${data1[key]}`);
      else paramStr = paramStr.concat(`&${key}=${data1[key]}`);
    }
    return null;
  });
  keys_2.map((key, index) => {
    if (data2[key]) {
      if (index === 0) paramStr = paramStr.concat(`&${key}=${data2[key]}`);
      else paramStr = paramStr.concat(`&${key}=${data2[key]}`);
    }
    return null;
  });

  return pathname + paramStr;
};
