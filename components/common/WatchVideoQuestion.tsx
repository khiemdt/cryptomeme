import { isEmpty, isMobileTablet, secToHHMMSS } from "@mfc/helpers/utils/common";
import { useEffect, useState } from "react";
import Image from "next/image";
import PlayIcon from "@mfc/assests/icons/ic_play_white.svg";
import PauseIcon from "@mfc/assests/icons/ic_pause_white.svg";
import Loading from "./Loading";
import { useRouter } from "next/router";
import useWindowDimensions from "@mfc/helpers/hooks/useWindowDimensions";

interface Props {
  videoInfo: any;
}
// https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
export const useYoutube = (callback: any) => {
  useEffect(() => {
    if (window && !(window as any)?.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag: any = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      tag.onload = callback;
    } else {
      callback();
    }
  }, []);
};

let player: any;

const WatchVideoQuestion = ({ videoInfo }: Props) => {
  if (isEmpty(videoInfo?.link)) return null;
  const windowDimensions = useWindowDimensions();
  // const isMobile = windowDimensions.width < 768;
  const isMobile = windowDimensions.width < 768 || isMobileTablet(navigator?.userAgent);
  // const isMobileDevice = window?.orientation > -1;

  const router = useRouter();
  const loadVideo = () => {
    if (window && (window as any)?.YT) {
      (window as any).YT.ready(function () {
        player = new (window as any).YT.Player(`videoIdQuestion_${videoInfo?.id}`, {
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
      });
    }
  };
  useYoutube(loadVideo);

  const [isShowThumbnail, setShowThumbnail] = useState<boolean>(false);
  const [isPlay, setPlay] = useState<boolean>(false);
  const [isReady, setReady] = useState<boolean>(false);

  const onPlayerReady = () => {
    setReady(true);
  };
  const onPlayerStateChange = (e: any) => {
    // console.log('onPlayerStateChange', e?.data)
    // -1 (chưa bắt đầu)
    // 0 (đã kết thúc)
    // 1 (đang phát)
    // 2 (tạm dừng)
    // 3 (đang lưu vào bộ đệm)
    // 5 (video giới thiệu).
  };

  const handlePlayerVideo = (funcVideo: string) => {
    const videoEl: any = document.getElementById(`videoIdQuestion_${videoInfo?.id}`);
    if (videoEl)
      videoEl?.contentWindow.postMessage(
        `{"event":"command", "func":"${funcVideo}", "args":""}`,
        "*"
      );
  };
  const handlePlay = () => {
    setPlay(true);
    setShowThumbnail(false);
    if (player) player?.playVideo();
    handlePlayerVideo("playVideo");
  };
  const handlePause = () => {
    setPlay(false);
    if (player) player?.pauseVideo();
    handlePlayerVideo("pauseVideo");
  };
  const handleEndVideo = () => {
    setPlay(false);
    setShowThumbnail(true);
    handlePause();
  };

  // useEffect(() => {
  //   if (isReady && !isMobile) {
  //     handleVideo();
  //   }
  // }, [isReady]);

  useEffect(() => {
    if (window) {
      let lastTimeUpdate = 0;
      const videoEl: any = document.getElementById(
        `videoIdQuestion_${videoInfo?.id}`
      );
      let iframeWindow = videoEl?.contentWindow;
      window.addEventListener("message", function (event) {
        // Check that the event was sent from the YouTube IFrame.
        if (event.source === iframeWindow) {
          let data = JSON.parse(event.data);
          // console.log('info', data.info)
          // let realDuration = videoInfo?.duration || 0;
          // if (data?.info?.duration) {
          //   realDuration = Number(data?.info?.duration.toFixed(0));
          // }
          // The "infoDelivery" event is used by YT to transmit any
          // kind of information change in the player,
          // such as the current time or a playback quality change.
          if (
            data.event === "infoDelivery" &&
            data.info &&
            data.info.currentTime
          ) {
            // currentTime is emitted very frequently,
            // but we only care about whole second changes.
            var time = Math.floor(data.info.currentTime);

            if (time !== lastTimeUpdate) {
              // Update the dom, emit an event, whatever.
              lastTimeUpdate = time;
              if (time === videoInfo?.end) handleEndVideo()
            }
          }
          if (data.info && data.info.playerState === 0) {
            // video ended
            handleEndVideo();
          }
        }
      });
    }
    return () => {
      player = null;
      if (window) window.removeEventListener("message", () => { });
    };
  }, [videoInfo?.id]);
  const handleVideo = () => {
    if (!isReady) return;
    if (isPlay) handlePause();
    else handlePlay();
  };

  const handleClick = () => {
    if (isMobile) {
      if (!isReady) return;
      if (isPlay) {
        setPlay(false);
        if (player) player?.pauseVideo();
      } else {
        setPlay(true);
        if (player) player?.playVideo();
      }
    } else handleVideo()
  }
  return (
    <>
      <div className="relative w-full max-w-[360px] md:max-w-[600px] mb-6">
        {!isReady && (
          <div className="absolute w-full h-full z-10 bg-white bg-opacity-70">
            <Loading />
          </div>
        )}
        <div
          className="youtube-container cursor-pointer"
          onClick={handleClick}
        >
          <iframe
            id={`videoIdQuestion_${videoInfo?.id}`}
            src={`${videoInfo?.link}?modestbranding=1&enablejsapi=1&html5=1&showinfo=0&controls=0&rel=0&start=${videoInfo?.start}&end=${videoInfo?.end}`}
            title=""
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={`absolute w-full h-full ${!isShowThumbnail ? "z-[1]" : "z-[-1]"}`}
          ></iframe>
          <img
            src={videoInfo?.thumbnail}
            className={`absolute w-full h-full object-cover ${isShowThumbnail ? "z-[1]" : "z-[-1]"}`}
          />
        </div>
      </div>
    </>
  );
};

export default WatchVideoQuestion;
