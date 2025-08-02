"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav() {
  // NOTE: Corrected duplicate 'id' for Budgets to prevent potential issues.
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Incomes",
      icon: CircleDollarSign,
      path: "/dashboard/incomes",
    },
    {
      id: 3,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 4,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 5,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen p-5 border-r shadow-sm flex flex-col bg-white">
      {/* Logo */}
      <div className="flex flex-row items-center">
        {/* Assuming the SVG icon is blue, if not, it should be made so */}
        <Image src={"/logo.png"} alt="logo" width={40} height={25} />
        <span className="text-blue-800 font-bold text-xl ml-2">FinHive</span>
      </div>

      {/* Menu List */}
      <div className="mt-8 flex-grow">
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.id}>
            <div
              className={`flex gap-3 items-center
                        p-3 mb-2 cursor-pointer rounded-lg
                        transition-colors duration-200
                        font-medium
                        ${
                          path === menu.path
                            ? "bg-blue-100 text-blue-700" // Active state
                            : "text-slate-600 hover:bg-blue-50 hover:text-blue-700" // Default and hover states
                        }
                      `}
            >
              <menu.icon className="h-5 w-5" />
              {menu.name}
            </div>
          </Link>
        ))}
      </div>

      {/* Profile Section */}
      <div className="flex gap-3 items-center p-3 cursor-pointer rounded-lg transition-colors hover:bg-slate-100">
        <UserButton />
        <span className="font-medium text-slate-700">Profile</span>
      </div>
    </div>
  );
}

export default SideNav;
