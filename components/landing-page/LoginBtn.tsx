import { useState } from "react";
import BasicDialog from "@mfc/components/common/BasicDialog";
import BasicInput from "@mfc/components/common/BasicInput";
import { isEmpty } from "@mfc/helpers/utils/common";
import Link from "next/link";
import BasicButton from "../common/BasicButton";
import { getProfile, login } from "@mfc/helpers/api/account";
import { setCookie } from "cookies-next";
import { setProfile, setToast } from "@mfc/redux/slices/common";
import { useAppDispatch } from "@mfc/redux/hooks";
import { Checkbox } from "@mui/material";
import { useRouter } from "next/router";
import { CLIENT_ID } from "@mfc/helpers/constants/constants";

interface PageProps {
  type: "button" | "text";
  title: string;
}

const LoginBtn = ({ type, title }: PageProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberPassword, setRememberPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleOpen = () => {
    // setOpen(true);
    router.push({ pathname: '/dang-nhap' })
  }
  const handleClose = () => {
    setOpen(false);
    setErrorMsg("");
  };

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value.trim());
    // setErrorMsg((prevState) => ({ ...prevState, email: '' }))
  };
  // const onBlurEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!isEmailValid(event.target.value)) {
  //     setErrorMsg((prevState) => ({
  //       ...prevState,
  //       email: 'Please enter a valid email.',
  //     }))
  //   }
  // }
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
    } finally {
      handleClose();
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
  };

  return (
    <>
      {type === "text" ? (
        <span
          className="text-main-1 cursor-pointer font-medium"
          onClick={handleOpen}
        >
          {title}
        </span>
      ) : (
        <div
          className="h-[40px] bg-main-1 flex items-center justify-center rounded-[6px] px-4 py-1 cursor-pointer"
          onClick={handleOpen}
        >
          <span className="text-white text-14-22">{title}</span>
        </div>
      )}
      <BasicDialog title="Đăng nhập" open={open} handleClose={handleClose}>
        <div className="w-full flex flex-col gap-[24px]">
          {errorMsg && <p className="text-14-18 text-red-600">{errorMsg}!</p>}
          <BasicInput
            label={"Tài khoản"}
            placeholder={"Nhập số điện thoại hoặc tên đăng nhập"}
            value={userName}
            size={48}
            onChange={onChangeUserName}
            // onBlur={onBlurEmail}
            onKeyDown={(e: any) => {
              if (e.key === 'Enter' && !isEmpty(userName) && !isEmpty(password)) handleLogin()
            }}
            maxLength={50}
          />
          <div>
            <BasicInput
              label={"Mật khẩu"}
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
            />
            <div className="w-full flex justify-between items-center pt-[8px]">
              <div className="flex items-center">
                <Checkbox
                  style={{
                    border: rememberPassword ? "#F05323" : "",
                    color: rememberPassword ? "#F05323" : "",
                    padding: 0,
                  }}
                  onClick={() => setRememberPassword(!rememberPassword)}
                  size="small"
                />
                <span className="pl-[8px] text-14-22 text-black-0.85">
                  Nhớ mật khẩu
                </span>
              </div>
              <div>
                <Link href="/" className="text-main-1 text-14-22">
                  Quên mật khẩu
                </Link>
              </div>
            </div>
          </div>
          <BasicButton
            variant={"outlined"}
            size={"xl"}
            color={"white"}
            onClick={handleLogin}
            loading={loading}
            disabled={loading || isEmpty(userName) || isEmpty(password)}
            classes={"w-full flex justify-center bg-main-1 border-none"}
          >
            Đăng nhập
          </BasicButton>
          {/* <div className="text-center text-16-24 font-medium text-black-0.85">
            Bạn chưa có tài khoản?
          </div>
          <BasicButton
            variant={"outlined"}
            size={"xl"}
            color={"white"}
            classes={
              "w-full flex justify-center bg-white text-16-24 font-medium !text-black !border-main-1"
            }
            onClick={() => setOpen(false)}
          >
            <Link href={`/dang-ky`}>
              Đăng ký làm{" "}
              {
                <span className="capitalize pl-[4px] !text-main-1">
                  Giáo viên
                </span>
              }
            </Link>
          </BasicButton>
          <div className="text-center text-14-20">
            Bằng việc chọn đăng ký, bạn đã đồng ý với các{" "}
            <Link
              href="/term_conditions"
              onClick={handleClose}
              className="text-main-1"
              target="_blank"
            >
              Điều khoản sử dụng
            </Link>{" "}
            và{" "}
            <Link
              href="/privacy_policy"
              onClick={handleClose}
              className="text-main-1"
              target="_blank"
            >
              Chính sách bảo mật
            </Link>{" "}
            của chúng tôi
          </div> */}
        </div>
      </BasicDialog>
    </>
  );
};

export default LoginBtn;
