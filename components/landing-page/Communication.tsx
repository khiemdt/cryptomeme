import React from "react";
import Communication01 from "@mfc/assests/images/landing-page/communication_01.svg";
import Communication02 from "@mfc/assests/images/landing-page/communication_02.svg";
import Communication03 from "@mfc/assests/images/landing-page/communication_03.svg";
import Image from "next/image";

const Communication = () => {
  return (
    <div className="py-10 px-4 bg-gradient-to-b from-gradientOrangeStart to-gradientOrangeEnd flex flex-col items-center">
      <div
        className="text-center "
        data-wow-duration="0.75s"
        data-wow-delay="0.25s"
      >
        {/* {user?.authorized ? (
                  Nền tảng dạy Phụ đạo Trực tuyến{" "}
                </h2>
              ) : (
              )} */}
        <h2 className="text-48-72 font-extrabold text-subtitle">
          Hệ thống dạy học trực tuyến
        </h2>
        <h2 className="text-48-72 font-extrabold text-main-1">
          #1 Việt Nam
        </h2>
        <p className="text-16-24 font-medium text-gray-5c5c5c">
          Học trực tuyến như học trực tiếp
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-[32px] lg:max-w-[1260px] sm:max-w-[540px] mt-8 mx-auto sm:grid-cols-1">
        <div className="lg:max-w-[370px] sm:max-w-[510px] bg-[#ff9666] rounded-[8px] py-8 px-4 flex flex-col items-center">
          <a
            href="/"
            data-wow-duration="0.75s"
            data-wow-delay={`${0.5 * 0}s`}
            className="flex flex-col items-center"
          >
            <Image
              className="self-center"
              src={Communication01.src}
              width={120}
              height={120}
              alt="Category"
            />
            <div className="mt-8 text-center">
              <h5 className="text-20-28 font-bold text-neutral-50">
                Học bất cứ khi nào, bất cứ nơi đâu
              </h5>
              <p className="text-16-24 text-neutral-50 opacity-80">
                Tất cả các môn học đều có trên Classforme, bạn hoàn toàn có thể
                tiếp cận đến giáo trình tốt cũng như giáo viên giỏi mà không cần
                ra khỏi nhà
              </p>
            </div>
          </a>
        </div>
        <div className="lg:max-w-[370px] sm:max-w-[510px] bg-[#ff9666] rounded-[8px] py-8 px-4 flex flex-col items-center">
          <a
            href="/"
            data-wow-duration="0.75s"
            data-wow-delay={`${0.5 * 1}s`}
            className="flex flex-col items-center"
          >
            <Image
              className="self-center"
              src={Communication02.src}
              width={120}
              height={120}
              alt="Category"
            />
            <div className="mt-8 text-center">
              <h5 className="text-20-28 font-bold text-neutral-50">
                Giáo viên giàu kinh nghiệm dạy trực tuyến
              </h5>
              <p className="text-16-24 text-neutral-50 opacity-80">
                Đội ngũ giáo viên Classforme được đào tạo chuyên sâu về công cụ
                và kỹ năng dạy trực tuyến, giúp lớp học được diễn ra một cách
                hấp dẫn và chuyên nghiệp
              </p>
            </div>
          </a>
        </div>
        <div className="lg:max-w-[370px] sm:max-w-[510px] bg-[#ff9666] rounded-[8px] py-8 px-4">
          <a
            href="/"
            data-wow-duration="0.75s"
            data-wow-delay={`${0.5 * 2}s`}
            className="flex flex-col items-center"
          >
            <Image
              className="self-center"
              src={Communication03.src}
              width={120}
              height={120}
              alt="Category"
            />
            <div className="mt-8 text-center">
              <h5 className="text-20-28 font-bold text-neutral-50">
                Ôn tập dễ dàng, cha mẹ đồng hành
              </h5>
              <p className="text-16-24 text-neutral-50 opacity-80">
                Xem lại từng buổi học bất cứ lúc nào. Giúp học sinh dễ dàng ôn
                tập cũng như giúp cha mẹ đồng hành với con trong quá trình học
                tập.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Communication;
