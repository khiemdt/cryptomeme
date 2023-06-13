import BGImg from "@mfc/assests/images/courses/course_bg.jpg";
import clsx from "clsx";
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";

interface LayoutProps {
  children: React.ReactNode | React.ReactElement;
  fullWidth?: boolean
  fullHeight?: boolean
  isV2?: boolean
}

const Layout = (props: LayoutProps) => {
  const { children, fullWidth, fullHeight, isV2 } = props;
  return (
    <>
      <LayoutHeader />
      <div
        className={clsx(
          "w-full bg-cover bg-no-repeat bg-center min-h-[calc(100vh_-_300px)] md:min-h-[calc(100vh_-_292px)]",
          !fullWidth && `max-w-[1536px] px-[16px] md:px-[36px] mx-auto`,
          fullHeight ? '' : 'py-4 md:py-6'
        )}
        style={isV2 ? { backgroundImage: `url(${BGImg.src})` } : {}}
      >
        {children}
      </div>
      <LayoutFooter />
    </>
  );
};

export default Layout;
