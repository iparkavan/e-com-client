"use client";

import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import Sidebar from "../../components/common/sidebar";
import Cookies from "js-cookie";
import { setJwtToken } from "../../store/features/authSlice";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [userId, setUserId] = useState(null);
  // console.log("sercives", token)

  const { currentUser } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  // const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenId = Cookies.get("token");
    dispatch(setJwtToken(tokenId));
  }, []);

  return (
    <div className="">
      <div className="w-64 left-3 bg-white/70 backdrop-blur-md rounded-xl min-h-[745px] fixed">
        <Sidebar />
      </div>
      <div className="ml-[280px] mx-3">{children}</div>
    </div>
  );
}
