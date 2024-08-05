import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useRef } from 'react';
import switchToMobileAnim from '../../../public/assets/Animations/SwitchToMobile/SwitchToMobile.json'
import App from '@/App';
export const SwitchToMobileView = () => {
    const AnimationLottieRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div>
      <div className='hidden md:flex h-screen w-screen overflow-hidden items-center justify-center flex-col'>
        <Lottie
          lottieRef={AnimationLottieRef}
          animationData={
            switchToMobileAnim
          }
          id="not-found-svg"
          loop={true}
          // className={`absolute -top-30 z-0 animate-appear  w-[100%] md:w-[37%] fill-transparent ${progress >= ProgressConfigurations.LIMIT ? "block" : "hidden"}` }
          className={`block  w-[50vw] fill-transparent ` }
        />
        please switch to mobile view
      </div>
      <div className='md:hidden h-screen overflow-hidden'>
        <App />
      </div>
    </div>
  )
}
