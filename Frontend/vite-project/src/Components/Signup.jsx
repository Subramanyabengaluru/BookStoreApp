import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:8000/user/signup", userInfo);
      console.log(response.data);
      if (response.data) {
        toast.success("Signup Successfully");
        localStorage.setItem("Users", JSON.stringify(response.data.user));
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (err.response) {
        console.error(err.response.data);
        toast.error("Error: " + err.response.data.message);
      } else {
        console.error(err);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="w-[600px] bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-full px-3 py-2 border rounded-md"
                {...register("fullname", { required: "Fullname is required" })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">{errors.fullname.message}</span>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">{errors.password.message}</span>
              )}
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 transition duration-200"
              >
                Signup
              </button>
              <p className="text-sm">
                Have an account?{" "}
                <button
                  type="button"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
