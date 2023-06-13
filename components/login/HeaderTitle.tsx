import React from "react";
import LogoImg from "@mfc/assests/images/sign-up/logo.png";

interface PageProps {
  title: string;
  subtitle: string;
}

const HeaderTitle = ({ title, subtitle }: PageProps) => {
  return (
    <div>
      <img src={LogoImg.src} alt="logo" />
      <div className="text-32-40 font-medium text-[#46557F] text-center lg:mt-[43px]">
        {title} <p className="text-40-48 font-extrabold">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeaderTitle;
