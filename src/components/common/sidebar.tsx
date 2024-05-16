"use client";

import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import SidebarItem from "./sidebar-item";

const Sidebar = () => {
  const pathname = usePathname();

  const sidebarRoutes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: HiHome,
        label: "Products",
        active: pathname === "/products",
        href: "/products",
      },
      {
        icon: HiHome,
        label: "Shop",
        active: pathname === "/shop",
        href: "/shop",
      },
    ],
    [pathname]
  );

  return (
    <div className="p-4">
      <div className="h-full w-full">
        {sidebarRoutes.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
