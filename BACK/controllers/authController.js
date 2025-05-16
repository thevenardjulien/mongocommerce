import bcrypt from "bcrypt";
import { User } from "../models/UserModel.js";
import { generateToken } from "../utils/generateToken.js";

export async function Login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Email ou mot de passe incorrect" });
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user.name, user.email);
      res.cookie("connect.sid", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: "lax",
        secure: false,
      });
      res.cookie("isConnected", "true", {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: "lax",
        secure: false,
      });
      return res
        .status(200)
        .json({ message: "Authentification réussie", token });
    } else {
      return res
        .status(400)
        .json({ message: "Email ou mot de passe incorrect" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Erreur serveur" });
  }
}

export async function Register(req, res) {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "Email déjà utilisé" });
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      await User.create({
        name,
        email,
        password: hashedPassword,
        role: "user",
      });
      res.status(200).json({ message: "Compte créé avec succès" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erreur lors de la création du compte" });
  }
}

export function Logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.log("Erreur lors de la destruction de la session:", err);
      return res.redirect("/");
    }
    res.clearCookie("connect.sid");
    res.redirect("/auth/login");
  });
}
