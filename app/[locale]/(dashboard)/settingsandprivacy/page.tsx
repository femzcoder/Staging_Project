'use client'

import { TitleText } from '@/components/Typo'
import { ChevronRight} from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import ProfileModal from './settingsComponent/ProfileModal'
import ParticularsModal from './settingsComponent/ParticularsModal'
import PasswordModal from './settingsComponent/PasswordModal'
import PolicyModal from './settingsComponent/PolicyModal'
import SubscriptionModal from './settingsComponent/SubscriptionModal'

const SettingsAndPrivacy = () => {

    const [openProfile, setOpenProfile] = useState<boolean>(false)
    const [openParticulars, setOpenParticulars] = useState<boolean>(false)
    const [openPassword, setOpenPassword] = useState<boolean>(false)
    const [openPolicy, setOpenPolicy] = useState<boolean>(false)
    const [openSubscription, setOpenSubscription] = useState<boolean>(false)

    const settingsOptions=[
        {
            icon:"/icons/Iconssp1.svg",
            title:'Profile',
            handleClick:()=>{setOpenProfile(true)}
        },
        {
            icon:"/icons/Iconssp2.svg",
            title:'Particulars',
            handleClick:()=>{setOpenParticulars(true)}
        },
        {
            icon:"/icons/Iconssp3.svg",
            title:'Subscriptions',
            handleClick:()=>{setOpenSubscription(true)}
        },
        {
            icon:"/icons/Vectorsp4.svg",
            title:'Password',
            handleClick:()=>{setOpenPassword(true) }
        },
        {
            icon:"/icons/Iconssp5.svg",
            title:'Policies',
            handleClick:()=>{setOpenPolicy(true)}
        }
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
            </div>
        </div>    

        <ProfileModal
            onOpenChange={setOpenProfile}
            open={openProfile}
        />
        <ParticularsModal
            onOpenChange={setOpenParticulars}
            open={openParticulars}
        />
        <PasswordModal
            onOpenChange={setOpenPassword}
            open={openPassword}
        />
        <PolicyModal
            onOpenChange={setOpenPolicy}
            open={openPolicy}
        />
        <SubscriptionModal
            onOpenChange={setOpenSubscription}
            open={openSubscription}
        />
    </>

    // </AssistantContainer>
  )
}

export default SettingsAndPrivacy