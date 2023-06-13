import React from "react";
import Link from "next/link";
import Image from "next/image";
import ZaloImg from "@mfc/assests/images/landing-page/zalo.svg";
import FacebookImg from "@mfc/assests/images/landing-page/fb.svg";
import YoutubeImg from "@mfc/assests/images/landing-page/ic_youtube.svg";
import TikTokImg from "@mfc/assests/images/landing-page/ic_tiktok.svg";
import VisaImg from "@mfc/assests/images/landing-page/visa.png";
import LogoBCTImg from "@mfc/assests/images/logo_BCT.png";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import QRCodeImg from "@mfc/assests/images/landing-page/qrcode_download_app.png";
import { useRouter } from "next/router";


const Footer = () => {
  const router = useRouter()
  const { support } = router.query
  if (support === 'app') return null
  return (
    <div id="layout_footer" className="bg-[#303030] py-6 w-full flex items-center justify-center">
      <div className="w-full max-w-[1080px] px-6 md:px-10 mx-auto flex flex-col md:flex-row gap-6 text-white font-normal text-14-24">
        <div className="w-full md:w-[calc(50%_-_16px)] flex flex-col gap-1">
          <h3 className="text-16-28 font-bold">
            Công ty Cổ phần Authentic Education Hub
          </h3>
          <p>
            Mã số thuế: 0109801262 (do Sở Kế hoạch và Đầu tư Hà Nội cấp ngày 03/11/2021)
          </p>
          <p className="flex items-start gap-2">
            <HomeIcon />
            <span>
              Địa chỉ: Số 5 BT2, Khu đô thị Mễ Trì Hạ, phường Mễ Trì, Nam Từ Liêm, Hà Nội
            </span>
          </p>
          <p className="flex items-center gap-2">
            <PhoneIcon />
            <span>
              Số điện thoại: 1900.36.36.758
            </span>
          </p>
          <p className="flex items-center gap-2">
            <TelegramIcon />
            <span>Email: hotro@classforme.edu.vn</span>
          </p>
        </div>
        {/* <div className="col-span-1 pr-4">
            <h3 className="mb-4 text-20-28 font-bold text-white">
              Dành cho giáo viên
            </h3>
            <div className="flex flex-col">
              <Link className="mb-6" href="https://live.classforme.edu.vn">
                Dành cho lớp mới
              </Link>
              <Link className="mb-6" href="https://live.classforme.edu.vn">
                Trở thành giáo viên
              </Link>
              <Link className="mb-6" href="https://live.classforme.edu.vn">
                Hướng dẫn sử dụng
              </Link>
              <Link className="mb-6" href="https://live.classforme.edu.vn">
                Hướng dẫn thanh toán
              </Link>
              <Link className="mb-6" href="https://live.classforme.edu.vn">
                Hướng dẫn nhận lớp{" "}
              </Link>
            </div>
          </div> */}
        <div className="w-full md:w-[calc(25%_-_16px)] flex flex-col gap-1">
          <h3 className="text-16-28 font-bold">Chính sách</h3>
          {/* {user?.authorized && (
              <Link className="mb-6" href="/dieu-khoan-su-dung">
                Điều khoản sử dụng
              </Link>
            )} */}
          <Link
            target="_blank"
            rel="noreferrer"
            href="/privacy_policy"
          // href="https://ldp.page/637c3530e009dc00502139c0"
          >
            Chính sách bảo mật
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://ldp.page/637c3f3ce009dc005022529b"
          >
            Cơ chế giải quyết tranh chấp
          </Link>
          {/* <Link
            target="_blank"
            rel="noreferrer"
            href="/"
          // href="https://ldp.page/637c4e6386f001003792de0b"
          >
            Quy chế hoạt động
          </Link> */}
          <a
            href="http://online.gov.vn/Home/WebDetails/100405"
            className="w-[160px]"
            target="_blank"
            rel="noreferrer"
          >
            <Image alt="" src={LogoBCTImg.src} width={131} height={40} />
          </a>
          <Image width={131} height={32} src={VisaImg.src} alt="Visa" />
        </div>
        <div className="w-full md:w-[calc(25%_-_16px)] flex flex-col gap-1">
          <h3 className="text-20-28 font-bold">
            Theo dõi chúng tôi
          </h3>
          <div className="flex gap-4 mb-4">
            <Link
              href="https://www.facebook.com/classforme.education"
              target="_blank"
              rel="noreferrer"
            >
              <Image width={25} height={25} src={FacebookImg.src} alt="Facebook" />
            </Link>
            <Link
              href="https://zalo.me/3540488847363976902"
              target="_blank"
              rel="noreferrer"
            >
              <Image width={25} height={25} src={ZaloImg.src} alt="Zalo" />
            </Link>
            <Link
              href="https://www.youtube.com/@ClassForMee"
              target="_blank"
              rel="noreferrer"
            >
              <Image width={25} height={25} src={YoutubeImg.src} alt="Youtube" />
            </Link>
            <Link
              href={`https://www.tiktok.com/@classforme?_t=8cH21xx1DLl&_r=1`}
              target="_blank"
              rel="noreferrer"
            >
              <Image width={25} height={25} src={TikTokImg.src} alt="Zalo" />
            </Link>
          </div>
          <h3 className="text-20-28 font-bold">
            Tải app tại đây
          </h3>
          <div className="flex gap-[24px]">
            <Image src={QRCodeImg.src} width={60} height={60} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="w-full border-t-[1px] border-white flex flex-col items-center justify-center">
          <p className="mb-6 text-16-24 font-normal text-[#e6eaf1] mt-2">
            Bản quyền thuộc Classforme Việt Nam © 2022
          </p>
          <div className="flex w-fill items-center justify-center gap-[24px]">
            <Image width={204} height={46} src={VisaImg.src} alt="Visa" />
            <a
              href="http://online.gov.vn/Home/WebDetails/100405"
              className="w-[160px]"
              target="_blank"
              rel="noreferrer"
            >
              <Image alt="" src={LogoBCTImg.src} width={160} height={46} />
            </a>
          </div>
        </div> */}
    </div>
  );
};

export default Footer;
