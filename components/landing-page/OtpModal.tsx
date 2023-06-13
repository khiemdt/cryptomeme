import React, { useRef, useState, useEffect } from "react";
import BasicDialog from "../common/BasicDialog";
import BasicInput from "../common/BasicInput";
import BasicButton from "../common/BasicButton";
import {
  getProfile,
  login,
  resendOtp,
  submitRegistration,
} from "@mfc/helpers/api/account";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { setProfile, setToast } from "@mfc/redux/slices/common";
import { useAppDispatch } from "@mfc/redux/hooks";
import { CLIENT_ID } from "@mfc/helpers/constants/constants";
import { isEmpty } from "@mfc/helpers/utils/common";

interface PageProps {
  handleClose: any;
  userData: any;
  userAccount: any;
}

const OtpModal = ({ handleClose, userData, userAccount }: PageProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const inputRef1 = useRef<HTMLInputElement>();
  const inputRef2 = useRef<HTMLInputElement>();
  const inputRef3 = useRef<HTMLInputElement>();
  const inputRef4 = useRef<HTMLInputElement>();
  const inputRef5 = useRef<HTMLInputElement>();
  const inputRef6 = useRef<HTMLInputElement>();
  const [values, setValues] = useState<any>({});
  const [countDown, setCountDown] = useState<number>(5);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const inputs: Array<any> = [
    {
      currentRef: inputRef1,
      previousRef: undefined,
      nextRef: inputRef2,
    },
    {
      currentRef: inputRef2,
      previousRef: inputRef1,
      nextRef: inputRef3,
    },
    {
      currentRef: inputRef3,
      previousRef: inputRef2,
      nextRef: inputRef4,
    },
    {
      currentRef: inputRef4,
      previousRef: inputRef3,
      nextRef: inputRef5,
    },
    {
      currentRef: inputRef5,
      previousRef: inputRef4,
      nextRef: inputRef6,
    },
    {
      currentRef: inputRef6,
      previousRef: inputRef5,
      nextRef: undefined,
    },
  ];

  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
    }
  }, [countDown]);

  const handleChange = (ref: any, index: number) => {
    const value = ref.currentRef?.current?.value;
    if (!isNaN(value)) {
      setValues({
        ...values,
        [index]: value,
      });
      if (value && ref.nextRef) {
        ref.nextRef.current?.focus();
      }
    }
    if (!value && ref?.previousRef) {
      ref.previousRef.current?.focus();
    }
  };

  const isOtpValid = (): boolean => {
    const keys = Object.keys(values);
    if (keys.length !== 6) return false;
    return keys.every((key: string) => !!values[key]);
  };

  const handleResendOtp = async () => {
    if (countDown === 0) {
      try {
        setLoading(true);
        setErrorMsg("");
        await resendOtp({
          ownerId: userData?.ownerId,
          token: userData?.token,
          featureType: userData?.featureType,
        });
        setCountDown(5);
      } catch (error: any) {
        setErrorMsg(error?.data?.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const submitOtp = async () => {
    const secret = Object.values(values).join("");
    try {
      setLoading(true);
      setErrorMsg("");
      const data = await submitRegistration({
        secret,
        token: userData?.token,
        ownerId: userData?.ownerId,
      });
      if (data?.data?.code === "success") {
        handleLogin();
      }
    } catch (error: any) {
      setErrorMsg(error?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProfile = async () => {
    try {
      const res: any = await getProfile();
      if (res?.data?.data) {
        dispatch(setProfile(res?.data?.data));
      }
    } catch (error: any) {
      setErrorMsg(error?.data?.message);
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res: any = await login({
        clientId: CLIENT_ID,
        userType: "TEACHER",
        grantType: "password",
        username: userAccount.phone,
        password: userAccount.password,
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
        router.push("/");
      }
    } catch (error: any) {
      setErrorMsg(error?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BasicDialog
      open={true}
      title="Nhập mã OTP"
      subTitle={`Chúng tôi đã gửi mã OTP đến ${userAccount.phone}`}
      handleClose={handleClose}
    >
      <div className="mt-[13px] flex justify-center">
        {inputs.map((item: any, index: number) => (
          <BasicInput
            key={index}
            required
            maxLength={1}
            value={values[index]}
            ref={item.currentRef}
            size={48}
            onChange={() => handleChange(item, index)}
            classes="max-w-[48px] mx-[8px] text-center"
          />
        ))}
      </div>
      {errorMsg && (
        <p className="text-red-f5222d text-14-22 mt-[10px] text-center">
          {errorMsg}
        </p>
      )}
      <BasicButton
        variant={"outlined"}
        size={"xl"}
        color={"white"}
        loading={loading}
        disabled={!isOtpValid()}
        classes="mt-[20px] mx-auto bg-main-1 w-full border-none"
        onClick={submitOtp}
      >
        Xác nhận
      </BasicButton>
      <p className="mt-[30px] text-center text-14-22">
        Chưa nhận được mã OTP?{" "}
        {!loading && (
          <span
            className="text-main-1 cursor-pointer"
            onClick={handleResendOtp}
          >
            Gửi lại {countDown ? `(${countDown})` : null}
          </span>
        )}
      </p>
    </BasicDialog>
  );
};

export default OtpModal;
