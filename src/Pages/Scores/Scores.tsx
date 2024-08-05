import { Restscores } from '@/AppComponents/Scores/Restscores'
import { Topscores } from '@/AppComponents/Scores/Topscores'
import { useTap } from '@/contexts/TapContext'


export const Scores = () => {
  const {progress}  =useTap()
  console.log(progress);
  
  return (
    <div className='h-screen flex items-center flex-col w-full backdrop-blur-3xl overflow-hidden'
      style={{
        background:"linear-gradient(90deg, rgba(217, 217, 217, 0.02) 0%, rgba(92, 255, 255, 0.02) 100%)",

      }}
    >
      <Topscores/>
      <Restscores/>
    </div>
  )
}

