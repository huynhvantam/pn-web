import React from 'react'
import MenubarPN from './MenubarPN'
import Image from 'next/image'
import NavbarPN from './NavbarPN'
export default function HeaderPN() {
  return (
    <section className="container  shadow-lg">
      <div className='flex justify-between items-center'>
        <span className='flex gap-x-2 items-center py-2 '>
          {/* <Image
        src="/image/logo.pn"
        width={66}
        height={66}
        alt="Picture of the author"
      /> */}
          <div className='bg-red-300 h-16 w-16'></div>
          {/* <div className='flex flex-col cursor-default text-primary '>
            <span className='select-none font-bold'>PHOENIX EDUCATION</span>
            <span className='text-xs select-none text font-bold'>GIÁO DỤC PHƯỢNG HOÀNG</span>
          </div> */}
        </span>
        {/* <MenubarPN /> */}
        <NavbarPN />
        <div>Dang ky tu van tuyen sinh</div>
      </div>

    </section>
  )
}
