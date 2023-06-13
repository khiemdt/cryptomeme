import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import BasicButton from "../common/BasicButton";
import Image from "next/image";
import ArrowRightIcon from "@mfc/assests/icons/ic_arrow_right.svg";
import AssignmentsRightIcon from "@mfc/assests/icons/ic_assignments.svg";
import EmptySchedulesIcon from "@mfc/assests/images/empty_schedules.jpeg";

import { getMyClass } from "@mfc/helpers/api/teacher";
import { isEmpty } from "@mfc/helpers/utils/common";
import dayjs from "dayjs";

let cancelToken: any;

const TeachingSchedule = () => {
  const router = useRouter()
  const [scheduleData, setScheduleData] = useState<any>({})
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1)
  const [year, setYear] = useState<number>(new Date().getFullYear())

  const fetchData = async () => {
    try {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel('request canceled')
      }
      cancelToken = axios.CancelToken.source()
      const lastDayOfMonth = new Date(year, month, 0).getDate()
      const res: any = await getMyClass(
        { fromDate: `${year}-${month > 9 ? month : `0${month}`}-01`, toDate: `${year}-${month > 9 ? month : `0${month}`}-${lastDayOfMonth}` },
        { cancelToken: cancelToken.token }
      )
      if (!isEmpty(res.data?.data)) setScheduleData(res.data?.data)
    } catch (error) {
    }
  }
  useEffect(() => {
    fetchData()
  }, [month, year])
  const currentTime = () => {
    setMonth(new Date().getMonth() + 1)
    setYear(new Date().getFullYear())
  }
  const nextMonth = () => {
    setMonth(month === 12 ? 1 : month + 1)
    if (month === 12) setYear(year + 1)
  }
  const prevMonth = () => {
    setMonth(month === 1 ? 12 : month - 1)
    if (month === 1) setYear(year - 1)
  }
  const renderDayOfWeek = (dayStr: string) => {
    const dayOfWeek = dayjs(dayStr).day()
    if (dayOfWeek === 0) return 'Chủ Nhật'
    return `Thứ ${dayOfWeek + 1}`
  }
  const renderStatus = (status: string) => {
    if (status.toUpperCase() === 'UPCOMING') {
      return <div className="h-[28px] w-[120px] rounded-[8px] flex items-center justify-center text-14-18 font-svn-gilroy-500 text-[#303030] bg-[#FCDC21]">Sắp diễn ra</div>
    }
    if (status.toUpperCase() === 'IN_PROGRESS') {
      return <div className="h-[28px] w-[120px] rounded-[8px] flex items-center justify-center text-14-18 font-svn-gilroy-500 text-white bg-[##75E01D]">Đang diễn ra</div>
    }
    if (status.toUpperCase() === 'FINISHED') {
      return <div className="h-[28px] w-[120px] rounded-[8px] flex items-center justify-center text-14-18 font-svn-gilroy-500 text-white bg-[#465580]">Đã hoàn thành</div>

    }
    if (status.toUpperCase() === 'PENDING') {
      return <div className="h-[28px] w-[120px] rounded-[8px] flex items-center justify-center text-14-18 font-svn-gilroy-500 text-[#303030] bg-[#FBA65D]">Đang xử lý</div>
    }
    if (status.toUpperCase() === 'CANCELED') {
      return <div className="h-[28px] w-[120px] rounded-[8px] flex items-center justify-center text-14-18 font-svn-gilroy-500 text-white bg-[#F5222D]">Đã hủy</div>
    }
    return status
  }
  const renderJoinBtn = (item: any) => {
    return (
      <div className="min-w-[120px]">
        {item?.joinNow &&
          <BasicButton
            size="lg"
            variant="contained"
            disabled={false}
            onClick={() => {
              window.open(`/lich-day/${item?.id}`, '_blank')
            }}
            classes={`w-[120px] h-8 max-h-8 flex justify-center bg-orange-FBA65D rounded-[12px] shadow-[2px_4px_8px_rgba(0,0,0,0.15)]`}
          >
            <span className="text-20-24 font-svn-gilroy-700 text-white whitespace-nowrap">Tham gia</span>
          </BasicButton>
        }
      </div>
    )
  }
  return (
    <>
      <div className="w-full max-w-[1080px] px-4 md:px-10 mx-auto flex flex-col py-4 md:py-10">
        <div className="bg-[rgba(196,208,255,0.25)] h-[78px] w-full shadow-[0px_2px_8px_rgba(0,0,0,0.25)] rounded-[16px] flex items-center justify-between px-4 md:px-6 mb-6">
          <div className="flex items-center gap-4 md:gap-6">
            <Image src={ArrowRightIcon.src} alt="icon" width={32} height={32} className="rotate-180 cursor-pointer" onClick={prevMonth} />
            <p className="text-18-20 md:text-24-32 text-[#465580] font-svn-gilroy-700 flex items-center mt-1">Tháng {month}, {year} </p>
            <Image src={ArrowRightIcon.src} alt="icon" width={32} height={32} className="cursor-pointer" onClick={nextMonth} />
          </div>
          <div
            className="bg-[#DBECE0] rounded-[8px] border border-[#32BA9A] h-[35px] md:h-[46px] flex items-center justify-center px-3 md:px-4 cursor-pointer"
            onClick={currentTime}
          >
            <span className="text-12-14 md:text-16-24 text-[#32BA9A] tracking-[0.2px]">Hôm nay</span>
          </div>
        </div>
        {isEmpty(scheduleData?.items) &&
          <div className="flex flex-col items-center justify-center gap-[80px] mt-[30px] mb-[120px]">
            <p className="text-center text-24-28 text-black font-svn-gilroy-700 px-6">Bạn chưa có lịch dạy nào trong tháng này</p>
            <Image src={EmptySchedulesIcon.src} alt="icon" width={332} height={363} className="cursor-pointer" onClick={nextMonth} />
          </div>
        }
        {!isEmpty(scheduleData?.items) && scheduleData?.items.map((el: any) => {
          return (
            <div key={el?.id} className="py-4 border-b border-b-[rgba(194,194,194,0.24)] w-full flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-5/8 flex justify-between md:justify-start">
                <div className="w-1/2 min-w-1/2 md:w-1/2 md:min-w-1/2 flex flex-col gap-2">
                  <div className="flex items-center gap-[10px]">
                    <Image src={AssignmentsRightIcon.src} alt="icon" width={20} height={20} />
                    <span className="text-[#465580] text-16-28 font-svn-gilroy-600">{renderDayOfWeek(el.workingFrom)} {dayjs(el.workingFrom).format('DD/MM')}</span>
                  </div>
                  {renderStatus(el.status)}
                </div>
                <div className="w-1/2 min-w-1/2 md:w-1/5 md:min-w-1/5 flex flex-col items-end md:items-start">
                  <span className="text-[#465580] text-16-28 font-svn-gilroy-700 whitespace-nowrap">{dayjs(el.workingFrom)?.format("HH:mm")} - {dayjs(el.workingTo)?.format("HH:mm")}</span>
                  <div className="w-full flex md:hidden pt-1 justify-end">
                    {renderJoinBtn(el)}
                  </div>
                </div>
              </div>
              <div className="w-1/2 min-w-1/2 flex flex-col">
                <span className="text-[#465580] text-16-28 font-svn-gilroy-400">{el?.liveClass?.name}</span>
                <span className="text-[#FBA65D] text-14-24 font-svn-gilroy-400">Buổi {el?.index}: {el?.title}</span>
              </div>
              <div className="w-1/8 min-w-1/8 hidden md:flex">
                {renderJoinBtn(el)}
              </div>
            </div>
          )
        })}
      </div>
    </>

  );
};

export default TeachingSchedule;
