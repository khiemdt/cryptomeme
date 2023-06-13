import React, { useEffect, useState } from "react";
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';
import { useRouter } from "next/router";
import { isEmpty } from "@mfc/helpers/utils/common";
import BasicButton from "../common/BasicButton";
import useWindowDimensions from "@mfc/helpers/hooks/useWindowDimensions";

interface Props {
  classData: any
}

const TeachingScheduleZoomNew = ({ classData }: Props) => {
  // const { profile } = useAppSelector((state) => state.common);
  const windowDimensions = useWindowDimensions();
  const client = ZoomMtgEmbedded.createClient();
  const router = useRouter()
  const { link, zoomMeetingInfo } = classData
  const sdkKey: string = zoomMeetingInfo?.clientId;
  const meetingNumber: string = zoomMeetingInfo?.id;
  const passWord = zoomMeetingInfo?.pwd;
  const role: string = '0';
  const userName: string = zoomMeetingInfo?.name || '';
  const userEmail: string = zoomMeetingInfo?.email || '';
  const signature: string = zoomMeetingInfo?.signature || '';
  const [isMeeting, setMeeting] = useState<boolean>(false)

  const startMeeting = () => {
    let meetingSDKElement = document.getElementById('meetingSDKElement');
    if (meetingSDKElement) {
      setMeeting(true)
      client.init({
        debug: true,
        zoomAppRoot: meetingSDKElement,
        language: 'en-US',
        customize: {
          meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
          toolbar: {
            // buttons: [
            //   {
            //     text: 'Custom Button',
            //     className: 'CustomButton',
            //     onClick: () => {
            //       console.log('custom button');
            //     }
            //   }
            // ]
          },
          video: {
            viewSizes: {
              default: {
                width: windowDimensions.width > 1280 ? 1280 : windowDimensions.width,
                height: windowDimensions.height > 720 ? 720 : windowDimensions.height,
              },
              ribbon: {
                width: windowDimensions.width > 1280 ? 1280 : windowDimensions.width,
                height: windowDimensions.height > 720 ? 720 : windowDimensions.height,
              },
            },
          }
        },
      });

      client.join({
        signature: signature,
        sdkKey: sdkKey,
        meetingNumber: meetingNumber,
        password: passWord,
        userName: userName,
        userEmail: userEmail,
        tk: '',
        zak: ''
      })
      client?.on("connection-change",
        (payload) => {
          if (payload.state === 'Closed') {
            console.log("Meeting ended")
            router.push({ pathname: '/lich-day' })
          }
        }
      );
    }
  }

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        {/* For Component View */}
        <div id="meetingSDKElement">
          {/* Zoom Meeting SDK Component View Rendered Here */}
        </div>

        {!isMeeting &&
          <BasicButton
            variant={"outlined"}
            size={"xl"}
            color={"white"}
            onClick={() => startMeeting()}
            classes={"w-auto flex justify-center bg-main-1 border-none rounded-[100px] cursor-pointer"}
          >
            Tham gia meeting
          </BasicButton>
        }
        {/* <div className="w-full h-screen flex items-center justify-center">
        <div id="meetingSDKElement" className={`w-screen h-screen fixed top-0 left-0 ${isMeeting ? 'z-[1]' : 'z-[-1]'}`} />
        {!isMeeting &&
          <BasicButton
            variant={"outlined"}
            size={"xl"}
            color={"white"}
            onClick={() => startMeeting()}
            classes={"w-auto flex justify-center bg-main-1 border-none rounded-[100px] cursor-pointer"}
          >
            Tham gia meeting
          </BasicButton>
        }
      </div> */}
      </div>
    </>
  );
};

export default TeachingScheduleZoomNew;
