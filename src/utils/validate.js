export function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
  //output true/false
}

export const validateInput = (type, value) => {
  if (!value) {
    return "invalid";
  } else if (type === "email") {
    if (!validateEmail(value)) return "invalid";
  } else if (type === "phone") {
    if (!validateEmail(value)) return "invalid";
  }
};

export const validatePassword = password => {
  var passRex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,50}$/;
  if (passRex.test(password)) {
    return true;
  }
  return false;
};
