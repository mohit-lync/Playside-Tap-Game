

import redacted from '/assets/Footer/redacted.png'
import lync from '/assets/Footer/lync.png'
export const Footer = () => {
  return (
    <div className='w-full h-20 backdrop-blur-[5px]  flex items-center justify-center flex-col gap-2'>
        <div className='flex items-center gap-2'>
            <span className='font-normal text-xs leading-4 text-white'>Created By</span>
            <img src={redacted} className='h-3' alt="" />
        </div>
        <div className='flex items-center gap-2'>
            <span className='font-normal text-xs leading-4 text-white'>Powered By</span>
            <img src={lync} className='h-3' alt="" />
        </div>
    </div>
  )
}
