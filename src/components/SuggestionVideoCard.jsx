import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/videoLength";

const SuggestionVideoCard = ({ video }) => {
  return (
    <Link to={`/videodetails/${video?.videoId}`}>
      <div className="flex mb-3">
        <div className="relative lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
          <img
            src={video?.thumbnails?.[0]?.url}
            alt=""
            className="h-full w-full"
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-white">
            {video?.title}
          </span>
          <span className="text-[12px] flex items-center lg:text-[10px] xl:text[12px] font-semibold mt-2 text-white/[0.7]">
            {video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
            )}
          </span>
          <div className="flex text-[12px] lg:text-[10px] xl:text[12px]  mt-1 font-semibold text-white/[0.7] truncate overflow-hidden">
            <span>{`${abbreviateNumber(video?.stats?.views)} views`}</span>
            <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
              .
            </span>
            <span className="truncate">{video?.publishedTimeText}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionVideoCard;
