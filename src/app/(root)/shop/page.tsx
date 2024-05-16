"use client";

import React, { useEffect } from "react";
import Shop from "../../../components/shop/shop";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useRouter } from "next/navigation";
import { setIsAuth, setUserInfo } from "../../../store/features/authSlice";

const page = () => {
  // const dispatch = useAppDispatch();
  // const router = useRouter();
  // const isAuth = useAppSelector((state) => state.user.isAuth);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     dispatch(setIsAuth({ token: token, isAuth: true }));
  //   }
  //   if (!isAuth) {
  //     router.push("/login");
  //   }
  // }, []);

  return (
    <div>
      <Shop />
    </div>
  );
};

export default page;
