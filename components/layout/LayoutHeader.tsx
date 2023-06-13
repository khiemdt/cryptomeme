import Image from "next/image";
import logo from "@mfc/assests/images/logo.jpeg";
import MenuIcon from "@mfc/assests/icons/ic_menu.svg";
import { MenuProps } from "@mfc/helpers/interfaces";
import { useRouter } from "next/router";
import LoginBtn from "@mfc/components/landing-page/LoginBtn";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAppDispatch, useAppSelector } from "@mfc/redux/hooks";
import { isEmpty } from "@mfc/helpers/utils/common";
import { Avatar } from "@mui/material";
import { logout } from "@mfc/helpers/api/account";
import { removeCookies } from "cookies-next";
import { setMenu, setProfile } from "@mfc/redux/slices/common";
import { WATCH_MEE_FILTER_KEY } from "@mfc/helpers/constants/constants";

export const menuStudent: Array<MenuProps> = [
  // {
  //   name: "Khóa học",
  //   url: `/khoa-hoc`,
  // },
  { name: "Lịch dạy", url: "/lich-day" },
];
export const menu: Array<MenuProps> = [
  // {
  //   name: "Khóa học",
  //   url: `/khoa-hoc`,
  // },
  // {
  //   name: "Giới thiệu",
  //   url: `${HEADER_URL}/kiem-tra-dau-vao`,
  // },
  // {
  //   name: "Trở thành giáo viên",
  //   url: "/dang-ky",
  // },
  // {
  //   name: "Tin tức",
  //   url: `${HEADER_URL}/tin-tuc`,
  // },
];

const LayoutHeader = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { pathname } = router;
  const { support } = router.query
  if (support === 'app') return null
  const { profile } = useAppSelector((state) => state.common);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenu = (url: string) => {
    router.push({ pathname: url });
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
  const menuData = !isEmpty(profile) ? menuStudent : menu;
  const handleOpenMenu = () => {
    dispatch(setMenu(true));
  };
  return (
    <div className="w-full h-[64px] md:h-[56px] sticky top-0 z-50 bg-white px-4 md:px-[40px] flex item-center rounded-[0_0_24px_24px] md:rounded-[0px] shadow-[1px_2px_4px_rgba(0,0,0,0.15)] md:shadow-[0px_2px_0px_rgba(0,0,0,0.04)]">
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-[56px] items-center">
          <div className="flex items-end gap-2">
            <div className="md:hidden cursor-pointer min-w-6" onClick={handleOpenMenu}>
              <Image src={MenuIcon.src} alt="icon" width={24} height={24} />
            </div>
            <div
              className="flex min-w-[138px] h-[40px] w-[138px] cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image src={logo} alt="logo" width={138} height={40} />
            </div>
          </div>
          <div className="gap-[24px] hidden md:flex">
            {menuData.map((el: MenuProps, idx: number) => {
              const isActived = pathname.includes(el.url) && el.url !== "/";
              return (
                <div
                  key={idx}
                  className={`h-[56px] flex items-center justify-center py-[13px] text-[#46557F] text-16-22 font-svn-gilroy-600 cursor-pointer ${isActived ? "text-main-1" : ''}`}
                  onClick={() => handleClickMenu(el.url)}
                >
                  {el.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <p className="text-main-1 text-16-22 font-svn-gilroy-800 mr-4 hidden md:flex">Hotline: 1900.63.67.58</p>
          <div>
            {!isEmpty(profile) ? (
              <div className="flex items-center">
                <div
                  className="flex gap-[8px] items-center cursor-pointer"
                  onClick={handleClick}
                  role="presentation"
                >
                  <span className="text-14-22 text-[#46557F] font-svn-gilroy-400 hidden md:flex">
                    {profile?.name}
                  </span>
                  {profile?.avatar ? (
                    <Avatar
                      src={profile?.avatar}
                      sx={{ width: 24, height: 24 }}
                    />
                  ) : (
                    <Avatar
                      sx={{ bgcolor: "#F05323", width: 24, height: 24 }}
                      className="uppercase text-12-12"
                    >
                      {profile?.name?.substring(0, 1)}
                    </Avatar>
                  )}
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: { minWidth: 160, marginTop: 16 },
                  }}
                >
                  <MenuItem onClick={handleLogout} className="menu-item">
                    Đăng xuất
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <LoginBtn title="Đăng nhập" type="button" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutHeader;
