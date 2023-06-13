import React from "react";

const Home = () => {
  return (
    <></>
  );
};

export async function getServerSideProps(context: any) {
  const { req, res } = context
  const { token, ...otherQuery } = context?.query;
  const hostDomain = req?.headers?.host
  return {
    redirect: {
      permanent: true,
      destination: `${hostDomain.includes('localhost') ? 'http' : 'https'}://${hostDomain}/${token ? 'lich-day' : 'dang-nhap'}`,
    },
  }
}
export default Home;
