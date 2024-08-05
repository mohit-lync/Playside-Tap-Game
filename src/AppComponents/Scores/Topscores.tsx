import { my_address, scores } from '@/constants/score_data'

import crown from '/assets/Scores/crown.png'


export const Topscores = () => {
  return (
    <div className='flex items-center justify-center gap-10 w-full pt-10 h-40 px-[9.3rem]'>
        <div className='flex items-center flex-col gap-1 w-full'>
            <div className='h-7 w-7 rounded-full bg-[#0E3556] flex items-center justify-center text-white text-base font-bold '>2</div>
            <div className='font-bold text-white'>{
                scores[1].id === my_address ? 'You' : scores[1].id.slice(0,10) + '...'    
            }</div>
            <div className='font-light text-xs text-white'>40k</div>
        </div>
        <div className='flex items-center flex-col gap-1 mb-14 w-full'>
            <img src={crown} className='w-8' alt="" />
            <div className='h-7 w-7 rounded-full bg-[#0E3556] flex items-center justify-center text-white text-base font-bold '>1</div>
            <div className='font-bold text-white'>{
                scores[0].id === my_address ? 'You' : scores[0].id.slice(0,10) + '...'
            }</div>
            <div className='font-light text-xs text-white'>40k</div>
        </div>
        <div className='flex items-center flex-col gap-1 w-full'>
            <div className='h-7 w-7 rounded-full bg-[#0E3556] flex items-center justify-center text-white text-base font-bold '>3</div>
            <div className='font-bold text-white'>{
                scores[2].id === my_address ? 'You' : scores[2].id.slice(0,10) + '...'
            }</div>
            <div className='font-light text-xs text-white'>40k</div>
        </div>
    </div>
  )
}


