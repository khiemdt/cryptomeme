import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "@mfc/styles/globals.scss";
import { store } from "@mfc/redux/store";
import Head from "next/head";
import BasicToast from "@mfc/components/common/BasicToast";
import { useEffect } from "react";
import { getProfile } from "@mfc/helpers/api/account";
import { useAppDispatch } from "@mfc/redux/hooks";
import { setProfile } from "@mfc/redux/slices/common";
import MenuModal from "@mfc/components/landing-page/MenuModal";
import NotFound from "@mfc/components/common/NotFound";

const PageContent = ({ Component, pageProps }: AppProps) => {
  const dispatch = useAppDispatch();
  const fetchProfile = async () => {
    try {
      const res: any = await getProfile();
      if (res?.data?.data) {
        dispatch(setProfile(res?.data?.data));
      }
    } catch (error) { }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <>
      <div className="max-w-[100vw]">
        <Component {...pageProps} />
      </div>
      <BasicToast />
      <MenuModal />
      <NotFound />
    </>
  );
};

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <title>Classforme</title>
        <meta name="keywords" content="Classforme" />
        <meta
          name="description"
          content="Hệ thống dạy học trực tuyến liên cấp tại Việt Nam. Học sinh được học tập với đội ngũ giáo viên giỏi toàn quốc mọi lúc mọi nơi, được tiếp cận những bài học thú vị với công cụ hỗ trợ trực quan."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          rel="stylesheet"
        ></link>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X8QC26LQ5R"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X8QC26LQ5R');`,
          }}
        ></script>
      </Head>

      <Provider store={store}>
        <PageContent {...props} />
      </Provider>
    </>
  );
}
