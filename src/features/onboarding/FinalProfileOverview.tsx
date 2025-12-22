// components
import type { UserProfileData } from "@/types/authTypes";
// icons
import { IoMdMale } from "react-icons/io";

type FinalProfileOverviewProps = {
  chips: { label: keyof UserProfileData; value: string | number }[];
};

const FinalProfileOverview = ({ chips }: FinalProfileOverviewProps) => {
  console.log(chips);
  return (
    <div className="flex items-center justify-center select-none">
      <div className="group relative">
        {/* Shadow for profile card, adds animation for image (tilt) */}
        <div className="animate-tilt absolute -inset-1 rounded-2xl bg-linear-to-r from-orange-600/10 to-yellow-200/15 py-8 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>

        {/* Section - Profile image, username, flag, gender, bio */}
        <div className="bg-tp-card-back relative grid grid-cols-2 justify-center rounded-xl px-7 py-8 leading-none backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center">
            {/* Profile image and gender container */}
            <div className="group relative">
              <div className="animate-tilt absolute -inset-0.5 rounded-full bg-linear-to-r from-orange-600 to-yellow-200 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-32 w-32 transform rounded-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  alt="Profile"
                />
              </div>
              <IoMdMale className="text-tp-typography absolute -right-4 -bottom-4 h-10 w-10 mask-t-from-50% mask-b-from-50%" />
            </div>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-x-2">
                <h2 className="bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent">
                  John Doe
                </h2>
                <span className={`fi fi-br mt-1`}></span>
              </div>
              <p className="text-tp-secondary/50 mt-1 font-medium">
                Krokster26
              </p>
              <p className="text-tp-typography mt-2 text-sm">
                Znam da igram tenis i cu te oderem u taj sport...
              </p>
            </div>
          </div>

          {/* Section 2 - country, age, utr rating and chips */}
          <div>
            <div className="mt-6 flex w-full justify-center gap-x-7">
              <div className="transform text-center transition-all duration-300 hover:scale-110">
                <p className="bg-linear-to-l from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                  BR
                </p>
                <p className="text-xs text-gray-400">COUNTRY</p>
              </div>
              <div className="transform text-center transition-all duration-300 hover:scale-110">
                <p className="bg-linear-to-r from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                  42
                </p>
                <p className="text-xs text-gray-400">AGE</p>
              </div>
              <div className="transform text-center transition-all duration-300 hover:scale-110">
                <p className="bg-linear-to-l from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                  4.0
                </p>
                <p className="text-xs text-gray-400">UTR Rating</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {/* <Chip /> */}
              <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs text-purple-300">
                One-handed backhand
              </span>
              <span className="rounded-full bg-blue-900/50 px-3 py-1 text-xs text-blue-300">
                Flat forehand
              </span>
              <span className="rounded-full bg-teal-900/50 px-3 py-1 text-xs text-teal-300">
                Wilson K Blade 98
              </span>
              <span className="rounded-full bg-teal-900/50 px-3 py-1 text-xs text-teal-300">
                Right-handed
              </span>
              <span className="rounded-full bg-teal-900/50 px-3 py-1 text-xs text-teal-300">
                176cm
              </span>
              <span className="rounded-full bg-teal-900/50 px-3 py-1 text-xs text-teal-300">
                86kg
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalProfileOverview;
