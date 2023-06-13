import React from "react";
import Image from "next/image";
import DoubleMarkIcon from "@mfc/assests/images/landing-page/double_mark.svg";
import FeedbackAvatar01 from "@mfc/assests/images/landing-page/feedback-avatar_01.png";
import FeedbackAvatar02 from "@mfc/assests/images/landing-page/feedback-avatar_02.png";
import FeedbackAvatar03 from "@mfc/assests/images/landing-page/feedback-avatar_03.png";
import ReturnImage01 from "@mfc/assests/images/landing-page/return_01.png";
import ReturnImage02 from "@mfc/assests/images/landing-page/return_02.png";
import CheckIcon from "@mfc/assests/images/landing-page/check.svg";
import BasicButton from "../common/BasicButton";

const About = () => {
  const listAbout: Array<any> = [
    {
      name: "Chị Nguyễn Thùy Linh",
      role: "Phụ huynh - Nội trợ",
      image: FeedbackAvatar01,
      detail:
        "Tôi có con gái 4 tuổi, để chuẩn bị cho cháu vào lớp 1 thì tôi rất muốn dạy cháu những kiến thức cơ bản, những kỹ năng mềm nhưng lại không biết tìm lộ trình học bài bản ở đâu. Thật may tôi đã có Classforme giúp đỡ.",
    },
    {
      name: "Anh Nguyễn Tùng Sơn",
      role: "Phụ huynh học sinh",
      image: FeedbackAvatar02,
      detail:
        "Cháu nhà tôi năm nay học lớp 2, mỗi ngày đi học về tôi thấy cháu được giao rất nhiều bài tập, tuy chỉ là những phép tính cộng trừ đơn giản nhưng tôi không có thời gian dạy cháu. Classforme đã giúp tôi giải quyết vấn đề này.",
    },
    {
      name: "Chị Nguyễn Bảo Ngọc",
      role: "Phụ huynh - Chuyên viên Bảo hiểm",
      image: FeedbackAvatar03,
      detail:
        "Con tôi năm nay học lớp 8, chỉ còn một năm nữa là bước vào kì thi tuyển sinh cấp 3, tôi muốn tìm cho con một giáo viên có nghiệp vụ, tâm huyết để dạy và truyền động lực học cho cháu, và tôi đã tìm thấy trong Classforme.",
    },
  ];
  return (
    <div className=" bg-gradient-to-t from-gradientOrangeStart to-gradientOrangeEnd py-10 px-4">
      <div>
        <h2 className="text-48-72 font-extrabold text-subtitle text-center">
          Mọi người nói gì về{" "}
          <span className="text-main-1">Classforme</span>
        </h2>
      </div>
      <div className="py-8 flex lg:flex-row sm:flex-col gap-[32px] items-center justify-center">
        {listAbout.map((about: any, index: number) => (
          <div
            key={index}
            className="lg:max-w-[370px] sm:max-w-[510px] bg-white rounded-[8px] px-4 pb-8"
          >
            <div className="py-6 w-fit m-auto">
              <Image
                src={DoubleMarkIcon.src}
                alt="icon"
                width={56}
                height={46}
              />
            </div>
            <p className="text-center text-16-24 text-[#021628] italic font-normal">
              {about.detail}
            </p>
            <div className="w-fit mx-auto my-4">
              <Image
                src={about.image.src}
                alt="icon"
                width={126}
                height={126}
              />
            </div>
            <div className="text-center">
              <p className="text-[#021628] mb-2">{about.name}</p>
              <p className="text-black opacity-40">{about.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-center items-center align-middle lg:flex-row sm:flex-col">
          <div className="max-w-[570px]">
            <h2 className="text-48-72 text-subtitle font-extrabold">
              Trở thành giáo viên của{" "}
              <span className="text-main-1">Classforme</span>
            </h2>
            <p className="text-20-28 font-semibold text-gray-5c5c5c mt-2">
              Gia tăng thu nhập và chia sẻ kho tàng tri thức đến học sinh cả
              nước. Đăng ký để trở thành giáo viên dạy trực tuyến độc quyền của
              Classforme ngay hôm nay
            </p>
            <ul>
              <li className="flex align-middle mt-4">
                <p className="text-16-24 font-medium text-black-0.85 flex gap-[16px]">
                  <span className="w-fit">
                    <Image
                      src={CheckIcon.src}
                      alt="check"
                      width={22}
                      height={22}
                    />
                  </span>
                  Đảm bảo thu nhập
                </p>
              </li>
              <li className="flex align-middle mt-4">
                <p className="text-16-24 font-medium text-black-0.85 flex gap-[16px]">
                  <span className="w-fit">
                    <Image
                      src={CheckIcon.src}
                      alt="check"
                      width={22}
                      height={22}
                    />
                  </span>
                  Tìm những học sinh mới
                </p>
              </li>
              <li className="flex align-middle mt-4">
                <p className="text-16-24 font-medium text-black-0.85 flex gap-[16px]">
                  <span className="w-fit">
                    <Image
                      src={CheckIcon.src}
                      alt="check"
                      width={22}
                      height={22}
                    />
                  </span>
                  Cháy hết mình với đam mê
                </p>
              </li>
            </ul>
            <div>
              <BasicButton
                variant="outlined"
                classes="border-main-1 bg-white text-main-1 font-medium text-16-24 mt-12"
              >
                Trở thành giáo viên ngay
              </BasicButton>
            </div>
          </div>
          <div>
            <Image
              src={ReturnImage01.src}
              alt="icon"
              width={608}
              height={456}
            />
          </div>
        </div>
        <div className="flex justify-center items-center align-middle lg:flex-row sm:flex-col-reverse">
          <div>
            <Image
              src={ReturnImage02.src}
              alt="icon"
              width={608}
              height={456}
            />
          </div>
          <div className="max-w-[570px] h-fit my-auto">
            <h2 className="text-48-72 text-subtitle font-extrabold">
              Luôn có kết quả đánh giá việc dạy và học
            </h2>
            <p className="text-20-28 font-semibold text-gray-5c5c5c mt-2">
              Là nơi học tập của hơn 5,000 học sinh trên khắp cả nước. Tham gia
              với Classforme để nhận được sự giúp đỡ nhiệt tình trong công tác
              giảng dạy.
            </p>
            <div>
              <BasicButton classes="bg-main-1 text-white font-medium text-16-24 mt-12">
                Đăng ký học ngay
              </BasicButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
