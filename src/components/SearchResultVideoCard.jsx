import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/videoLength";
const SearchResultVideoCard = ({ key, video }) => {
  return (
    <Link to={`/videodetails/${video?.videoId}`}>
      <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4">
        {/* left side after md */}
        <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 roundex-xl bg-slate-800 overflow-auto">
          <img
            src={video?.thumbnails?.[0]?.url}
            alt=""
            className="h-full w-full"
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        {/* right side after md */}
        <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden ">
          <span className="text-lg md:text-2xl font-semibold line-clamp-2 text-white">
            {video?.title}
          </span>
          <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-white/[0.7] md:pr-24 md:my-4">
            {video?.descriptionSnippet}
          </span>
          <div className="hidden md:flex items-center">
            <div className="flex items-start mr-3">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  src={video?.author?.avatar[0]?.url}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <span className="text-sm font-semibold mt-2 text-white/[0.7] flex items-center">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                )}
              </span>
              <div className="flex text-sm font-semibold text-white/[0.7] trncate overflow-hidden">
                <span>{`${abbreviateNumber(video?.stats?.views)} views`}</span>
                <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                  .
                </span>
                <span className="truncate">{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultVideoCard;
