
import { scores,my_address } from '@/constants/score_data'


export const Restscores = () => {
  return (
    <div className='flex-1 w-full overflow-scroll no-scrollbar px-5 flex items-center flex-col gap-2  pb-5'
        style={{
            maxHeight:"inherit"
        }}
    >
        {
            scores.slice(3).map((score,index)=>{
                return (
                    <div key={index} className='flex items-center justify-between w-full p-5 bg-[#252728] rounded-xl text-white font-semibold'
                        style={{
                            background:score.id === my_address ?  "linear-gradient(180deg, #5100FF 0%, #510099 100%)" :''
                        }}
                    >
                        <div>{index + 4}</div>
                        <div className='flex items-center justify-start w-10 mr-10'>{score.id === my_address ? 'You' : score.id.slice(0,10) + '...'}</div>
                        <div className='font-light'>{+score.score >=1000 ? (+score.score / 1000 ) +'k' : score.score} Taps</div>
                    </div>
                )
            })
        }
        
       
    </div>
  )
}
