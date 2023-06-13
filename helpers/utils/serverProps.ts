import { getCookie } from "cookies-next";

export default async function serverProps(context: any) {
  const { req } = context;
  const hostDomain = req?.headers?.host;
  const token = req?.cookies?.token;
  if (!token) {
    const prefixUrl = hostDomain.includes("localhost") ? "http" : "https";
    return {
      redirect: {
        permanent: true,
        destination: `${prefixUrl}://${hostDomain}/dang-nhap`,
      },
    };
  }
  return {
    props: {},
  };
}
