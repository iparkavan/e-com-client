"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CHECK_LOGIN_USER } from "../../../utils/ApiRoutes";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {  setJwtToken, setUserInfo } from "../../store/features/authSlice";
import loginPageImage from "../../../public/login-image.svg";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";
// import { cookies } from "next/headers";
import { LuLoader2 } from "react-icons/lu";
import Cookies from "js-cookie";
import { getAccessToken } from "./access-token";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  // const isAuth = useAppSelector((state) => state.user.isAuth);

  const router = useRouter();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await axios.post(CHECK_LOGIN_USER, {
        email,
        password,
      });

      if (data) {
        // getAccessToken(data.accessToken);
        Cookies.set("token", data.accessToken);
        Cookies.set("userId", data.user._id);
        // localStorage.setItem("token", data.accessToken);
        // localStorage.setItem("userId", data.user._id);
        dispatch(setUserInfo(data.user));
        dispatch(setJwtToken(data.accessToken));
      }
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex w-full items-center mt-32 justify-center gap-20">
      <Image className="w-[30%]" src={loginPageImage} alt="LogInImage" />
      <div className="min-w-[26%] rounded-3xl bg-white ">
        <form onSubmit={submitHandler} className="p-12">
          <h2 className="text-4xl dark:text-white">Sign In</h2>
          <div className="mt-4 dark:bg-main-dark-bg bg-[#e8e8e8] rounded-xl p-6 flex flex-col gap-4">
            <input
              name="email"
              className="p-2 w-full rounded-xl "
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
          <div className="mt-5 flex items-center justify-center">
            <button
              // disabled={isLoading}
              className={`bg-[#2f80ed] text-white h-12 ${
                isLoading ? "rounded-full w-[48px]" : "w-full rounded-md"
              } transition-all duration-300 hover:drop-shadow-lg active:bg-blue-900"`}
              onClick={submitHandler}
              type="submit"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <LuLoader2 className="animate-spin" size={"30px"} />
                </div>
              ) : (
                <p className="text-xl font-semibold">LogIn</p>
              )}
            </button>
          </div>
          <div className="flex flex-col mt-3 items-center justify-center gap-3">
            <p>Or</p>
            <Link href={"/signup"} className="underline hover:text-[#2f80ed]">
              Create a New Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

{
  /* <form className="flex flex-col gap-3 w-full items-center justify-center">
        <div className="flex flex-col">
          <h1>Login to your Account</h1>
        </div>
        <input
          name="email"
          className="p-2 rounded-xl bg-[#f4f6f6] w-[25%]"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          className="p-2 rounded-xl bg-[#f4f6f6] w-[25%]"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button className="text-white bg-teal-700 px-14 py-3 rounded-full hover:drop-shadow-xl active:bg-teal-900">
            Sign In
          </button>
        </div>
      </form> */
}
