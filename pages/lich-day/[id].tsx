// import Layout from "@mfc/components/layout/Layout";
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import { getClassInfo } from "@mfc/helpers/api/teacher";
import { useAppSelector } from "@mfc/redux/hooks";
import { useRouter } from "next/router";
import { isEmpty } from "@mfc/helpers/utils/common";
import serverProps from "@mfc/helpers/utils/serverProps";

// const TeachingScheduleZoom = dynamic(() => import('@mfc/components/teaching-schedule/TeachingScheduleZoom'), { ssr: false })
const TeachingScheduleZoomNew = dynamic(() => import('@mfc/components/teaching-schedule/TeachingScheduleZoomNew'), { ssr: false })

const TeachingSchedulePage = () => {
  const router = useRouter()
  const { id } = router.query
  const [classData, setClassData] = useState<any>({})
  const fetchData = async () => {
    try {
      const res: any = await getClassInfo({ lessonId: id })
      if (res?.data?.code === "success") {
        if (res?.data?.data.type === "CLASSIN") {
          document.location.href = res?.data?.data?.link
        } else {
          setClassData(res?.data?.data)
        }
      }
    } catch (error) { }
  }

  useEffect(() => {
    if (!isEmpty(id)) fetchData()
  }, [id])
  if (isEmpty(classData)) return null
  return (
    <>
      {classData.type === "ZOOM" &&
        <>
          {/* <TeachingScheduleZoom classData={classData} /> */}
          <TeachingScheduleZoomNew classData={classData} />
        </>
      }
    </>
  );
};

export async function getServerSideProps(context: any) {
  return serverProps(context)
}
export default TeachingSchedulePage;
