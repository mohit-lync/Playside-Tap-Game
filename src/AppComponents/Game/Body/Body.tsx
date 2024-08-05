
import { Top } from './Top/Top'
import { Bottom } from './Bottom/Bottom'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export const Body = () => {
  
  const [isTransitioning,setIsTransitioning] = useState<boolean>(false)
  return (
    <div className={cn('animate-appear w-full h-full flex items-center justify-center flex-col',isTransitioning ? 'pointer-events-none' : 'pointer-events-auto')}
      onAnimationStart={()=>{
        setIsTransitioning(true);
      }}
      onAnimationEnd={()=>{
        console.log("pm");
        setIsTransitioning(false) //
      }}
    >
        <Top/>
        <Bottom/>
    </div>
  )
}
