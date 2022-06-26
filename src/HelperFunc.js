export const checkInput = (lable, value) => {
  console.log("inside check", value, lable);
  if (lable === "Full Name") {
    if (value.length !== 0) {
      return true;
    }
    return false;
  }
  if (lable === "Password") {
    console.log(lable, value);
    if (value.length !== 0) {
      return true;
    }
    return false;
  }
  if (lable === "Email Address") {
    if (value.length !== 0) {
      return true;
    }
    return false;
  }
};
