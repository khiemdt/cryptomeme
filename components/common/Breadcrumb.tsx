import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  MENU_PRACTICE,
  PRACTICE_TYPES,
  STATUS,
} from "@mfc/helpers/constants/constants";
import { MenuPracticeProps } from "@mfc/helpers/interfaces/practice";
import { useAppSelector } from "@mfc/redux/hooks";
import { isEmpty } from "@mfc/helpers/utils/common";
import queryString from "query-string";

interface PageProps {
  changeHistory?: any;
}

const BreadCrumb = ({ changeHistory }: PageProps) => {
  const router = useRouter();
  const { practice_type, id, subtype, subjectId, search, topics, support } = router.query;
  if (support === 'app') return null
  const isWatchMee = practice_type === PRACTICE_TYPES.WATCH_MEE;

  const [
    {
      state: { historyDetail, answers },
    },
  ] = useAppSelector(({ practice }) => [practice]);

  const renderTitle = () => {
    if (practice_type) {
      const item = MENU_PRACTICE.find(
        (v: MenuPracticeProps) => v.type === practice_type
      );
      if (item) {
        if (item?.subMenu && subtype) {
          const subItem = item?.subMenu.find((v: any) => v?.type === subtype);
          if (subItem) return subItem.name;
        }
        return item.name;
      }
    }
    return null;
  };
  const getUrl = (url: string) => {
    return subjectId ? `${url}?subjectId=${subjectId}` : `${url}`;
  };
  const handleClick = () => {
    if (
      (practice_type === PRACTICE_TYPES.CHUYEN_DE ||
        practice_type === PRACTICE_TYPES.KIEM_TRA) &&
      historyDetail?.status === STATUS.DOING &&
      id
    ) {
      if (changeHistory) changeHistory(answers, "PUT");
    }
  };
  const renderTitleId = () => {
    if (id === "favourite") return "Yêu thích";
    if (id === "video") return "Khám phá video";
    if (id === "playlist") return "Khám phá danh sách";
    if (id && isWatchMee) return null;
    return null;
    // return id
  };
  const titleId = renderTitleId();
  const getWatchMeeQueryParams = () => {
    let params: any = {}
    if (search) params = { ...params, search }
    if (!isEmpty(topics)) params = { ...params, topics }
    return !isEmpty(params) ? `?${queryString.stringify(params)}` : ''
  }
  return (
    <Breadcrumbs className="w-full">
      <Link
        className="text-12-22 lg:text-14-22 font-normal text-black opacity-40 hover:opacity-[1]"
        href="/"
        onClick={handleClick}
      >
        Trang chủ
      </Link>
      <Link
        className={`text-12-22 lg:text-14-22 font-normal text-black hover:opacity-[1] ${practice_type ? "opacity-40" : "opacity-[1]"
          }`}
        onClick={handleClick}
        href={getUrl("/luyen-tap")}
      >
        Luyện tập
      </Link>
      {practice_type && (
        <Link
          className={`text-12-22 lg:text-14-22 font-normal text-black hover:opacity-[1] ${titleId ? "opacity-40" : "opacity-[1]"
            }`}
          href={getUrl(`/luyen-tap/${practice_type}${isWatchMee ? getWatchMeeQueryParams() : ''}`)}
          onClick={handleClick}
        >
          {renderTitle()}
        </Link>
      )}
      {titleId && (
        <Link
          className="text-12-22 lg:text-14-22 font-normal text-black"
          href={getUrl(`/luyen-tap/${practice_type}/${id}${isWatchMee ? getWatchMeeQueryParams() : ''}`)}
          onClick={handleClick}
        >
          {titleId}
        </Link>
      )}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
