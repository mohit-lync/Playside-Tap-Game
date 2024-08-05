
// import level1 from '@/assets/Orbs/image.png'
import level1 from '@/assets/Orbs/lava.svg'
import { MessageBox } from './MessageBox'
import { ProgressConfigurations, TAP_BALLS, useTap } from '@/contexts/TapContext'
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef, useState } from 'react';
import ShineAnimation from '@/assets/Animations/Shine/shine.json'
import TapAnimation from '@/assets/Animations/Tap/tap-anim.json'
import { cn } from '@/lib/utils';
export const Taparea = () => {
  const {tapButton,handleTap,tapAnimationRef, state} = useTap();
  const [data,setData] = useState<any>(null);
  const [isTransitioning,setIsTransitioning] = useState<boolean>(false)

  useEffect(()=>{
    setTimeout(()=>{
      setData(TapAnimation)
    },1000)
  },[])
  const ShineAnimationLottieRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div className='relative w-full flex items-center justify-center'>
      <img src={state.BALL} ref={tapButton} onClick={handleTap} className={cn('w-64 z-20 animate-tapArea-float',false ? 'pointer-events-none' : 'pointer-events-auto')} alt="" 
        style={{
          scale: (state.BALL === TAP_BALLS.LEVEL_5 || state.BALL === TAP_BALLS.LEVEL_6 || state.BALL === TAP_BALLS.LEVEL_7) ? '1.3' 
            : state.BALL === TAP_BALLS.LEVEL_1 ? '0.8' : '1'
        }}
        onAnimationStart={()=>{
          setIsTransitioning(true)
        }}
        onAnimationEnd={()=>{
          
          console.log("pm");
          setIsTransitioning(false)

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
      <Lottie
          lottieRef={ShineAnimationLottieRef}
          animationData={
            tapAnimationRef.current
          }
          id="not-found-svg"
          loop={true}
          style={{
            maskImage: "radial-gradient(circle, black 50%, rgba(255, 0, 0, 0.5) 50%)"
          }}
          // className={`absolute -top-30 z-0 animate-appear  w-[100%] md:w-[37%] fill-transparent ${progress >= ProgressConfigurations.LIMIT ? "block" : "hidden"}` }
          className={`absolute -top-30 -z-10 block  w-[100vw] fill-transparent ` }
        />
      
      {/* <MessageBox/> */}
    </div>
  )
}
