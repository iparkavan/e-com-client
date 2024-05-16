import React, { useEffect, useRef } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  // const myRef = useRef();

  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0,
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const [entry] = entries;
  //     console.log("entry", entry);
  //   }, options);
  //   observer.observe(myRef.current);
  // }, []);

  return (
    <div className="min-w-full">
      <div className="w-full fixed z-20 backdrop-blur-md rounded-bl-xl rounded-br-xl bg-white/70">
        <Navbar />
      </div>
      <div className="flex">
        {/* <div className="w-64 bg-white drop-shadow-lg rounded-xl h-[830px] mt-[90px] fixed">
          <Sidebar />
        </div> */}
        <div className="w-full mt-[90px]">{children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
