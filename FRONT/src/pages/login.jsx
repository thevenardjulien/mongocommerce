import { useState } from "react";
import { useStore } from "../store/userStore";
import Layout from "../layout";
import { fetchLogin } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const setToken = useStore((state) => state.setToken)

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchLogin(form.email, form.password);
    if(response.message && response.message === "Authentification réussie") {
      setMessage(response.message);
      setToken(response.token);
      navigate("/");
    } else {
      setMessage(response.message || "Something went wrong");
      console.log(response);
    }
  };
  

  return (
    <Layout>
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded transition"
          >
            Register
          </button>
          {message && (
            <p className="italic">{message}</p>
          )}
        </form>
      </div>
    </Layout>
  );
}
