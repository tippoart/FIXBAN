import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { LuLogIn } from "react-icons/lu";
import Link from "next/link"

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic untuk signup di sini, misalnya memanggil API
    console.log("Form data submitted:", formData);

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log("Response:", data);
  };

  return (
    <div className="flex justify-center items-center p-8 bg-zinc-700 h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-md  w-80  lg:w-1/3  ">
        <h2 className="text-2xl font-bold text-center mb-6">Masuk</h2>
        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Surel
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Contoh : gugun@gmail.com"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm  focus:border-indigo-500"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
         
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Kata Sandi
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center gap-2 items-center bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
           Masuk
            <LuLogIn />
          </button>
        </form>
        <p className="mt-4 text-center">
          Belum Punya Akun?{" "}
          <Link href="/Signup" className="text-blue-600">
            Daftar
          </Link>
        </p>
        

      </div>
    </div>
  );
};

export default SignupPage;
