
// import level1 from '@/assets/Orbs/image.png'

import {  TAP_BALLS, useTap } from '@/contexts/TapContext'
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import {  useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import TapAnimation from '../../../../../public/assets/Animations/Tap/tap-anim.json'
export const Taparea = () => {
  const {tapButton,handleTap,tapAnimationRef,setTapAnimationPosition, state} = useTap();
  

  
  
  
  return (
    <>
    <div className='relative w-full flex items-center justify-center'>
      <img src={state.BALL} ref={tapButton} onClick={(event)=>{
        setTapAnimationPosition({
          x: event.clientX,
          y: event.clientY,
        })
        
        handleTap()
      }} className={cn('w-64 z-20 animate-tapArea-float')} alt="" 
        style={{
          scale: (state.BALL === TAP_BALLS.LEVEL_5 || state.BALL === TAP_BALLS.LEVEL_6 || state.BALL === TAP_BALLS.LEVEL_7) ? '1.3' 
            : state.BALL === TAP_BALLS.LEVEL_1 ? '0.8' : '1'
        }}
        
      />
      {/* <Lottie
          lottieRef={ShineAnimationLottieRef}
          animationData={ShineAnimation}
          id="not-found-svg"
          loop={true}
          // className={`absolute -top-30 z-0 animate-appear  w-[100%] md:w-[37%] fill-transparent ${progress >= ProgressConfigurations.LIMIT ? "block" : "hidden"}` }
          className={`absolute -top-30 z-0 animate-appear  w-[100%] md:w-[37%] fill-transparent ${progress >= 10 ? "block" : "hidden"}` }
        /> */}
      
      {/* <MessageBox/> */}
    </div>
      
        </>
  )
}
