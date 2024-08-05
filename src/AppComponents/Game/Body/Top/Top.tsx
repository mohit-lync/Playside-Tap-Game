
import { Progressbar } from './Progressbar'
import { Scorecard } from './Scorecard'

export const Top = () => {
  return (
    <div className='flex items-center flex-col mb-5 mt-10 gap-7 w-full'>
        <Scorecard/>
        <Progressbar/>
    </div>
  )
}
