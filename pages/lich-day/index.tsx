import Layout from "@mfc/components/layout/Layout";
import TeachingSchedule from "@mfc/components/teaching-schedule/TeachingSchedule";
import serverProps from "@mfc/helpers/utils/serverProps";
import React from "react";

const index = () => {
  return (
    <Layout fullHeight fullWidth isV2>
      <TeachingSchedule />
    </Layout>
  );
};
export async function getServerSideProps(context: any) {
  return serverProps(context)
}
export default index;
