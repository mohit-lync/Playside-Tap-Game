import { Body } from '@/AppComponents/Game/Body/Body'
import { Bottom } from '@/AppComponents/Game/Body/Bottom/Bottom'
import { Top } from '@/AppComponents/Game/Body/Top/Top'
import { Transitions } from '@/AppComponents/Game/Transitions/Transitions'
import { useTap } from '@/contexts/TapContext'


export const Game = () => {
  const {progress,isPaused} = useTap()
  return (
    <div className='flex-1  w-full flex items-center flex-col '>
      
      
      {isPaused ? <Transitions/> : <Body/>}
      {/* <Transitions/> */}
    </div>
  )
}
