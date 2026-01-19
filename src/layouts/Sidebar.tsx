import { useState } from "react";
// icons
import { AiFillHome } from "react-icons/ai";
import { MdSportsTennis } from "react-icons/md";
// icons
import { FaChevronDown, FaChevronRight, FaUser } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { IoTennisball } from "react-icons/io5";
import { RiSidebarFoldFill } from "react-icons/ri";
import { RiSidebarUnfoldFill } from "react-icons/ri";
import { MdUpcoming } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BiSolidLogOut } from "react-icons/bi";
import { HiTrophy } from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
// router
import { NavLink, useNavigate } from "react-router";
// components
import Typography from "@/components/text/Typography";
import PulseLogo from "@/components/ui/PulseLogo";
import MaleProfileIcon from "@/components/ui/MaleProfileIcon";
import FemaleProfileIcon from "@/components/ui/FemaleProfileIcon";
import Dropdown from "@/components/dropdown/Dropdown";
import ButtonIcon from "@/components/buttons/ButtonIcon";
import SidebarSkeletonLoader from "@/components/loaders/SidebarSkeletonLoader";
import ConfirmationModal from "@/components/modals/ConfirmationModal";
// utils
import { classNames } from "@/utils/common";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useAuth } from "@/store/useAuth";

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
type SubMenuItem = {
  key: string;
  icon: React.ReactNode;
};

type NavigationItem = {
  title: string;
  key: SubMenuKeys;
  subMenu?: SubMenuItem[];
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
    subMenu: [
      { key: "upcoming", icon: <MdUpcoming className="text-xl" /> },
      {
        key: "completed",
        icon: <IoCheckmarkDoneCircle className="text-xl" />,
      },
      {
        key: "favorite",
        icon: <FaHeart className="text-xl" />,
      },
    ],
    icon: <MdSportsTennis className="h-6 w-6" />,
  },
  {
    title: "Tournaments",
    key: "tournaments",
    icon: <HiTrophy className="h-6 w-6" />,
  },
  {
    title: "Head2Head",
    key: "head2head",
    icon: <FaPeopleArrows className="h-6 w-6" />,
  },
  {
    title: "Settings",
    key: "settings",
    icon: <IoMdSettings className="h-6 w-6" />,
  },
];

const defaultSubMenuState: SubMenu = {
  home: false,
  challenge: false,
  matches: false,
  head2head: false,
  tournaments: false,
  settings: false,
};

const Sidebar = () => {
  const { userProfile, isLoading, onLogout } = useAuth();
  // persist state on refresh
  // whethere sidebar is in open or closed state
  const [open, setOpen] = useLocalStorage("sidebarOpen", false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const [subMenus, setSubMenus] = useState<SubMenu>(defaultSubMenuState);

  // which sidemenu should be visible, it wont close other ones that are open
  const toggleSubMenu = (menu: SubMenuKeys) => {
    setSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const onLogoutConfirm = () => {
    onLogout();

    navigate("/login", { replace: true });
  };

  // skeleton loader for sidebar, wait for profile data to load before showing sidebar to screen
  if (isLoading) {
    return <SidebarSkeletonLoader open={open} />;
  }

  return (
    // same padding for open and closed state in order not to have strange moving of sidebar
    <aside
      className={`${open ? "w-72 p-3" : "w-20 p-3"} bg-tp-main-background relative flex h-screen flex-col pt-5 duration-300 ease-in-out`}
    >
      {/* Sidebar section for toggling open/close state */}
      {/* z-100 - to be above logo when button is at the top */}
      <section
        className={`bg-tp-card-back absolute -right-4 ${!open ? "top-1" : "top-1"} flex h-8 w-8 cursor-pointer items-center justify-center rounded-full p-0.5 text-xl ${!open && "rotate-360"} hover:bg-tp-main-background/90 transition-all duration-300 ease-in-out`}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <RiSidebarFoldFill className="text-tp-typography h-4.5 w-4" />
        ) : (
          <RiSidebarUnfoldFill className="text-tp-typography h-4.5 w-5" />
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
      <div className="scrollbar-hide flex-1 space-y-0.5 overflow-y-auto pt-2">
        {navigation.map((item: NavigationItem) => (
          <NavLink
            key={item.key}
            to={item.key}
            className={({ isActive }) =>
              classNames(
                "text-tp-typography group flex cursor-pointer flex-col rounded-md px-4 py-3 transition-all duration-300 ease-in-out",
                isActive
                  ? "text-charcoal-950 bg-tp-primary/85"
                  : "hover:bg-zinc-800/50",
                item.gap ? "mt-9" : "mt-2",
              )
            }
            // onClick={() => !item.subMenu && setSubMenus(defaultSubMenuState)}
          >
            {({ isActive }) => (
              <>
                <div
                  className={`relative flex h-full items-center justify-between ${isActive && "text-charcoal-950"}`}
                >
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
                      {subMenus[item.key] ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </span>
                  )}
                </div>

                {/* Sidebar submenus items */}
                {item.subMenu && subMenus[item.key] && (
                  <ul
                    className={`${open && isActive ? "text-charcoal-950 block pt-4 pl-3" : "hidden"}`}
                  >
                    {item.subMenu.map((subMenu: SubMenuItem) => (
                      <li
                        key={subMenu.key}
                        className={`${isActive && "hover:bg-tp-primary/60"} flex items-center gap-x-2 rounded-lg px-2 py-3 text-sm`}
                        onClick={() => console.log("Ne radi ili radi")}
                      >
                        <span>{subMenu.icon}</span>
                        {/* uppercase only first letter of key to be the label */}
                        {subMenu.key.charAt(0).toUpperCase() +
                          subMenu.key.slice(1)}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Profile section - profile image, player name or username, logout */}
      <div
        className="flex cursor-pointer items-center gap-5 rounded-md p-1 hover:bg-zinc-800/50"
        onClick={() => setOpen(!open)}
      >
        {/* Profile image or avatar */}
        {!userProfile.profileImage ? (
          <div className="group relative">
            <div className="absolute -inset-0.5 rounded-full bg-linear-to-r from-orange-200 to-yellow-200 opacity-75 blur-[0.5px] transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <div className="relative">
              <div className="h-12 w-12 transform rounded-full mask-b-from-100% object-cover transition-all duration-500 group-hover:scale-110">
                {/* Profile avatar based on gender */}
                {userProfile.gender === "male" ? (
                  <MaleProfileIcon />
                ) : (
                  <FemaleProfileIcon />
                )}
              </div>
            </div>
          </div>
        ) : (
          <img
            src={userProfile.profileImage}
            alt="profile img"
            className="h-12 w-12 scale-105 cursor-pointer rounded-full object-cover object-center"
          />
        )}

        {/* Full name */}
        <Typography
          variant="label"
          className={`${!open && "hidden"} whitespace-nowrap`}
        >
          {userProfile.firstName} {userProfile.lastName}
        </Typography>

        {/* Profile and logout menu dropdown */}
        <Dropdown
          buttonIcon={
            <ButtonIcon
              icon={<HiDotsVertical />}
              className={`${!open && "hidden"} rounded-xl hover:bg-zinc-800`}
              // backgroundColor="bg-transparent"
              themeColor="blank"
              borderColor="border-none"
              iconColor="text-tp-typography"
              hoverClass
            />
          }
          className="ml-4 cursor-pointer"
          menuPosition="bottom-12.5 right-1"
          items={[
            {
              label: "Profile",
              icon: (
                <FaUser className="text-tp-typography group-hover:text-tp-typography-secondary" />
              ), // or any other icon
              action: () => console.log("Edit clicked"),
            },
            {
              label: "Log Out",
              borderTop: true,
              icon: (
                <BiSolidLogOut className="text-tp-typography group-hover:text-tp-typography-secondary h-4 w-4" />
              ),
              action: () => setIsLogoutConfirmOpen(true),
            },
          ]}
        />
      </div>

      {/* Logout confirmation modal */}
      {isLogoutConfirmOpen && (
        <ConfirmationModal
          openModal={isLogoutConfirmOpen}
          title="Confirm Logout"
          description="Are you sure you want to log out?"
          onClose={() => setIsLogoutConfirmOpen(false)}
          onConfirm={onLogoutConfirm}
        />
      )}
    </aside>
  );
};

export default Sidebar;
