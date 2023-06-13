import {
  DataLoginProps,
  DataRegisterProps,
  DataResendOtpProps,
  DataSubmitRegistrationProps,
} from "../interfaces/acoount";
import api from "./api";

// SUBJECT
export const getProfile = async () => {
  return await api({
    url: `/mid/v1/users/profile`,
    method: "get",
  });
};
export const login = async (data: DataLoginProps) => {
  return await api({
    url: `/mid/v1/auth/login`,
    method: "post",
    data,
  });
};
export const logout = async () => {
  return await api({
    url: `/mid/v1/auth/logout`,
    method: "post",
  });
};
export const actionRefreshToken = async (data: any) => {
  return await api({
    url: `/mid/v1/auth/refresh-token`,
    method: "post",
    data,
  });
};
export const registerByPhone = async (data: DataRegisterProps) => {
  return await api({
    url: `/mid/v1/users/register-by-phone`,
    method: "post",
    data,
  });
};
export const resendOtp = async (data: DataResendOtpProps) => {
  return await api({
    url: `/mid/v1/users/resend-otp`,
    method: "post",
    data,
  });
};
export const submitRegistration = async (data: DataSubmitRegistrationProps) => {
  return await api({
    url: `/mid/v1/users/submit-registration`,
    method: "post",
    data: {
      ...data,
      userTypes: ["TEACHER"],
    },
  });
};
