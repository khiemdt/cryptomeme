import React from "react";
import Image from "next/image";
import Assistants01 from "@mfc/assests/images/landing-page/assistants_01.png";
import Assistants02 from "@mfc/assests/images/landing-page/assistants_02.png";
import Assistants03 from "@mfc/assests/images/landing-page/assistants_03.png";
import Avatar01 from "@mfc/assests/images/landing-page/avatar_01.png";
import Avatar02 from "@mfc/assests/images/landing-page/avatar_02.png";
import Avatar03 from "@mfc/assests/images/landing-page/avatar_03.png";
import Evaluate01 from "@mfc/assests/images/landing-page/evaluate_01.svg";
import Evaluate02 from "@mfc/assests/images/landing-page/evaluate_02.svg";
import Evaluate03 from "@mfc/assests/images/landing-page/evaluate_03.svg";
import Summary from "@mfc/assests/images/landing-page/summary.png";

const Assistant = () => {
  const sections: Array<any> = [
    {
      image: Assistants01,
      information: {
        image: Avatar01,
        name: "Anh Thái Sơn",
        title: `“Con tôi đã biết phải học tập trung vào phần nào"`,
        role: "Phụ huynh học sinh",
      },
      description: {
        title: "Cá nhân hóa học tập với công nghệ A.I",
        contents: [
          "Bám sát nội dung bộ giáo dục",
          "Hơn 100.000 câu hỏi và lời giải chi tiết",
        ],
      },
    },
    {
      image: Assistants02,
      information: {
        image: Avatar02,
        name: "Hà Trang",
        title: `“Con cảm giác như đang được ngồi học trực tiếp với cô"`,
        role: "15 tuổi - Học sinh THCS",
      },
      description: {
        title: "Lớp học trực tuyến với công cụ trực quan",
        contents: [
          "Nền tảng dành riêng dạy học",
          "Công cụ giảng dạy hiện đại",
          "Tương tác 2 chiều trên bảng",
        ],
      },
    },
    {
      image: Assistants03,
      information: {
        image: Avatar03,
        name: "Chị Mai Chinh",
        title: `“Thật dễ dàng để tôi nhận ra con tiến bộ hằng ngày"`,
        role: "Phụ huynh học sinh",
      },
      description: {
        title: "Cập nhật kết quả theo thời gian thực",
        contents: [
          "Theo dõi trực tiếp quá trình phát triển của con",
          "Đánh giá chi tiết theo từng chủ đề các môn",
        ],
      },
    },
  ];
  return (
    <div className="py-10 px-4 bg-gradient-to-b from-gradientOrangeStart to-gradientOrangeEnd flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-48-72 font-extrabold text-subtitle">
          Trợ lý học tập{" "}
          <span className="text-main-1">trí tuệ nhân tạo AI</span>
        </h2>
        <p className="text-16-24 font-medium text-gray-5c5c5c">
          Thiết kế bài học hằng ngày riêng biệt cho từng học sinh, lộ trình đảm
          bảo sự tiến bộ
        </p>
      </div>
      <div>
        {sections.map((section: any, index: number) => (
          <div key={index}>
            <div
              className={
                index % 2 === 1
                  ? "lg:max-w-[1260px] sm:max-w-[600px] flex lg:flex-row-reverse flex-col-reverse gap-[40px] p-8"
                  : "lg:max-w-[1260px] sm:max-w-[600px] flex lg:flex-row flex-col gap-[40px] p-8"
              }
            >
              <div className="w-fit">
                <div className="flex gap-[24px] mb-6">
                  <img
                    src={section.information.image.src}
                    className="sm:w-[138px] sm:h-[138px] w-[100px] h-[100px]"
                    alt="avatar"
                  />
                  <div>
                    <h5 className="md:text-30-40 text-20-32 text-[#FFBC00] font-bold md:max-w-[438px]">
                      {section.information.title}
                    </h5>
                    <p className="text-16-24 font-bold text-subtitle">
                      {section.information.name}
                    </p>
                    <p className="text-14-22 text-black text-opacity-40 font-normal">
                      {section.information.role}
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="text-20-28 font-bold text-subtitle">
                    {section.description.title}
                  </h5>
                  <ul className="list-disc pl-4">
                    {section.description.contents.map((content: string) => (
                      <li
                        key={content}
                        className="text-16-24 text-gray-5c5c5c font-medium"
                      >
                        {content}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-fit">
                <Image
                  src={section.image.src}
                  width={530}
                  height={410}
                  alt="assistant"
                />
              </div>
            </div>
            <hr className="max-w-[370px] bg-[#FFD6BF] h-1 rounded-full m-auto" />
          </div>
        ))}
      </div>
      <div className="text-center mt-10 flex flex-col items-center">
        <p className="text-16-24 font-medium text-gray-5c5c5c">
          Tham gia <span className="text-main-1">Classforme</span> với
        </p>
        <h2 className="text-48-72 font-extrabold text-subtitle">
          BUỔI ĐÁNH GIÁ & HỌC THỬ <span className="text-main-1">MIỄN PHÍ</span>
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-[32px] lg:max-w-[1260px] sm:max-w-[540px] py-8">
        <div className="flex flex-col gap-[32px] max-w-[370px] items-center">
          <div className="w-fit">
            <Image
              src={Evaluate01.src}
              width={268}
              height={206}
              alt="evaluate"
            />
          </div>
          <p className="text-20-28 font-bold text-gray-5c5c5c text-center">
            Đăng ký buổi học thử miễn phí với chuyên viên tư vấn giáo dục
          </p>
        </div>
        <div className="flex flex-col gap-[32px] max-w-[370px] items-center">
          <div className="w-fit">
            <Image
              src={Evaluate02.src}
              width={268}
              height={206}
              alt="evaluate"
            />
          </div>
          <p className="text-20-28 font-bold text-gray-5c5c5c text-center">
            Làm bài đánh giá năng lực tổng quát và tham gia buổi học thử miễn
            phí
          </p>
        </div>
        <div className="flex flex-col gap-[32px] max-w-[370px] items-center">
          <div className="w-fit">
            <Image
              src={Evaluate03.src}
              width={268}
              height={206}
              alt="evaluate"
            />
          </div>
          <p className="text-20-28 font-bold text-gray-5c5c5c text-center">
            Nhận được bản báo cáo và phân tích năng lực, thiên hướng, định hướng
            nghề nghiệp phù hợp ngay tức thì
          </p>
        </div>
      </div>
      <button className="w-36 h-10 bg-main-1 text-white rounded-[6px] shadow-md text-14-22 font-medium">
        Đăng ký ngay
      </button>
      <div className="w-fit mx-auto my-8">
        <Image src={Summary.src} width={730} height={559} alt="summary" />
      </div>
      <p className="text-20-28 text-subtitle font-bold max-w-[770px] text-center">
        Chuyên viên tư vấn giáo dục của chúng tôi sẽ giải thích kết quả chuẩn
        đoán và đề xuất bước tiếp theo để giúp con bạn cải thiện
      </p>
    </div>
  );
};

export default Assistant;
