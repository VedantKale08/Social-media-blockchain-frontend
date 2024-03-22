"use client"
import React, { useMemo } from "react";
import DenZLogo from "../../public/assets/images/logo.png";
import Image from "next/image";
import { Home, TrendingUp, User, Settings, LogOut, Plus } from "lucide-react";
import { Button } from "@mui/material";
import { tabsStore } from "@/store/tabState";

const Sidebar = () => {
  const setTab = tabsStore((state) => state.setTab);
  const tab = tabsStore((state) => state.tab);
  const tabs = useMemo(
    () => [
      {
        name: "Home",
        icon: Home,
      },
      {
        name: "Trending",
        icon: TrendingUp,
      },
      {
        name: "Profile",
        icon: User,
      },
      {
        name: "Settings",
        icon: Settings,
      },
    ],
    []
  );
  return (
    <div className="border h-screen sticky top-0 flex flex-col">
      <Image src={DenZLogo} alt="" className="w-[80%]"></Image>
      <div className="p-6 flex flex-col gap-2">
        {tabs.map((tabObj, i) => (
          <div
            key={i}
            className={`flex gap-3 p-4 items-center transition-all hover:bg-gray-200 cursor-pointer rounded-md ${
              tab === tabObj.name ? 'bg-gray-200' : 'bg-white'
            }`}
            onClick={() => setTab(tabObj.name)}
          >
            <tabObj.icon size={25} />
            <p className="text-lg">{tabObj.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 flex-1 p-6 justify-end">
        <Button
          style={{
            backgroundColor: "rgb(59, 130, 246)",
            color: "white",
            paddingTop: "12px",
            paddingBottom: "12px",
            borderRadius: "999px",
            fontSize: "16px",
            fontWeight: "semibold",
          }}
        >
          Post
        </Button>
        <div className="flex w-full gap-3 p-4 items-center transition-all hover:bg-gray-200 cursor-pointer rounded-md">
          <LogOut size={25} />
          <p className="text-lg">Log out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;