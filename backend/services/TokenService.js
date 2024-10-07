import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
};

export const decodeToken = (token) => {
  // Decode a token
  let decodedToken;

  try {
    return (decodedToken = jwt.verify(token, process.env.SECRET_KEY));
  } catch (error) {
    throw new Error("Invalid token (or) Expired token");
  }
};
