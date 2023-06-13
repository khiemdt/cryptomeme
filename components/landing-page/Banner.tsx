import banner from "@mfc/assests/images/landing-page/banner.png";

const Banner = () => {
  return (
    <div
      className="relative min-h-[900px] w-full bg-cover bg-no-repeat bg-center flex justify-center"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-25 w-full h-full z-0 lg:hidden sm:block" />
      <div className="z-10 py-10 px-4 md:max-w-[720px] lg:max-w-[1074px] w-full">
        <h2 className="text-center lg:text-blue-053865 sm:text-48-72 text-30-40 text-white font-extrabold">
          Chào mừng thầy, cô và các bạn học sinh đến với
          <br />
          Hệ thống dạy học trực tuyến
        </h2>
        <p className="lg:text-gray-5c5c5c md:text-20-28 text-16-24 mt-4 font-medium text-center text-white">
          Học và ôn luyện các môn học, các khối lớp với các thầy cô giàu kinh
          nghiệm ở bất cứ nơi đâu, bất cứ khi nào
        </p>
        <div className="w-fit h-[40px] bg-main-1 flex items-center justify-center rounded-[6px] px-4 py-1 m-auto mt-4 cursor-pointer">
          <span className="text-white text-14-22 font-medium">
            Lớp học thử miễn phí
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
