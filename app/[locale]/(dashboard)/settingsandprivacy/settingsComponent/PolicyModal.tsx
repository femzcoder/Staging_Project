import { FormInput } from "@/components/common/FormInput"
import { TitleText } from "@/components/Typo"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { ArrowLeft, X } from "lucide-react"
import { Formik, Form } from "formik"
import { z } from "zod"
import { toFormikValidationSchema } from "zod-formik-adapter"
import { BasicCard2 } from "@/components/Cards"
import Image from "next/image"


function PolicyModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" flex flex-col bg-white border-none rounded-2xl p-0">
        {/* Header */}
        <DialogHeader className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1 px-4">
            <ArrowLeft onClick={() => onOpenChange(false)} className="cursor-pointer" />
            <h3 className="text-sm font-semibold">Profile</h3>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-4 overflow-y-auto">

          <div className="px-1 py-2 shadow-md">
            <p className="font-semibold text-[#2D2D2D]">Access User Agreements, Platform Terms <br/> and Conditions, and other policies in one place</p>
          </div>

         <div>
            <BasicCard2 style="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="/icons/pdf-icon.svg" alt="Terms" width={100} height={100} />
                    <span>Terms of Service</span>
                </div>
                <div>
                    <span>313KB <X /></span>
                </div>
            </BasicCard2>
            <BasicCard2 style="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="/icons/pdf-icon.svg" alt="Terms" width={100} height={100} />
                    <span>Privacy Policy</span>
                </div>
                <div>
                    <span>313KB <X /></span>
                </div>
            </BasicCard2>
         </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PolicyModal
