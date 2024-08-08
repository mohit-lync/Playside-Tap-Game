
import level1 from '/assets/Progressbar/level1.png'
import level2 from '/assets/Progressbar/level2.png'
import level3 from '/assets/Progressbar/level3.png'
import level4 from '/assets/Progressbar/level4.png'
import level5 from '/assets/Progressbar/level5.png'
import level6 from '/assets/Progressbar/level6.png'
import level7 from '/assets/Progressbar/level7.png'
import { PROGRESS_BAR_LEVELS_REF, ProgressConfigurations, useTap } from '@/contexts/TapContext'

const percenttage_calculate = (progress:number,start:number) =>{
  const d = progress - start;
  
  
  const p = d * 100 / 95; 
  
  return p
}


export const Progressbar = () => {
  const {progressBar,progress,state,totalTaps} = useTap()
  

  
  const level1ProgressIcon = (
    <>
      {/* <img src={level2} className='absolute w-4 scale-150 mb-1 top-[0.725rem] left-3' alt=""
        style={{
          filter: "grayscale(100%)"
        }}
      /> */}
      <div className={'relative w-full h-full flex items-end justify-center mb-3 overflow-hidden'}
        style={{
          // height:`${percenttage_calculate(totalTaps,0)/2}%`
          // height:(100)+'%',
          
        }}
      >
        <img src={level1} className='w-3 h-auto' alt=""
          style={{
            // filter: "grayscale(100%)"
          }}
        />
  
      </div>
    </>
  )
  const level2ProgressIcon = (
    <>
      <img src={level2} className='absolute w-4 scale-150 mb-1 top-[0.725rem] left-3' alt=""
        style={{
          filter: "grayscale(100%)"
        }}
      />
      <div className={'relative w-full flex items-end justify-center mb-2.5 overflow-hidden'}
        style={{
          height:`${percenttage_calculate(totalTaps,ProgressConfigurations.INTERVALS.FIRST)/2}%`
          // height:(100)+'%',
          
        }}
      >
        <img src={level2} className='w-4 h-auto scale-150 mb-1' alt=""
          style={{
            // filter: "grayscale(100%)"
          }}
        />
  
      </div>
    </>
  )
  const level3ProgressIcon = (
    <>
      <img src={level3} className='absolute w-4 scale-150 mb-1 top-1.5 left-3' alt=""
        style={{
          filter: "grayscale(100%)"
        }}
      />
      <div className={'relative w-full flex items-end justify-center mb-2.5 overflow-hidden'}
        style={{
          height:`${percenttage_calculate(totalTaps,ProgressConfigurations.INTERVALS.SECOND)/2}%`
          // height:(100)+'%',
          
        }}
      >
        <img src={level3} className='w-4 h-auto scale-150 mb-1' alt=""
          style={{
            // filter: "grayscale(100%)"
          }}
        />
  
      </div>
    </>
  )
  const level4ProgressIcon = (
    <>
      <img src={level4} className='absolute w-4 scale-[2] mb-1 top-3 left-3' alt=""
        style={{
          filter: "grayscale(100%)"
        }}
      />
      <div className={'relative w-full flex items-end justify-center mb-2.5 overflow-hidden'}
        style={{
          height:`${percenttage_calculate(totalTaps,ProgressConfigurations.INTERVALS.THIRD)/2}%`
          // height:(100)+'%',
          
        }}
      >
        <img src={level4} className='w-4 h-auto scale-[2] mb-1' alt=""
          style={{
            // filter: "grayscale(100%)"
          }}
        />
  
      </div>
    </>
  )
  const level5ProgressIcon = (
    <>
      <img src={level5} className='absolute w-4 scale-[1.3] mb-1 top-3 left-3' alt=""
        style={{
          filter: "grayscale(100%)"
        }}
      />
      <div className={'relative w-full flex items-end justify-center mb-2.5 overflow-hidden'}
        style={{
          height:`${percenttage_calculate(totalTaps,ProgressConfigurations.INTERVALS.FOURTH)/2}%`
          // height:(100)+'%',
          
        }}
      >
        <img src={level5} className='w-4  scale-[1.3] mb-0.5' alt=""
          style={{
            // filter: "grayscale(100%)"
          }}
        />
  
      </div>
    </>
  )
  const level6ProgressIcon = (
    <>
      <img src={level6} className='absolute w-5 scale-[1.3] mb-1 top-3 left-2.5' alt=""
        style={{
          filter: "grayscale(100%)"
        }}
      />
      <div className={'relative w-full flex items-end justify-center mb-2.5 overflow-hidden'}
        style={{
          height:`${percenttage_calculate(totalTaps,ProgressConfigurations.INTERVALS.FIFTH)/2}%`
          // height:(100)+'%',
          
        }}
      >
        <img src={level6} className='w-5  scale-[1.3] mb-0.5' alt=""
          style={{
            // filter: "grayscale(100%)"
          }}
        />
  
      </div>
    </>
  )
  const level7ProgressIcon = (
    <>
      <img src={level7} className='absolute w-4 scale-[1.3] mb-1 top-3 left-3' alt=""
        style={{
          filter: "grayscale(100%)"
        }}
      />
      <div className={'relative w-full flex items-end justify-center mb-2.5 overflow-hidden'}
        style={{
          height:`${percenttage_calculate(totalTaps,ProgressConfigurations.INTERVALS.SIXTH)/2}%`
          // height:(100)+'%',
          
        }}
      >
        <img src={level7} className='w-4  scale-[1.3]' alt=""
          style={{
            // filter: "grayscale(100%)"
          }}
        />
  
      </div>
    </>
  )

  
  return (
    <div id="progressContainer" className='relative  w-[80%] z-10 h-5 rounded-full bg-[#252525] border-[3.7px] border-[#8e8e8e9b]'
    >
        
        
        <div id="progressBar" ref={progressBar} className={`h-full rounded-full `}
          style={{
            width:Math.min(progress,100)+'%',
            background: "linear-gradient(90deg, #FF6417 1.86%, rgba(112, 0, 255, 0.94) 101%)",
            boxShadow: "inset 0px -2.16186px 4.32372px rgba(0, 0, 0, 0.25), inset 0px 3.24279px 4.32372px rgba(255, 255, 255, 0.5)"
          }}
        ></div>


        <div className='absolute bg-[#252525] h-10 w-10 rounded-full -right-5 -top-3.5 flex items-end justify-center'
          style={{
            filter: "drop-shadow(0px 3.23287px 3.23287px rgba(0, 0, 0, 0.25)) drop-shadow(0px 0px 6.46573px #B4AEFF)"
          }}
        >
          {state.PROGRESS_ICON_REF === PROGRESS_BAR_LEVELS_REF.LEVEL_1 
            ? 
              level1ProgressIcon 
            : 
            state.PROGRESS_ICON_REF === PROGRESS_BAR_LEVELS_REF.LEVEL_2 
            ?
              level2ProgressIcon
            : 
              state.PROGRESS_ICON_REF === PROGRESS_BAR_LEVELS_REF.LEVEL_3
            ?
              level3ProgressIcon
            :
              state.PROGRESS_ICON_REF === PROGRESS_BAR_LEVELS_REF.LEVEL_4  
            ?
              level4ProgressIcon
            :
              state.PROGRESS_ICON_REF === PROGRESS_BAR_LEVELS_REF.LEVEL_5
            ? 
              level5ProgressIcon
            :
              state.PROGRESS_ICON_REF === PROGRESS_BAR_LEVELS_REF.LEVEL_6
            ?
              level6ProgressIcon
            :
              level7ProgressIcon
            
          }
        </div>
        <p className='absolute -bottom-6 flex items-center justify-center w-full text-white font-normal text-xs leading-4'>Power Meter</p>
    </div>
  )
}




