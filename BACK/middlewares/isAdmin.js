import { User } from "../models/UserModel.js";

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.user.userEmail });

    if (!user) {
      return res.status(401).json({ message: "Utilisateur non trouvé" });
    }

    if (user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Accès réservé aux administrateurs" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};
