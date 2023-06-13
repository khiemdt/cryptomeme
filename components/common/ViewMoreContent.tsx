import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import ArrowActiveIcon from "@mfc/assests/icons/arrow-right-active.svg";

interface Props {
  content: string
  numberOfLine?: number
  isHiddenArrow?: boolean
  isCenterMore?: boolean
}

const ViewMoreContent: React.FC<Props> = ({ content, numberOfLine, isHiddenArrow, isCenterMore }) => {
  const eleRef = useRef<HTMLDivElement | null>(null)
  const [hasMore, setHasMore] = useState<boolean>(false)
  const [isExpanse, setIsExpanse] = useState<boolean>(false)

  const checHasMore = () => {
    const divElement = eleRef.current as HTMLDivElement
    if (divElement) {
      const desHeight = divElement.getBoundingClientRect().height
      const scrollHeight = divElement.scrollHeight
      // requirement: Show 10 lines by default, longer than 10 lines expands all text
      // lineHeigth: 24
      setHasMore(scrollHeight >= 24 * (numberOfLine || 10))
    }
  }

  useEffect(() => {
    const divElement = eleRef.current as HTMLDivElement
    if (content && divElement) {
      checHasMore()
    }
  }, [numberOfLine, content, eleRef])

  const handleToggleDesciption = () => {
    setIsExpanse((prevState) => !prevState)
  }
  const lastChar = (content || '').substring((content || '').length - 1)

  return (
    <>
      <div
        ref={eleRef}
        className={'text-12-14 text-black-0.85 font-svn-gilroy-400 relative whitespace-pre-line w-full view-more-custom'}
        style={
          isExpanse
            ? {}
            : {
              display: '-webkit-box',
              WebkitLineClamp: numberOfLine || 10,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }
        }
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div
          className={`absolute bottom-0 left-0 w-full h-[64px] ${hasMore && !isExpanse ? 'bg-gradient-to-b from-white-0 to-white' : ''
            }`}
        />
      </div>
      {hasMore && (
        <div className={`flex items-center w-full ${isCenterMore ? 'justify-center' : ''}`}>
          <button
            className={`text-16-20 mt-2 text-[#FBA65D] font-svn-gilroy-500 flex items-center gap-[4px]`}
            onClick={handleToggleDesciption}
          >
            {isExpanse ? 'Rút gọn' : 'Xem thêm'}
            {!isHiddenArrow &&
              <Image
                src={ArrowActiveIcon.src}
                alt="icon"
                width={16}
                height={16}
                className={`${isExpanse ? "rotate-[-90deg]" : "rotate-90"}`}
              />
            }
          </button>
        </div>
      )}
    </>
  )
}

export default ViewMoreContent
