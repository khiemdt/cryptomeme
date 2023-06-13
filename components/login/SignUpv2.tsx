import React, { useState } from "react";
import SignUpBackgroundImg from "@mfc/assests/images/sign-up/background.png";
import HeaderTitle from "./HeaderTitle";
import { useRouter } from "next/router";
import { SIGN_UP_TYPES } from "@mfc/helpers/constants/constants";
import CreateAccount from "./CreateAccount";
import { UserAccount } from "@mfc/helpers/interfaces/acoount";

const SignUpv2 = () => {
  const router = useRouter();
  const { type } = router.query;
  const [userAccount, setUserAccount] = useState<UserAccount>({
    name: "",
    phone: "",
    password: "",
  });
  const [userData, setUserData] = useState<any>();

  const handleSetUserAccount = (key: string, value: string) => {
    setUserAccount({
      ...userAccount,
      [key]: value,
    });
  };

  const renderBody = () => {
    if (type === SIGN_UP_TYPES.OTP) {
      return;
    }
    if (type === SIGN_UP_TYPES.PASSWORD) {
      return;
    }
    if (type === SIGN_UP_TYPES.SUCCESS) {
      return;
    }
    if (type === SIGN_UP_TYPES.ZALO) {
      return;
    }
    return (
      <CreateAccount
        handleSetUserAccount={handleSetUserAccount}
        userAccount={userAccount}
      />
    );
  };

  return (
    <div
      className="min-h-[720px] w-full bg-cover bg-no-repeat bg-center flex justify-end"
      style={{ backgroundImage: `url(${SignUpBackgroundImg.src})` }}
    >
      <div className="bg-white lg:py-[82px] lg:px-[38px] ">{renderBody()}</div>
    </div>
  );
};

export default SignUpv2;
