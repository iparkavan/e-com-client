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

  const router = useRouter();

  const { mutate, error, isPending: isLoading } = useSignUp();

  console.log("autherror", error);
  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      //   const { data } = await axios.post(REGISTER_THE_USER, {
      // username,
      // email,
      // password,
      //   });
      //   console.log(data);
      //   if (data) {
      //   }
      mutate(
        {
          username,
          email,
          password,
        },
        {
          onSuccess: (data) => {
            console.log(data);
            router.push("/login");
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
    // <div className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <form
    //     className="flex flex-col gap-3 w-full items-center justify-center"
    //     onSubmit={submitHandler}
    //   >
    //     <div className="flex flex-col">
    //       <h1>Signup to your Account</h1>
    //     </div>
    //     <input
    //       name="username"
    //       className="p-2 rounded-xl bg-[#f4f6f6] w-[25%]"
    //       type="text"
    //       value={username}
    //       placeholder="Username"
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <input
    //       name="email"
    //       className="p-2 rounded-xl bg-[#f4f6f6] w-[25%]"
    //       type="email"
    //       value={email}
    //       placeholder="Email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       name="password"
    //       className="p-2 rounded-xl bg-[#f4f6f6] w-[25%]"
    //       type="password"
    //       value={password}
    //       placeholder="Password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <div>
    //       <button
    //         className="text-white bg-teal-700 px-14 py-3 rounded-full hover:drop-shadow-xl active:bg-teal-900"
    //         type="submit"
    //       >
    //         Sign Up
    //       </button>
    //     </div>
    //   </form>
    // </div>

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
          <div className="mt-5 flex items-center justify-center">
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
