
import ball from '/assets/TransitionPages/First/ball.png'
import { TRANSITION_ACTIONS, useTap } from '@/contexts/TapContext'
export const FirstTransition = () => {
    const {state,setIsPaused,dispatch} = useTap()
  return (
    <div className=' absolute w-full flex items-center bg-level1TransitionBg justify-center flex-col h-screen -top-14 animate-transition-appear '
        onAnimationStart={
            ()=>{
                setTimeout(()=>{
                    dispatch({type:TRANSITION_ACTIONS.TO_LEVEL_2_FINAL});
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
            <p className='text-[#E8FAFF] font-light leading-4'
                style={{
                    textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
                }}
            >Now entering <br /> Force realm..</p>
        </div>
        <div>
            <img src={ball} className='w-20' alt="" />
        </div>
    </div>
  )
}
/* Now entering Force realm.. */

// position: absolute;
// left: 23.41%;
// right: 23.66%;
// top: 30.16%;
// bottom: 66.08%;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 100%;
// /* or 16px */
// display: flex;
// align-items: center;
// text-align: center;

// color: #E8FAFF;

// text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


