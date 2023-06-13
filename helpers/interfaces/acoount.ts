export interface UserAccount {
  name: string;
  phone: string;
  password: string;
}
export interface DataLoginProps {
  clientId: string;
  userType: string;
  grantType: string;
  username: string;
  password: string;
  token?: string;
}
export interface DataRegisterProps {
  name: string;
  phone: string;
  password: string;
}
export interface DataResendOtpProps {
  token: string;
  ownerId: string;
  featureType: string;
}
export interface DataSubmitRegistrationProps {
  token: string;
  ownerId: string;
  secret: string;
}
