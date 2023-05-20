import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);
  return (
    <div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all border border-blue-500 text-white">
      <div className="flex px-5 flex-col">
        {categories.map((item) => (
          <>
            <LeftNavMenuItem
              text={item.type === "home" ? "Home" : item.name}
              icon={item.icon}
              action={() => {}}
              className={`${
                selectedCategory === item.name ? "bg-white/[0.15]" : ""
              }`}
            />
            {item.divider && <hr className="my-5 border-white/[0.2]" />}
          </>
        ))}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px] flex justify-center">
          Clone by: lobnor
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
