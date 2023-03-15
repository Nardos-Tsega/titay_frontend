import { useState } from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { CgShare } from "react-icons/cg";
export default function VideoSidebar() {
  const [liked, setLiked] = useState(false);
  return (
    //   VideoSidebar
    <div className="absolute top-[45%] right-2 text-white">
      {/* videosidebar_button */}
      <div className="p-4 flex flex-col gap-1 items-center">
        {liked ? (
          <MdOutlineFavorite onClick={() => setLiked(false)} />
        ) : (
          <MdOutlineFavoriteBorder onClick={() => setLiked(true)} />
        )}
        <p className="text-[12px]">{liked ? 101 : 100}</p>
      </div>
      <div className="p-4 flex flex-col gap-1 items-center">
        <AiFillMessage />
        <p className="text-[12px]">345</p>
      </div>
      <div className="p-4 flex flex-col gap-1 items-center">
        <CgShare />
        <p className="text-[12px]">201</p>
      </div>
    </div>
  );
}
