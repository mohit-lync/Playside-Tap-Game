

import {
  Sheet,
  
  SheetContent,
  
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import hamburger from '/assets/Navbar/hamburger.png'
import logo from '/assets/Sidebar/logo.png'
import x from '/assets/Sidebar/x.png'
import tg from '/assets/Sidebar/tg.png'
import redacted from '/assets/Footer/redacted.png'
import lync from '/assets/Footer/lync.png'
import { Link } from "react-router-dom"
export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <img src={hamburger} className="w-11" alt="" />
      </SheetTrigger>
      <SheetContent className="bg-[#000053] border-l-0 flex flex-col">
        <SheetHeader>
          <SheetTitle>
            <img src={logo} alt="" />
          </SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Link to={"https://x.com/taptapplaygg"} target="_blank" className="flex items-center justify-start px-6 py-4 w-full rounded-xl gap-7"
            style={{
              background: "linear-gradient(180deg, #5100FF 0%, #510099 100%)"

            }}
          >
            <img src={x} className="w-10" alt="" />
            <p className="font-semibold text-base text-nowrap text-white">Follow us on X</p>
          </Link>
          <Link to={"https://t.me/PLAYSIDEGG"} target="_blank" className="flex items-center justify-start px-6 py-4 w-full rounded-xl gap-3"
            style={{
              background: "linear-gradient(180deg, #5100FF 0%, #510099 100%)"

            }}
          >
            <img src={tg} className="w-10" alt="" />
            <p className="font-semibold text-base text-nowrap text-white">Join our Telegram</p>
          </Link>
          
        </div>
        <SheetFooter className="flex-1 flex flex-col items-center justify-end gap-2">
          <div className='flex items-center gap-2'>
              <span className='font-normal text-xs leading-4 text-white'>Created By</span>
              <img src={redacted} className='h-3' alt="" />
          </div>
          <div className='flex items-center gap-2'>
              <span className='font-normal text-xs leading-4 text-white'>Powered By</span>
              <img src={lync} className='h-3' alt="" />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
