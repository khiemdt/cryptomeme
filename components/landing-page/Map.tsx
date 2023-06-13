import React from "react";
import BackgroundMap from "@mfc/assests/images/landing-page/bg-map.png";

const Map = () => {
  return (
    <div
      className="relative py-10 px-4 min-h-[1062px] grid grid-rows-6"
      style={{ backgroundImage: `url(${BackgroundMap.src})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-25 w-full h-full z-0 lg:hidden sm:block" />
      <div className="z-10 max-w-[713px] h-fit col-start-12 row-start-2">
        <h2 className="text-48-72 font-extrabold lg:text-subtitle sm:text-white">
          Hơn <span className="text-main-1">5000 +</span> Giáo viên và
          học sinh cùng tham gia Classforme
        </h2>
        <p className="text-20-28 font-bold lg:text-gray-5c5c5c sm:text-white">
          Đồng hành cùng những giáo viên giỏi, mục tiêu điểm{" "}
          <span className="text-main-1">9, 10</span> gần hơn bao giờ hết
        </p>
      </div>
    </div>
  );
};

export default Map;
