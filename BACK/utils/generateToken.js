import jwt from "jsonwebtoken";
import process from "process";

export function generateToken(userName, userEmail, options = {}) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not defined");

  const payload = { userName, userEmail };
  const defaultOptions = { expiresIn: "24h" };
  return jwt.sign(payload, secret, { ...defaultOptions, ...options });
}
