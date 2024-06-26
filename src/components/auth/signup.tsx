"use client";

import axios from "axios";
import React, { useState } from "react";
import { REGISTER_THE_USER } from "../../../utils/ApiRoutes";
import { useRouter } from "next/navigation";
import { useSignUp } from "../../hooks/auth-hooks";
import loginPageImage from "../../../public/login-image.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const router = useRouter();

  const { mutate, error, isPending: isLoading } = useSignUp();

  console.log("autherror", error);
  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      mutate(
        {
          username,
          email,
          password,
        },
        {
          onSuccess: (data) => {
            console.log(data);
            setData(data);
          },
        }
      );
      // setUsername("");
      // setEmail("");
      // setPassword("");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full items-center mt-32 justify-center gap-20">
      <Image className="w-[30%]" src={loginPageImage} alt="LogInImage" />
      <div className="min-w-[26%] rounded-3xl bg-white ">
        <form onSubmit={submitHandler} className="p-12">
          <h2 className="text-4xl dark:text-white">Sign UP</h2>
          <div className="mt-4 dark:bg-main-dark-bg bg-[#e8e8e8] rounded-xl p-6 flex flex-col gap-4">
            <input
              name="username"
              className="p-2 w-full rounded-xl"
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              name="email"
              className="p-2 w-full rounded-xl"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="password"
              className="p-2 rounded-xl w-full"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between dark:text-white mt-5">
            <div className="flex items-center justify-center text-center">
              <label htmlFor="checkbox-id">
                <input type="checkbox" size={30} id="checkbox-id" /> Remember Me
              </label>
            </div>
            <Link href={"#"} className="underline hover:text-[#2f80ed]">
              Forgot Password
            </Link>
          </div>
          {data && (
            <p className="flex mt-2 justify-center p-2 item-center text-green-700 font-semibold">
              {data.message}
            </p>
          )}
          {error && (
            <p className="flex mt-2 justify-center p-2 item-center text-red-700 font-semibold">
              {error.response.data}
            </p>
          )}
          <div className="mt-4 flex flex-col items-center justify-center">
            <button
              // disabled={isLoading}
              className={`bg-[#2f80ed] text-white p-3 ${
                isLoading ? "rounded-full w-[43px]" : "w-full rounded-md"
              } transition-all duration-300 hover:drop-shadow-lg active:bg-blue-900"`}
              onClick={submitHandler}
              type="submit"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <AiOutlineLoading3Quarters
                    className="animate-spin"
                    size={"20px"}
                  />
                </div>
              ) : (
                <p className="text-xl font-semibold">Sign Up</p>
              )}
            </button>

            <p className="flex mt-4 justify-center items-center">
              Already have an account? &nbsp;
              <span className="underline text-blue-400 cursor-pointer">
                Sign In
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
