const mobileAndEmailCheck = (mobileNumber, email) => {
  const numberRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let status = 0;
  let response = "";

  if (!numberRegex.test(mobileNumber)) {
    return { status: 400, response: "Enter a valid mobilenumber" };
  } else if (!emailRegex.test(email)) {
    return { status: 400, response: "Enter a valid email" };
  } else {
    return { status: 200, response: "" };
  }
};

export { mobileAndEmailCheck };
