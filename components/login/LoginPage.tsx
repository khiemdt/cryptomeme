import React, { useState } from "react";
import SignUpBackgroundImg from "@mfc/assests/images/sign-up/background.png";
import BasicInput from "../common/BasicInput";
import BasicButton from "../common/BasicButton";
import { useAppDispatch } from "@mfc/redux/hooks";
import { setProfile, setToast } from "@mfc/redux/slices/common";
import Image from "next/image";
import LogoBird from "@mfc/assests/images/logo_bird.jpeg";
import ZaloImg from "@mfc/assests/images/landing-page/zalo.svg";
import { isEmpty } from "@mfc/helpers/utils/common";
import { useRouter } from "next/router";
import { CLIENT_ID } from "@mfc/helpers/constants/constants";
import { getProfile, login } from "@mfc/helpers/api/account";
import { setCookie } from "cookies-next";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberPassword, setRememberPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value.trim());
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value.trim());
  };
  const fetchProfile = async () => {
    try {
      const res: any = await getProfile();
      if (res?.data?.data) {
        dispatch(setProfile(res?.data?.data));
      }
    } catch (error) {
    }
  };
  const handleLogin = async () => {
    // handle login api
    try {
      setLoading(true);
      const res: any = await login({
        clientId: CLIENT_ID,
        userType: "TEACHER",
        grantType: "password",
        username: userName,
        password,
      });
      const data: any = res?.data?.data;
      if (data) {
        setCookie("token", data?.accessToken);
        setCookie("refresh-token", data?.refreshToken);
        fetchProfile();
        dispatch(
          setToast({
            message: `Đăng nhập thành công!`,
            type: "success",
            show: true,
          })
        );
        router.push("/lich-day");
      }
    } catch (error: any) {
      setErrorMsg(error?.data?.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="h-screen w-full bg-cover bg-no-repeat bg-center flex justify-end"
      style={{ backgroundImage: `url(${SignUpBackgroundImg.src})` }}
    >
      <div className="bg-white py-10 lg:py-[82px] px-6 lg:px-[38px] w-full md:w-1/2 flex flex-col justify-center items-center">
        <div className="max-w-[550px] flex flex-col justify-center">
          <div className="w-full flex items-center justify-center mb-8">
            <Image src={LogoBird.src} alt="" width={220} height={130} />
          </div>
          <div className="flex flex-col gap-1 items-center justify-center mb-7">
            <p className="text-32-40 text-[#46557F] font-svn-gilroy-500">Chào mừng quay trở lại</p>
            <p className="text-40-48 text-[#46557F] font-svn-gilroy-800">Đăng nhập</p>
          </div>
          {errorMsg && <p className="text-14-18 text-red-600">{errorMsg}!</p>}
          <BasicInput
            // label={"Tài khoản"}
            label=""
            placeholder={"Nhập số điện thoại hoặc tên đăng nhập"}
            value={userName}
            size={48}
            onChange={onChangeUserName}
            // onBlur={onBlurEmail}
            onKeyDown={(e: any) => {
              if (e.key === 'Enter' && !isEmpty(userName) && !isEmpty(password)) handleLogin()
            }}
            maxLength={50}
            style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.1)', background: '#FAFAFA', borderRadius: '16px', border: 'none' }}
          />
          <div className="mt-6 mb-[40px]">
            <BasicInput
              // label={"Mật khẩu"}
              label=""
              placeholder={"Nhập mật khẩu"}
              type="password"
              value={password}
              size={48}
              showIconPassword
              onChange={onChangePassword}
              onKeyDown={(e: any) => {
                if (e.key === 'Enter' && !isEmpty(userName) && !isEmpty(password)) handleLogin()
              }}
              maxLength={50}
              style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.1)', background: '#FAFAFA', borderRadius: '16px', border: 'none' }}
            />
          </div>
          <BasicButton
            variant={"outlined"}
            size={"xl"}
            color={"white"}
            onClick={handleLogin}
            loading={loading}
            disabled={loading || isEmpty(userName) || isEmpty(password)}
            classes={"w-full flex justify-center bg-main-1 border-none rounded-[100px]"}
          >
            Đăng nhập
          </BasicButton>
          <div className="w-full flex justify-center items-center pt-6 pb-3">
            <Link href="/" className="text-[#46557F] text-22-28 font-svn-gilroy-600 underline text-center">
              Quên mật khẩu
            </Link>
          </div>
          <div className="h-[60px] mb-9 flex items-center justify-center">
            <div className="w-auto h-[60px] flex items-center justify-center gap-3 px-4 shadow-[2px_4px_8px_rgba(0,0,0,0.15)] rounded-[8px] bg-[rgba(255,255,255,0.5)]">
              <Image width={32} height={32} src={ZaloImg.src} alt="Zalo" />
              <span className="tracking-[0.2px] text-[#46557F] text-22-28 font-svn-gilroy-600 whitespace-nowrap">Đăng nhập qua Zalo</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="w-1/2 h-[1px] bg-[#46557F]" />
            <span className="text-[#46557F] text-22-28 font-svn-gilroy-600 whitespace-nowrap">Chưa có tài khoản?</span>
            <div className="w-1/2 h-[1px] bg-[#46557F]" />
          </div>
          <div
            className="w-full h-[80px] flex items-center justify-center shadow-[4px_4px_12px_rgba(0,0,0,0.1)] rounded-[100px] bg-[rgba(255,255,255,0.5)] cursor-pointer"
            onClick={() => {
              router.push({ pathname: '/dang-ky' })
            }}
          >
            <span className="text-[#00C49E] tracking-[0.2px] text-24-32 font-svn-gilroy-700">Tạo tài khoản</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage
