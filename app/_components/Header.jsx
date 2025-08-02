"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <Image src={"/logo.png"} alt="logo" width={40} height={25} />
        
        <span className="text-blue-800 font-bold text-xl ml-2">FinHive</span>
      </div>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 items-center">
        
          <Link href={"/dashboard"}>
            <Button
              variant="outline"
              className="rounded-full text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Dashboard
            </Button>
          </Link>

      
          <Link href={"/sign-in"}>
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;