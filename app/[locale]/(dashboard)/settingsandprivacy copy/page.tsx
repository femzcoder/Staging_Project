'use client'

import { TitleText } from '@/components/Typo'
import { ChevronRight} from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { on } from 'events'
import { BasicCard2 } from '@/components/Cards'

const SettingsAndPrivacy = () => {

    const [openProfile, setOpenProfile] = useState<boolean>(false)
    const [openParticulars, setOpenParticulars] = useState<boolean>(false)
    const [openPassword, setOpenPassword] = useState<boolean>(false)

    const settingsOptions=[
        {
            icon:"/icons/Iconssp1.svg",
            title:'Resources',
            handleClick:()=>{setOpenProfile(true)}
        },
        {
            icon:"/icons/Iconssp2.svg",
            title:'Feedback',
            handleClick:()=>{setOpenParticulars(true)}
        },

    ]

  return (
    // <AssistantContainer>
    <>
        <div className='p-6 space-y-2'>
            <span className='text-[#2D2D2D]'>Settings & Privacy</span>

            <div>
                <TitleText text='David Shepherd' style='text-[#2D2D2D] text-lg font-medium' />
                <span className='text-[#2D2D2D] text-sm block'>@Y!elds ID: 000011</span>
                <span className='text-[#2D2D2D] text-sm'>Member since 17 January 2021</span>

            </div>

            <div className='p-2 rounded-[8px] space-y-4'>
                {
                    settingsOptions.map((setting, index) => (
                        <div onClick={setting.handleClick} key={index} className='flex bg-white justify-between items-center  rounded-[8px] p-1 hover:bg-[#F2F1F1] cursor-pointer'>
                            <div className='flex items-center gap-2'>
                               <Image
                                    src= {setting.icon}
                                    alt="Settings Icon"
                                    width={18}
                                    height={18}
                               />
                               <span className=''>{setting.title}</span> 
                            </div>
                            <ChevronRight size={16} className='' />
                            
                        </div>
                    ))
                }

                <BasicCard2>
                    p
                    <p>Email Support</p>
                    <p>Concierge@yields.vip</p>
                    <p className='text-[10px] text-[#10B981]'>We will get back to you as soon as we can</p>
                </BasicCard2>

                <BasicCard2>
                    <p>Contact Us</p>
                    <div>
                        <p>Phone Support</p>
                        <p>+65 8815 3894</p>
                        <p className='text-[10px] text-[#3B82F6]'>Mon-Fri 9AM-6PM SGT</p>
                    </div>
                    <div>
                        <p>Phone Support</p>
                        <p>+65 8815 3894</p>
                        <p className='text-[10px] text-[#3B82F6]'>Mon-Fri 9AM-6PM SGT</p>                        
                    </div>

                </BasicCard2>
            </div>
        </div>    

        {/* <Resources
            onOpenChange={setOpenProfile}
            open={openProfile}
        /> */}

    </>

    // </AssistantContainer>
  )
}

export default SettingsAndPrivacy