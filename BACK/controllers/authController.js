import bcrypt from "bcrypt";
import { User } from "../models/UserModel.js";

export async function Login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Email ou mot de passe incorrect" });
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        // JWT
        res.status(200).json({ message: "Authentification réussie" });
      }
    }
  } catch (err) {
    console.log(err);
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
