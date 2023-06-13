import React from "react";
import Image from "next/image";
import PaymentImg from "@mfc/assests/images/landing-page/payment.png";
import PartnerImg from "@mfc/assests/images/landing-page/partner.png";
import BasicButton from "../common/BasicButton";

const Partner = () => {
  return (
    <>
      <div className="py-10 px-4 flex flex-col items-center w-full">
        <div className="text-center max-w-[630px] mb-12">
          <h2 className="text-48-72 text-subtitle font-extrabold">
            Đối tác thanh toán
          </h2>
          <p className="text-16-24 text-gray-5c5c5c font-medium">
            Chúng tôi đang hợp tác với các nhà cung cấp dịch vụ thanh toán đáng
            tin cậy nhất để đảm bảo mọi giao dịch diễn ra suôn sẻ và không phải
            lo lắng.
          </p>
          <Image src={PaymentImg} alt="partner" width={806} height={133} />
        </div>
        <hr className="bg-[#195A93] w-[370px] mb-8" style={{ height: "2px" }} />
        <div className="text-center max-w-[630px]">
          <h2 className="text-48-72 text-subtitle font-extrabold">
            Đối tác giáo dục
          </h2>
          <p className="text-16-24 text-gray-5c5c5c font-medium">
            Chúng tôi đang hợp tác với các chuỗi trường liên cấp, trường chuyên
            tại Miền Bắc để đảm bảo học sinh có được những giáo trình chuẩn
            nhất.
          </p>
          <Image src={PartnerImg} alt="partner" width={806} height={133} />
        </div>
      </div>
      <div className="w-full  py-5 px-4 bg-main-1 flex flex-col items-center justify-center">
        <div className="max-w-[1260px] w-full flex lg:gap-[32px] items-center lg:flex-row sm:flex-col sm:gap-[12px]">
          <p className="text-20-28 font-bold text-white">
            Trở thành giáo viên để dạy hàng nghìn học sinh tại Classforme
          </p>
          <BasicButton classes="bg-white text-main-1">
            Trở thành giáo viên ngay
          </BasicButton>
        </div>
      </div>
    </>
  );
};

export default Partner;
