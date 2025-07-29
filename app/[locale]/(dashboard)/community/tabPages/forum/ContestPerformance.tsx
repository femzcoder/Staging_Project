import React from 'react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from '@/components/ui/separator'
import ReactSpeedometer from "react-d3-speedometer"
import { BasicCard } from '@/components/Cards'
import { FilterButton } from '@/components/OtherButtons'
import { TitleText } from '@/components/Typo'

const ContestPerformance = () => {
  return (
    <BasicCard style='space-y-6'>
        <div className='flex justify-between items-center'>
            <TitleText text='Contest Performance'/>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <FilterButton type='button' text='Team 1'/>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border border-[#DEE2E6] shadow w-[120px] bg-white rounded-2xl" align="start">
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={()=>{}}>
                            Audio
                        </DropdownMenuItem>
                        <Separator/>
                        <DropdownMenuItem>
                            Camera
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{}}>
                            Upload
                        </DropdownMenuItem>
                        <Separator/>
                        <DropdownMenuItem>
                            Calendar
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
                </DropdownMenu>
        </div>

            <div className='w-full'>
            <ReactSpeedometer
              needleColor="black"
              needleTransitionDuration={4000}
              fluidWidth={true}
                minValue={0}
                maxValue={100}
                value={30}
                segments={5}
                segmentColors={[
                    "#F41740",
                    "#F75875",
                    "#FF823A",
                    "#FFCA3A",
                    "#288D27",
                ]}/>                
            </div>
  
    </BasicCard>
  )
}

export default ContestPerformance


