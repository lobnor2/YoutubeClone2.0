import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
const Feed = () => {
  return (
    <div className="flex flex-row h-[calc(100%-56px)] border border-red-700">
      <LeftNav />
    </div>
  );
};

export default Feed;
