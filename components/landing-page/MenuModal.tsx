import { useAppDispatch, useAppSelector } from "@mfc/redux/hooks";
import React from "react";
import { MenuProps } from "@mfc/helpers/interfaces";
import { isEmpty } from "@mfc/helpers/utils/common";
import { useRouter } from "next/router";
import Image from "next/image";
import ic_close_circle from "@mfc/assests/icons/ic_close_circle.svg";
import { setMenu, setProfile } from "@mfc/redux/slices/common";
import { logout } from "@mfc/helpers/api/account";
import { removeCookies } from "cookies-next";
import CallIcon from "@mui/icons-material/Call";
import Drawer from "@mui/material/Drawer";
import { menuStudent, menu } from "../layout/LayoutHeader";
import { WATCH_MEE_FILTER_KEY } from "@mfc/helpers/constants/constants";
import clsx from "clsx";

const MenuModal = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { pathname } = router;
  const [{ isMenuOpen, profile }] = useAppSelector(({ common }) => [common]);
  const isEnvDevelopment = process.env.NODE_ENV === "development";
  const menuStudentMobile: Array<MenuProps> = [
    {
      name: 'Trang chủ',
      url: "/",
    },
    ...menuStudent,
  ];

  const menuData = !isEmpty(profile) ? menuStudentMobile : menu;
  const handleClose = () => {
    dispatch(setMenu(false));
  };
  const handleClickMenu = (url: string) => {
    router.push({ pathname: url });
    handleClose();
  };
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error: any) {
    } finally {
      if (pathname !== "/") router.push({ pathname: "/" });
      handleClose();
      removeCookies("token");
      removeCookies("refresh-token");
      dispatch(setProfile(null));
      localStorage.removeItem(WATCH_MEE_FILTER_KEY);
    }
  };
  return (
    <Drawer
      anchor={"left"}
      open={isMenuOpen}
      onClose={handleClose}
      sx={{ "& .MuiDrawer-paper": { width: "100%" } }}
    >
      {/* <div
      className={clsx(
        "fixed top-0 bottom-0 right-0 left-0 z-50 transform bg-white transition-all duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0 block" : "translate-x-full hidden"
      )}
    > */}
      <div className="py-[10px] flex flex-col justify-between h-full">
        <div className="clear-both">
          <div
            className="pt-[10px] pb-[15px] cursor-pointer px-[24px] w-full flex items-center justify-end"
            onClick={handleClose}
          >
            <Image src={ic_close_circle} alt="icon" width={22} height={22} />
          </div>
          {menuData.map((el: MenuProps, idx: number) => {
            const isActived = pathname.includes(el.url) && el.url !== "/";
            return (
              <div
                key={idx}
                className={clsx(
                  'h-[40px] flex items-center text-14-22 font-svn-gilroy-500 cursor-pointer px-[24px]',
                  isActived ? "text-[#FBA65D] bg-[#FFE9D0]" : 'text-[#58595B] ',
                  idx !== 0 && 'border-t border-t-[#FFEDE5]'
                )}
                onClick={() => handleClickMenu(el.url)}
              >
                {el.name}
              </div>
            );
          })}
        </div>
        {/* {!isEmpty(profile) && (
          <div
            className={`h-[56px] py-[15px] text-14-22 text-gray-5c5c5c font-medium cursor-pointer hover:text-main-1`}
            onClick={handleLogout}
          >
            Đăng xuất
          </div>
        )} */}
        <div className="text-center text-main-1 text-16-22 p-[15px] flex items-center justify-center">
          {/* <CallIcon /> */}
          <span className="px-[5px] text-[#58595B] font-svn-gilroy-500">Hotline:</span>
          <span className="inline-block font-svn-gilroy-500 text-main-1">
            1900.63.67.58
          </span>
        </div>
      </div>
      {/* </div> */}
    </Drawer>
  );
};

export default MenuModal;
