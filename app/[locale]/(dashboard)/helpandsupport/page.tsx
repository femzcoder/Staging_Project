'use client'

import { TitleText } from '@/components/Typo'
import { ChevronRight} from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { BasicCard2 } from '@/components/Cards'
import ResorcesModal from './helpComponent/Resources'
import FeedbackModal from './helpComponent/FeedbackModal'

const SettingsAndPrivacy = () => {
    const [openResource, setOpenResource] = useState(false)
    const [openFeedback, setOpenFeedback] = useState(false)


    const settingsOptions=[
        {
            icon:"/icons/Iconssp1.svg",
            title:'Resources',
            handleClick:()=>{setOpenResource(true)}
        },
        {
            icon:"/icons/Iconssp2.svg",
            title:'Feedback',
            handleClick:()=>{setOpenFeedback(true)}
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
                        <div onClick={setting.handleClick} key={index} className='flex bg-white justify-between items-center  rounded-[8px] p-2 hover:bg-[#F2F1F1] cursor-pointer'>
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
                    <p className='text-[18px] mb-4'>Quick Help</p>

                    <div className='flex items-center gap-4'>
                        <div>
                            <Image
                                src={'/icons/Iconssp3.svg'}
                                alt="Support Icon"
                                width={18}
                                height={18}
                            />
                        </div>
                        <div>
                            <p className=''>Myra</p>
                            <p className='font-[300] text-sm'>Chat with us</p>
                        </div>
                    
                    </div>

                </BasicCard2>

                <BasicCard2 style='flex-col space-y-4'>
                    <p className='text-[18px]'>Contact Us</p>
                    <div className='flex items-center gap-4'>
                        <Image
                            src={'/icons/mesage.svg'}
                            alt="Email Icon"
                            width={22}
                            height={22}
                            />
                            <div>
                                <p>Email Support</p>
                                <p className='font-[300] text-sm'>Concierge@yields.vip</p>
                                <p className='text-[12px] text-[#10B981]'>We will get back to you as soon as we can</p>
                            </div>
                        
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image
                            src={'/icons/Whatsapp.svg'}
                            alt="Email Icon"
                            width={22}
                            height={22}
                            />
                        <div>
                            <p>Phone Support</p>
                            <p className='font-[300] text-sm'>+65 8815 3894</p>
                            <p className='text-[12px] text-[#3B82F6]'>Mon-Fri 9AM-6PM SGT</p>                        
                        </div>
                        
                    </div>



                </BasicCard2>
            </div>
        </div>    

            <ResorcesModal
                onOpenChange={setOpenResource}
                open={openResource}
            />
            <FeedbackModal
                onOpenChange={setOpenFeedback}
                open={openFeedback}
            />

    </>

    // </AssistantContainer>
  )
}

export default SettingsAndPrivacy