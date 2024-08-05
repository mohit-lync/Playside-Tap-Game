import { Body } from '@/AppComponents/Game/Body/Body'

import { Transitions } from '@/AppComponents/Game/Transitions/Transitions'
import { useTap } from '@/contexts/TapContext'


export const Game = () => {
  const {isPaused} = useTap()
  return (
    <div className='flex-1  w-full flex items-center flex-col '>
      
      
      {isPaused ? <Transitions/> : <Body/>}
      {/* <Transitions/> */}
    </div>
  )
}
