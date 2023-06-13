import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import { ZoomMtg } from "@zoomus/websdk";
import { useAppSelector } from "@mfc/redux/hooks";

ZoomMtg.setZoomJSLib("https://source.zoom.us/2.12.2/lib", "/av");

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load("en-US");
ZoomMtg.i18n.reload("en-US");

interface Props {
  classData: any
}

const TeachingScheduleZoom = ({ classData }: Props) => {
  // const { profile } = useAppSelector((state) => state.common);
  const { link, zoomMeetingInfo } = classData
  const sdkKey: string = zoomMeetingInfo?.clientId;
  const meetingNumber: string = zoomMeetingInfo?.id;
  const passWord = zoomMeetingInfo?.pwd;
  const role: string = '0';
  const userName: string = zoomMeetingInfo?.name || '';
  const userEmail: string = zoomMeetingInfo?.email || '';
  const signature: string = zoomMeetingInfo?.signature || '';
  console.log('classData', classData)

  useEffect(() => {
    if (document) {
      const zmmtgEl = document.getElementById("zmmtg-root")
      if (zmmtgEl) zmmtgEl.style.display = "block";
      const leaveUrl: string = `/lich-day`;
      ZoomMtg.init({
        leaveUrl,
        isSupportAV: true,
        success: (data: any) => {
          ZoomMtg.join({
            meetingNumber,
            signature,
            sdkKey,
            userName,
            userEmail,
            passWord,
            tk: "",
            success: () => {
              console.log("Joined");
            },
            error: (error: any) => {
              console.log(error);
            },
          });
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
    return () => {
      const zmmtgEl = document.getElementById("zmmtg-root")
      if (zmmtgEl) zmmtgEl.style.display = "none";
      ZoomMtg.endMeeting({
        success: (signature: any) => { },
        error: (error: any) => {
          console.log(error);
        },
      })
    }
  }, []);
  return (
    <>
      <Head>
        <link type="text/css" rel="stylesheet" href="https://source.zoom.us/2.12.2/css/bootstrap.css" />
        <link type="text/css" rel="stylesheet" href="https://source.zoom.us/2.12.2/css/react-select.css" />
      </Head>
      <Fragment />
    </>

  );
};

export default TeachingScheduleZoom;
