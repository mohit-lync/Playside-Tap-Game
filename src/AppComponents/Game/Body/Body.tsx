
import { Top } from './Top/Top'
import { Bottom } from './Bottom/Bottom'

export const Body = () => {
  return (
    <div className='animate-appear w-full h-full flex items-center justify-center flex-col'
    >
        <Top/>
        <Bottom/>
    </div>
  )
}
