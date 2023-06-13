import React, { useState } from "react";
import BackGroundImg from "@mfc/assests/images/register/bg-banner.png";
import StudentBanner from "@mfc/assests/images/register/image-student.png";
import BasicInput from "../common/BasicInput";
import BasicButton from "../common/BasicButton";
import Link from "next/link";
import { isEmpty } from "@mfc/helpers/utils/common";
import { registerByPhone } from "@mfc/helpers/api/account";
import OtpModal from "../landing-page/OtpModal";
import LoginBtn from "../landing-page/LoginBtn";

interface UserAccount {
  name: string;
  phone: string;
  password: string;
}

const SignUp = () => {
  const [userAccount, setUserAccount] = useState<UserAccount>({
    name: "",
    phone: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState<any>();
  const [userData, setUserData] = useState<any>();
  const [openOtpModal, setOpenOtpModal] = useState<boolean>(false);
  const regEx = /^(0[3|5|7|8|9])+([0-9]{8})\b/;
  const [loading, setLoading] = useState<boolean>(false);
  const buttons = [
    {
      label: "Họ tên",
      placeholder: "Nhập họ và tên",
      value: userAccount.name,
      type: "name",
    },
    {
      label: "Số điện thoại đăng nhập",
      placeholder: "Nhập số điện thoại đăng nhập",
      value: userAccount.phone,
      type: "phone",
    },
    {
      label: "Mật khẩu",
      placeholder: "Nhập mật khẩu",
      value: userAccount.password,
      type: "password",
    },
  ];

  const onChange = (
    key: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (key === "name") {
      setUserAccount({
        ...userAccount,
        [key]: value,
      });
    } else {
      setUserAccount({
        ...userAccount,
        [key]: value.trim(),
      });
    }
    if (key === "phone") {
      if (!regEx.test(value.trim()) && value) {
        setErrorMsg({
          message: "Số điện thoại không hợp lệ",
          show: true,
        });
      } else {
        setErrorMsg({
          message: "",
          show: false,
        });
      }
    }
  };

  const handleSignUp = async () => {
    try {
      setLoading(true);
      const res: any = await registerByPhone(userAccount);
      const data = res?.data?.data;
      if (data) {
        setUserData(data);
        setOpenOtpModal(true);
      }
    } catch (error: any) {
      setErrorMsg({
        message: error?.data?.message,
        show: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseOtpModal = () => {
    setOpenOtpModal(false);
  };

  return (
    <div
      style={{ backgroundImage: `url(${BackGroundImg.src})` }}
      className="w-full bg-no-repeat bg-right-top"
    >
      {openOtpModal && (
        <OtpModal
          userData={userData}
          userAccount={userAccount}
          handleClose={handleCloseOtpModal}
        />
      )}
      <div className="flex lg:flex-row flex-col pt-10 pb-20 px-5 items-center justify-center lg:gap-[107px]">
        <div className="max-w-[692px]">
          <p className="text-48-72 font-extrabold text-subtitle mb-[16px]">
            Tham gia những khóa học hàng đầu tại Classforme
          </p>
          <p className="text-14-22 font-medium text-gray-5c5c5c">
            Classforme tự hào là người đồng hành cùng bạn trên hành trình gặt
            hái tri thức - mở cửa tương lai.
          </p>
          <img src={StudentBanner.src} alt="banner" />
        </div>
        <div className="max-w-[550px] bg-white rounded-[16px] pt-[48px] px-[32px] pb-[16px] shadow-[2px_4px_20px_rgba(146,146,146,0.25)]">
          <p className="text-subtitle font-extrabold text-30-40 mb-[56px] text-center">
            Đăng ký trở thành học viên
          </p>
          <div className="flex flex-col gap-[24px]">
            {buttons.map((item: any) => (
              <BasicInput
                key={item.type}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type === "password" ? "password" : "text"}
                value={item.value}
                showIconPassword={item.type === "password"}
                size={48}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(item.type, event)
                }
                maxLength={50}
              />
            ))}
            {errorMsg?.show && (
              <p className="text-center text-red-f5222d font-medium">
                {errorMsg.message}
              </p>
            )}
            <BasicButton
              variant={"outlined"}
              size={"xl"}
              color={"white"}
              classes={"w-full flex justify-center bg-main-1 border-none"}
              loading={loading}
              onClick={handleSignUp}
              disabled={
                isEmpty(userAccount.name) ||
                isEmpty(userAccount.password) ||
                isEmpty(userAccount.phone) ||
                errorMsg?.show
              }
            >
              Đăng ký
            </BasicButton>
            <div className="h-[48px] flex items-center justify-center w-full">
              <p className="text-center text-16-24 font-medium text-black-0.85">
                Đã có tài khoản? <LoginBtn type="text" title="Đăng nhập" />
              </p>
            </div>
          </div>
          <div className="text-center text-14-20 lg:mt-[96px] mt-20">
            Bằng việc chọn đăng ký, bạn đã đồng ý với các{" "}
            <Link href="/term_conditions" className="text-main-1" target="_blank">
              Điều khoản sử dụng
            </Link>{" "}
            và{" "}
            <Link href="/privacy_policy" className="text-main-1" target="_blank">
              Chính sách bảo mật
            </Link>{" "}
            của chúng tôi
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
