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
import { NavLink } from "react-router";
import { classNames } from "@/utils/common";
import ButtonIcon from "@/components/buttons/ButtonIcon";
import { CgLogOut } from "react-icons/cg";
import { MdUpcoming } from "react-icons/md";

// import { FaClipboardList } from "react-icons/fa";
import { BsClipboard2HeartFill } from "react-icons/bs";
// import { FaClipboardCheck } from "react-icons/fa";

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
    key: "home",
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
    subMenu: ["TK Palilula", "Court Hub", "OTT"],
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
    <aside
      className={`${open ? "w-72 p-5" : "w-20 p-3"} bg-tp-main-background relative flex h-screen flex-col pt-5 duration-300 ease-in-out`}
    >
      {/* Sidebar section for toggling open/close state */}
      {/* z-100 - to be above logo when button is at the top */}
      <section
        className={`bg-tp-card-back absolute -right-4 ${!open ? "bottom-4.5" : "bottom-6"} flex h-8 w-8 cursor-pointer items-center justify-center rounded-full p-0.5 text-xl ${!open && "rotate-360"} transition-all duration-300 ease-in-out`}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <RiSidebarFoldFill className="text-tp-typography h-5 w-5" />
        ) : (
          <RiSidebarUnfoldFill className="text-tp-typography h-5 w-5" />
        )}
      </section>

      {/* Logo and title section */}
      <section className="flex items-center gap-x-4">
        <PulseLogo isInSidebar />

        <Typography
          className={`text-xl font-semibold duration-200 ease-in-out ${!open && "scale-0"} animate-pulse bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-center font-extrabold tracking-widest whitespace-nowrap text-transparent select-auto`}
        >
          Tennis Pulse
        </Typography>
      </section>

      {/* Sidebar Items section */}
      <div className="scrollbar-hide flex-1 space-y-0.5 overflow-y-auto pt-6">
        {navigation.map((item: NavigationItem) => (
          <NavLink
            key={item.key}
            to={item.key}
            className={({ isActive }) =>
              classNames(
                "text-tp-typography group flex cursor-pointer flex-col rounded-md px-4 py-3 transition-all duration-300 ease-in-out",
                isActive
                  ? "text-charcoal-950! bg-tp-primary/85"
                  : "hover:bg-zinc-800/50",
                item.gap ? "mt-9" : "mt-2",
              )
            }
          >
            <div className="relative flex h-full items-center justify-between">
              <div className="flex items-center gap-7">
                <span className="text-lg">{item.icon}</span>
                <span
                  className={`${!open && "hidden"} origin-left duration-300 ease-in-out`}
                >
                  {item.title}
                </span>
              </div>

              {item.subMenu && (
                <span
                  className={`py-full group-hover:border-tp-divider/5 absolute -right-4 flex cursor-pointer items-center justify-center rounded-r-md px-4 py-4 text-sm group-hover:border-2 group-hover:shadow-sm ${subMenus[item.key] ? "rotate-360" : ""} transition-transform duration-300 ease-in-out ${!open ? "hidden" : ""}`}
                  onClick={() => toggleSubMenu(item.key)}
                >
                  {subMenus[item.key] ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              )}
            </div>

            {/* Sidebar submenus items */}
            {item.subMenu && subMenus[item.key] && (
              <ul className={`${open ? "block pt-4 pl-3" : "hidden"}`}>
                {item.subMenu.map((subMenu, subIndex) => (
                  <li
                    key={subIndex}
                    className={`hover:bg-tp-primary/60 flex items-center gap-x-2 rounded-lg px-2 py-3 text-sm`}
                  >
                    <MdUpcoming className="text-xl" />
                    {subMenu}
                  </li>
                ))}
              </ul>
            )}
          </NavLink>
        ))}
      </div>

      {/* Profile section - profile image, player name or username, logout */}
      <div className="flex items-center gap-5 pt-5">
        {/* <Typography
          className={`${!open ? "hidden" : ""} flex-1 whitespace-nowrap`}
        >
          Matija Milojkovic
        </Typography> */}
      </div>
    </aside>
  );
};

export default Sidebar;
