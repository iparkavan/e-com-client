import Link from "next/link";
import React from "react";
import { IconBase, IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface sidebarItemProps {
  label: string;
  icon: IconType;
  href: string;
  active: boolean;
}

const SidebarItem: React.FC<sidebarItemProps> = ({
  label,
  icon: Icon,
  href,
  active,
}) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-start rounded-xl py-1 hover:text-blue-500"
    >
      <div
        className={twMerge(
          `flex items-center justify-center rounded-xl gap-x-4 w-full p-3 hover:translate-x-2 transition-all duration-500`,
          active && " theme-gradient"
        )}
      >
        <Icon size={24} />
        <p className="w-full truncate font-semibold">{label}</p>
      </div>
    </Link>
  );
};

export default SidebarItem;
