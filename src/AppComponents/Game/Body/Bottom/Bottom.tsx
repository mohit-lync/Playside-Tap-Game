
import { Taparea } from './Taparea'
import { Autotap } from './Autotap'

export const Bottom = () => {
  return (
    <div className='flex-1 w-full flex items-center flex-col justify-center gap-10'>
        <Taparea/>
        <Autotap/>

    </div>
  )
}
