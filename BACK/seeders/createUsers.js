import { User } from "../models/UserModel.js";
import bcrypt from "bcrypt";

export async function createUsers() {
  try {
    const john = await User.findOne({ email: "john@example.com" });
    const jane = await User.findOne({ email: "jane@example.com" });

    if (!john) {
      await User.create({
        name: "John Doe",
        email: "john@example.com",
        password: bcrypt.hashSync("123456", 10),
        role: "user",
      });
      console.log("Users created : John Doe");
    }

    if (!jane) {
      await User.create({
        name: "Jane Doe",
        email: "jane@example.com",
        password: bcrypt.hashSync("123456", 10),
        role: "user",
      });
      console.log("Users created : Jane Doe");
    }
  } catch (err) {
    console.log(err);
  }
}
