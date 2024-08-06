
import {
  
  Outlet,
  
} from "react-router-dom";

import { Navbar } from './AppComponents/Navbar/Navbar';
import { Footer } from './AppComponents/Footer/Footer';
import { cn } from "./lib/utils";
import { GAME_BACKGROUNDS, useTap } from "./contexts/TapContext";
import { useEffect, useRef, useState } from "react";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
const BackgroundStyles = {
  LEVEL_1:{
    background:`
          
          url('/assets/Level1/bottom-bg.png'),
          url('/assets/Level1/right-bg.png'),
          url('/assets/Level1/center-bg.png'),
          url('/assets/Global/global-bg.jpg')
        `,
    backgroundSize: "100%,cover,cover, cover",
    backgroundPosition:"10px,top right,center,center"

  },
  LEVEL_2:{
    background:`
          
          url('/assets/Level2/moon-top.png'),
          url('/assets/Level2/center-bg.png'),
          url('/assets/Global/global-bg.jpg')
        `,
    backgroundSize:"100%,100%, cover",
    backgroundPosition:"10px 0px,center,center"

  },
  LEVEL_3:{
    background:`
          
          
          url('/assets/Level3/bottom-bg.png'),
          url('/assets/Level3/center-bg.png'),
          url('/assets/Global/global-bg.jpg')
        `,
    backgroundSize:"100%,100%, cover",
    backgroundPosition:"bottom,center,center"

  },
  LEVEL_4:{

    background:`url('/assets/Level4/center-bg.png'),
    url('/assets/Global/global-bg.jpg')`,
    backgroundSize:"100%, cover",
    backgroundPosition:'center,center'
  },
  LEVEL_5:{
    background:`
          
          
          url('/assets/Level5/bottom1-bg.png'),
          url('/assets/Level5/bottom2-bg.png'),
          url('/assets/Level5/center-bg.png'),
          url('/assets/Global/global-bg.jpg')
        `,
    backgroundSize:"100%,100%,100%, cover",
    backgroundPosition:"bottom,bottom,center,center"

  },
  LEVEL_6:{
    background:`
          
          
          
          
          url('/assets/Level6/center-bg.png'),
          url('/assets/Global/global-bg.jpg')
        `,
    backgroundSize: "100%,100%, cover",
    backgroundPosition:"center,center,center"

  },
  LEVEL_7:{
    background: `
          
          
          
          
    url('/assets/Level7/center-bg.png')
    
  `,
    backgroundSize:"100%",
    backgroundPosition:"center"

  },
  
  
}





function App() {
  const {state,tapAnimationPosition,tapAnimationRef} = useTap()
  console.log(tapAnimationPosition);
  
  const [currBg,setCurrBg] = useState<any>(null);

  const get_current_background = (level:any) =>{
    if(level === GAME_BACKGROUNDS.LEVEL_1)setCurrBg(BackgroundStyles.LEVEL_1);
    if(level === GAME_BACKGROUNDS.LEVEL_2)setCurrBg(BackgroundStyles.LEVEL_2);
    if(level === GAME_BACKGROUNDS.LEVEL_3)setCurrBg(BackgroundStyles.LEVEL_3);
    if(level === GAME_BACKGROUNDS.LEVEL_4)setCurrBg(BackgroundStyles.LEVEL_4);
    if(level === GAME_BACKGROUNDS.LEVEL_5)setCurrBg(BackgroundStyles.LEVEL_5);
    if(level === GAME_BACKGROUNDS.LEVEL_6)setCurrBg(BackgroundStyles.LEVEL_6);
    if(level === GAME_BACKGROUNDS.LEVEL_7)setCurrBg(BackgroundStyles.LEVEL_7);
  }

  useEffect(()=>{
    get_current_background(state.CURRENT_GAME_SCREEN_BG)
  },[state])
  const ShineAnimationLottieRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div className={cn(`h-screen relative flex items-center flex-col w-full bg-no-repeat overflow-hidden`,
      // progress >= 10 ? 'bg-level1TransitionBg' : "bg-level1Bg",
      // !isPaused ? 'bg-'+state.CURRENT_GAME_SCREEN_BG : 'bg-'+state.PREV_GAME_SCREEN_BG
      // 'bg-level7Bg'
      // 'bg-'+state.CURRENT_GAME_SCREEN_BG
    )}
    // <div className='h-screen flex items-center flex-col w-full bg-level1Bg bg-no-repeat overflow-hidden'
    style={currBg}
    >
      <Navbar/>
      <Outlet/>
      <Lottie
          lottieRef={ShineAnimationLottieRef}
          animationData={
            tapAnimationRef.current
            
          }
          id="tap-anim"
          loop={true}
          style={{
            left:(tapAnimationPosition?.x ) + 'px',
            top:(tapAnimationPosition?.y) + 'px',
          }}
          // className={`absolute -top-30 z-0 animate-appear  w-[100%] md:w-[37%] fill-transparent ${progress >= ProgressConfigurations.LIMIT ? "block" : "hidden"}` }
          className={`absolute top-5 z-10 block  w-10 -translate-x-5 -translate-y-5` }
        />
      <Footer/>
    </div>
  )
}

export default App
