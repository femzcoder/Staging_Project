import { BasicCard } from '@/components/Cards'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'

const Announcements = () => {
  return (
    <div className='p-2 md:p-6'>
      <div className='space-y-8'>
        {/* speakers sessions */}

        <BasicCard>
          <Image
            width={100}
            height={20}
            alt='Speaker Session'
            src="/images/Cardpoc.svg"
            className='w-full'
          />          
        </BasicCard>

        <div className='relative px-3 py-8'>
          <Image
            width={50}
            height={20}
            alt='Speaker Session'
            src="/icons/up-quote.svg"
            className='absolute top-0 left-0'
          />
          <Image
            width={50}
            height={20}
            alt='Speaker Session'
            src="/icons/down-quote.png"
            className='absolute bottom-0 right-0 '
          />

          <div className='bg-[#F2F1F1] w-full px-4 md:px-16 py-8'>
            <p className='text-[#2D2D2D] font-medium'>You bring joy to those around you</p>
            <span className='italic text-sm text-[#2D2D2D]'>– David Shepherd</span>
          </div>
        </div>

        <Separator/>

      </div>
    </div>

  )
}

export default Announcements
