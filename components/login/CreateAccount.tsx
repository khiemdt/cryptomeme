import React, { useState } from "react";
import HeaderTitle from "./HeaderTitle";
import { useRouter } from "next/router";
import { SIGN_UP_TYPES } from "@mfc/helpers/constants/constants";
import BasicInput from "../common/BasicInput";
import PhoneIcon from "@mfc/assests/images/sign-up/call.svg";
import { UserAccount } from "@mfc/helpers/interfaces/acoount";
import { isEmpty } from "@mfc/helpers/utils/common";
import BasicButton from "../common/BasicButton";
import { useRef } from "react";

interface PageProps {
  userAccount: UserAccount;
  handleSetUserAccount: any;
}

const CreateAccount = ({ userAccount, handleSetUserAccount }: PageProps) => {
  const router = useRouter();
  const { pathname, query } = router;
  const { type } = query;
  const btnRef = useRef();
  const isPhoneSignUp = type === SIGN_UP_TYPES.PHONE;
  const value = isPhoneSignUp ? userAccount.phone : userAccount.name;
  const isDisabled = isEmpty(value);
  const regEx = /^(0[3|5|7|8|9])+([0-9]{8})\b/;
  const [errorMsg, setErrorMsg] = useState<any>();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSetUserAccount(
      isPhoneSignUp ? "phone" : "name",
      event.target.value.trim()
    );
  };

  const handleClick = () => {
    if (isPhoneSignUp) {
      if (!regEx.test(value.trim()) && value) {
        setErrorMsg({
          message: "Số điện thoại không hợp lệ",
          show: true,
        });
        return;
      }
      router.push({
        pathname,
        query: {
          ...query,
          type: SIGN_UP_TYPES.OTP,
        },
      });
    } else {
      router.push({
        pathname,
        query: {
          ...query,
          type: SIGN_UP_TYPES.PHONE,
        },
      });
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && !isDisabled) {
      handleClick();
    }
  };

  return (
    <div className="lg:p-[48px]">
      {isPhoneSignUp ? (
        <HeaderTitle title="Được rồi" subtitle="Bắt đầu nhé!" />
      ) : (
        <HeaderTitle title="Xin chào" subtitle="Tên bạn là gì?" />
      )}
      {isPhoneSignUp ? (
        <BasicInput
          value={value}
          classes={`bg-[#FAFAFA] shadow-[4px_4px_12px_rgba(0,0,0,0.1)] border-hidden`}
          placeholder="Số điện thoại"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          error={errorMsg}
        />
      ) : (
        <BasicInput
          value={value}
          placeholder="Họ và tên"
          classes={`bg-[#FAFAFA] shadow-[4px_4px_12px_rgba(0,0,0,0.1)] border-hidden`}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      )}
      <BasicButton
        variant={isDisabled ? "outlined" : "contained"}
        classes={`w-full rounded-full text-white ${
          isDisabled ? "bg-[#CCCCCC] opacity-100" : "bg-[#FBA65D]"
        }`}
        onClick={handleClick}
        disabled={isDisabled}
      >
        Tiếp tục
      </BasicButton>
    </div>
  );
};

export default CreateAccount;
