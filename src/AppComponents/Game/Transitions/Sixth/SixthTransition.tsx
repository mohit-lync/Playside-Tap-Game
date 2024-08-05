

import { TRANSITION_ACTIONS, useTap } from '@/contexts/TapContext'

import ball from '/assets/TransitionPages/Sixth/ball.png'
export const SixthTransition = () => {
    const {state,setIsPaused,dispatch} = useTap()
    return (
      <div className=' absolute w-full flex items-center bg-level6TransitionBg justify-center flex-col h-screen -top-14 animate-transition-appear '
          onAnimationStart={
              ()=>{
                  setTimeout(()=>{
                      dispatch({type:TRANSITION_ACTIONS.TO_LEVEL_7_FINAL});
                      console.log(state);
                  },2505)
                  
              }
          }
          onAnimationEnd={()=>{
              // release the pause
              console.log(state);
              setIsPaused(false);
              
          }}
      >
          <div className='w-full absolute h-1/2  top-0 flex items-center justify-center flex-col px-10 gap-4'>
              <p className='font-semibold text-xl text-white text-center leading-5'>The TapTap Adventure Continues Today!</p>
              <p className='text-[#E8FAFF] font-light leading-4 text-center'
                  style={{
                      textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
                  }}
              >
                Collect Lucky Clovers <br />
                to use as Elements!
              </p>
          </div>
          <div>
              <img src={ball} className='w-20' alt="" />
          </div>
      </div>
    )
  }