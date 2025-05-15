import { User } from "../models/UserModel.js";
import bcrypt from "bcrypt";

export async function createAdminUser() {
  try {
    const admin = await User.findOne({ email: "admin@admin.fr" });
    if (!admin) {
      await User.create({
        name: "admin",
        email: "admin@admin.fr",
        password: bcrypt.hashSync("admin", 10),
        role: "admin",
      });
      console.log("Created admin : ", admin.name);
    }
  } catch (error) {
    console.log(error);
  }
}
