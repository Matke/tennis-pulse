import React, { useState } from "react";

import { AiFillHome } from "react-icons/ai";
import { MdSportsTennis } from "react-icons/md";
import { GiTennisCourt } from "react-icons/gi";
import { FaChevronDown, FaChevronRight, FaTrophy } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { IoTennisball } from "react-icons/io5";
import { RiSidebarFoldFill } from "react-icons/ri";
import { RiSidebarUnfoldFill } from "react-icons/ri";
import PulseLogo from "@/components/ui/PulseLogo";
import Typography from "@/components/text/Typography";

// SubMenu types
type SubMenuKeys =
  | "home"
  | "challenge"
  | "matches"
  | "tournaments"
  | "head2head"
  | "settings";

type SubMenu = Record<SubMenuKeys, boolean>;

// Navigation type
type NavigationItem = {
  title: string;
  key: SubMenuKeys;
  subMenu?: string[];
  icon: React.ReactNode;
  gap?: boolean;
};

const navigation: NavigationItem[] = [
  {
    title: "Home",
    key: "matches",
    icon: <AiFillHome className="h-6 w-6" />,
  },
  {
    title: "Challenge",
    key: "challenge",
    icon: <IoTennisball className="h-6 w-6" />,
  },
  {
    title: "Matches",
    key: "matches",
    subMenu: ["Upcoming", "Completed", "Favorite"],
    icon: <MdSportsTennis className="h-6 w-6" />,
  },
  {
    title: "Tournaments",
    key: "tournaments",
    icon: <FaTrophy className="h-6 w-6" />,
  },
  {
    title: "Head2Head",
    key: "head2head",
    icon: <FaPeopleArrows className="h-6 w-6" />,
  },
  {
    title: "Settings",
    key: "settings",
    icon: <GiTennisCourt className="h-6 w-6" />,
  },
];

const Sidebar = () => {
  // whethere sidebar is in open or closed state
  const [open, setOpen] = useState<boolean>(true);

  const [subMenus, setSubMenus] = useState<SubMenu>({
    home: false,
    challenge: false,
    matches: false,
    head2head: false,
    tournaments: false,
    settings: false,
  });

  // which sidemenu should be visible, it wont close other ones that are open
  const toggleSubMenu = (menu: SubMenuKeys) => {
    setSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div
      className={`${open ? "w-72 p-5" : "w-20 p-3"} bg-tp-main-background relative h-screen pt-8 duration-300 ease-in-out`}
    >
      {/* Sidebar section for toggling open/close state */}
      <div
        className={`border-tp-divider bg-tp-card-back absolute -right-4 bottom-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full p-0.5 text-xl ${!open && "rotate-360"} z-100 transition-all duration-300 ease-in-out`}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <RiSidebarFoldFill className="text-tp-primary h-5 w-5" />
        ) : (
          <RiSidebarUnfoldFill className="text-tp-primary h-5 w-5" />
        )}
      </div>

      {/* Logo and title section */}
      <div className="flex items-center gap-x-4">
        <PulseLogo isInSidebar />

        <Typography
          className={`text-xl font-semibold duration-200 ease-in-out ${!open && "scale-0"} animate-pulse bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-center font-extrabold tracking-widest whitespace-nowrap text-transparent select-auto`}
        >
          Tennis Pulse
        </Typography>
      </div>

      {/* Sidebar Navbar Items section */}
      <ul className="space-y-0.5 pt-6">
        {navigation.map((item: NavigationItem, index: number) => (
          <li
            key={index}
            className={`flex cursor-pointer flex-col rounded-md px-4 py-3 text-zinc-50 transition-all duration-300 ease-in-out hover:bg-zinc-800/50 hover:text-white ${item.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-zinc-800/40"}`}
          >
            <div
              className="flex items-center justify-between gap-x-4"
              onClick={() => toggleSubMenu(item.key)}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                <span
                  className={`${!open && "hidden"} origin-left duration-300 ease-in-out`}
                >
                  {item.title}
                </span>
              </div>

              {item.subMenu && (
                <span
                  className={`ml-auto cursor-pointer text-sm ${subMenus[item.key] ? "rotate-360" : ""} transition-transform duration-300 ease-in-out ${!open ? "hidden" : ""}`}
                >
                  {subMenus[item.key] ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              )}
            </div>

            {/* Sidebar submenus NAvbar ITems */}
            {item.subMenu && subMenus[item.key] && (
              <ul className="pt-4 pl-3 text-zinc-300">
                {item.subMenu.map((subMenu, subIndex) => (
                  <li
                    key={subIndex}
                    className="flex items-center gap-x-2 rounded-lg px-2 py-3 text-sm hover:bg-zinc-800"
                  >
                    <span className="text-zinc-4">
                      <FaChevronRight className="text-xs" />
                    </span>
                    {subMenu}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
