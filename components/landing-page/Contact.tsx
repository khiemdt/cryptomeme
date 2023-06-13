import React from "react";
import ContactImg from "@mfc/assests/images/landing-page/contact.png";
import Image from "next/image";
import BasicInput from "../common/BasicInput";
import BasicButton from "../common/BasicButton";
import ReviewImg from "@mfc/assests/images/landing-page/review.png";
const Contact = () => {
  return (
    <div>
      <div className="px-4 py-10 flex lg:flex-row sm:flex-col items-center justify-center bg-gradient-to-t from-gradientOrangeStart to-gradientOrangeEnd relative">
        <div className="w-fit z-10">
          <Image src={ContactImg.src} alt="contact" width={730} height={499} />
        </div>
        <div className="max-w-[508px] z-10">
          <h2 className="text-48-72 font-extrabold text-subtitle">
            Để lại thông tin cho chúng tôi
          </h2>
          <p className="text-16-24 font-medium text-gray-5c5c5c">
            Bạn muốn cho con học tập hoặc muốn giảng dạy mà vẫn còn nhiều vấn đề
            đang thắc mắc, hãy để lại thông tin. Chúng tôi sẽ liên hệ và giải
            đáp thắc mắc của bạn.
          </p>
          <form
            action=""
            typeof="submit"
            className="flex flex-col gap-[16px] mt-7"
          >
            <BasicInput placeholder="Nhập tên của bạn" />
            <BasicInput placeholder="Số điện thoại" />
            <BasicInput
              placeholder="Nhập nội dung nếu bạn có câu hỏi cho chúng tôi"
              height={113}
            />
          </form>
          <BasicButton classes="bg-main-1 text-white font-medium text-16-24 mt-6 sm:w-full">
            Gửi đi
          </BasicButton>
        </div>
        <div className="h-28 w-28 bg-[#FFD6BF] opacity-50 rounded-full absolute z-0" />
        <div className="h-56 w-56 bg-[#FFD6BF] opacity-50 rounded-full absolute z-0 right-1" />
      </div>
      <div className="py-10 px-4 h-fit w-full flex flex-col items-center gap-[24px]">
        <div className="relative flex justify-center min-h-[196px] align-middle w-full">
          <hr
            className="bg-[#195A93] w-8/12 self-center"
            style={{ height: "2px" }}
          />
          <div className="w-fit absolute bg-white p-4">
            <Image src={ReviewImg.src} height={191} width={196} alt="review" />
          </div>
        </div>
        <div className="text-center max-w-[630px] m-auto">
          <h2 className="text-48-72 text-main-1 font-extrabold">
            Cam kết 100% hài lòng
          </h2>
          <p className="text-16-24 font-medium text-gray-5c5c5c">
            Nếu bạn không hài lòng với buổi học thử, chúng tôi sẽ tặng miễn phí
            cho bạn lớp học mới với giáo viên khác hoặc hoàn tiền 100%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
