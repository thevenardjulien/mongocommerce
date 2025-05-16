import process from "process";
import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  const token = req.cookies.mongocommercesid;

  if (!token) {
    return res.status(401).json({
      message: "Vous devez être connecté pour accéder à cette ressource",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalide: ", error });
  }
};
