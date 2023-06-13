import React from 'react'
import Link from 'next/link'
import { useAppSelector } from '@mfc/redux/hooks';

interface Props { }

const NotFound: React.FC<Props> = () => {
  const { isNotFound } = useAppSelector((state) => state.common);
  if (!isNotFound) return null
  return (
    <div className='w-screen h-screen fixed top-0 left-0 bottom-0 right-0 z-[9999] bg-white'>
      <div className={'flex justify-center items-center min-h-screen w-full h-full'}>
        <div className='font-inter-700 text-240-290 xl:text-400-484 text-neutral-100 absolute z-0 max-w-[100vw] overflow-hidden flex items-center justify-center'>404</div>
        <div className={'text-center z-10'}>
          <h1 className='font-inter-600 text-48-48 md:text-64-64 xl:text-88-88 mb-[16px] md:mb-[24px] px-[16px] md:px-0'>Page not found</h1>
          <div className='fixed md:static bottom-[32px] flex items-center justify-center w-full px-[16px]'>
            <Link
              href={'/'}
              passHref
              className={'bg-main-1 px-[24px] h-[56px] flex items-center justify-center rounded-[12px] w-full md:w-auto'}
            >
              <span className='font-inter-500 text-16-20 text-white'>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
