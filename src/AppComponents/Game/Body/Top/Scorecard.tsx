
import level1 from '/assets/Scorecard/level1.png'
import level2 from '/assets/Scorecard/level2.png'
import level3 from '/assets/Scorecard/level3.png'
import level4 from '/assets/Scorecard/level4.png'
import level5 from '/assets/Scorecard/level5.png'
import level6 from '/assets/Scorecard/level6.png'
import level7 from '/assets/Scorecard/level7.png'
import { SCORE_ICON_LEVELS_REF, useTap } from '@/contexts/TapContext'



export const Scorecard = () => {

  // @ts-ignore: Unreachable code error
  const {progress,state,renderHelper,totalTaps} = useTap()
  console.log(totalTaps);
  
  return (
    // <div className='rounded-xl [border-image:linear-gradient(to_top_right,#f6b73c,#4d9f0c)_30] border-4 border-solid border-transparent bg-white p-4'>
    <div className='bg-scoreCardBorderGradient h-10 z-10  rounded-[12px] p-[1.5px]'>
      <div className='relative h-full w-full px-2 bg-scoreCardBgGradient rounded-[10px] text-white flex items-center justify-center'>
        
        
        
        
        
        
        
        {state.SCORE_ICON_REF === SCORE_ICON_LEVELS_REF.LEVEL_1 
            ? 
              <img src={level1} className='w-12 absolute -left-2 -top-4' alt="" />  
            : 
            state.SCORE_ICON_REF === SCORE_ICON_LEVELS_REF.LEVEL_2 
            ?
              <img src={level2} className='w-12 absolute -left-2 -top-4' alt="" />
            : 
              state.SCORE_ICON_REF === SCORE_ICON_LEVELS_REF.LEVEL_3
            ?
              <img src={level3} className='w-10 absolute -left-0 -top-5' alt="" />
            :
              state.SCORE_ICON_REF === SCORE_ICON_LEVELS_REF.LEVEL_4  
            ?
              <img src={level4} className='w-10 absolute left-0 -top-5' alt="" />
            :
              state.SCORE_ICON_REF === SCORE_ICON_LEVELS_REF.LEVEL_5
            ? 
              <img src={level5} className='w-12 absolute -left-2 -top-4' alt="" />
            :
              state.SCORE_ICON_REF === SCORE_ICON_LEVELS_REF.LEVEL_6
            ?
              <img src={level6} className='w-16 absolute -left-3 -top-5' alt="" />
            :
              <img src={level7} className='w-12 absolute -left-2 -top-4' alt="" />  
            
          }
        <p className='font-bold text-base ml-10 mb-0.5'>{totalTaps} Elements</p>
      </div>
    </div>
    
  )
}
