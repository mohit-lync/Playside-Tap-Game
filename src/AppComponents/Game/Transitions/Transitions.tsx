import { useEffect, useState } from 'react'
import { FirstTransition } from './First/FirstTransition'
import { TRANSITION_BACKGROUNDS, useTap } from '@/contexts/TapContext'
import { SecondTransition } from './Second/SecondTransition'
import { ThirdTransition } from './Third/ThirdTransition'
import { FourthTransition } from './Fourth/FourthTransition'
import { FifthTransition } from './Fifth/FifthTransition'
import { SixthTransition } from './Sixth/SixthTransition'

export const Transitions = () => {
  const {state} = useTap()
  const [curr,setCurr] = useState<any>(null)
  const get_next_transition = (level:any) => {
    if(level === TRANSITION_BACKGROUNDS.LEVEL_2) setCurr(<FirstTransition/>);
    else if(level === TRANSITION_BACKGROUNDS.LEVEL_3) setCurr(<SecondTransition/>);
    else if(level === TRANSITION_BACKGROUNDS.LEVEL_4) setCurr(<ThirdTransition/>);
    else if(level === TRANSITION_BACKGROUNDS.LEVEL_5) setCurr(<FourthTransition/>);
    else if(level === TRANSITION_BACKGROUNDS.LEVEL_6) setCurr(<FifthTransition/>);
    else if(level === TRANSITION_BACKGROUNDS.LEVEL_7) setCurr(<SixthTransition/>);
  }
  useEffect(()=>{
    get_next_transition(state.NEXT_TRANSITION_SCREEN_BG)
    console.log(state);
    
  },[state])
  return (
    <div className='relative w-full'>
      {/* <FirstTransition/> */}
      {/* {state.NEXT_TRANSITION_SCREEN_BG === TRANSITION_BACKGROUNDS.LEVEL_2 ? <FirstTransition/>
        : <SecondTransition/>
      } */}
      {curr}
      {/* <SixthTransition/> */}
    </div>
  )
}
