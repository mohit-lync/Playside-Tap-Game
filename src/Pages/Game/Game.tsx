import { Body } from '@/AppComponents/Game/Body/Body'

import { Transitions } from '@/AppComponents/Game/Transitions/Transitions'

import { useTap } from '@/contexts/TapContext'


export const Game = () => {
  const {isPaused,particlesShowerRef} = useTap()
  return (
    <div className='flex-1  w-full flex items-center flex-col '>
      {/* <div className='w-screen absolute h-screen -top-9 z-30' ref={particlesShowerRef}>

      </div> */}
      {particlesShowerRef.current}
      {isPaused ? <Transitions/> : <Body/>}
      {/* <Transitions/> */}
    </div>
  )
}
