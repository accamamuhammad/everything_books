import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBookmark,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <main className="w-[500px] min-h-[100dvh] h-fit p-7 gap-7 flex items-center justify-start flex-col border bg-white">
      {/* Navigation */}
      <div className="w-full flex flex-row justify-between items-center">
        <FontAwesomeIcon icon={faArrowLeft} className="w-5" />
        <FontAwesomeIcon icon={faBookmark} className="w-4" />
      </div>
      {/* Header */}
      <div className="w-full gap-2 flex items-center flex-col">
        <div className="w-60 h-[295px] bg-slate-100 rounded-lg"></div>
        <h1 className="font-medium mt-0.5 text-lg leading-5">
          Catcher in the Rye
        </h1>
        <p>J.D. Sallinger</p>
        <div className="flex gap-1.5 flex-row items-center justify-center">
          <FontAwesomeIcon icon={faStar} className="w-3.5" />
          <FontAwesomeIcon icon={faStar} className="w-3.5" />
          <FontAwesomeIcon icon={faStar} className="w-3.5" />
          <FontAwesomeIcon icon={faStar} className="w-3.5" />
          <FontAwesomeIcon icon={faStar} className="w-3.5" />
        </div>
        {/* About the author */}
        <div className="space-y-2 mt-7">
          <h2 className="font-medium text-[1.15rem]">About the author</h2>
          <p className="leading-7 opacity-65 text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            quisquam iure, vero consequuntur incidunt molestias fugiat laborum
            quia aliquam explicabo veritatis ut sint quos velit repudiandae
            nihil, quaerat similique nesciunt?
          </p>
        </div>
        {/* Overview */}
        <div className="space-y-2 mt-7">
          <h2 className="font-medium text-[1.15rem]">Overview</h2>
          <p className="leading-7 opacity-65 text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            quisquam iure, vero consequuntur incidunt molestias fugiat laborum
            quia aliquam explicabo veritatis ut sint quos velit repudiandae
            nihil, quaerat similique nesciunt, vero consequuntur incidunt
            molestias fugiat laborum quia aliquam explicabo veritatis ut sint
            quos velit repudiandae nihil, quaerat similique nesciunt?
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
