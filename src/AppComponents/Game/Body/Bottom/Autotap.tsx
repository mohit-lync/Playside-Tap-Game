
import { Switch } from "@/components/ui/switch"
import { useTap } from "@/contexts/TapContext";

export const Autotap = () => {
  const {isAutoTapping,setIsAutoTapping} = useTap()
  return (
    
    <div className='flex flex-col items-center w-full gap-1 '>
      <p className='text-[9px] text-white font-bold'>Auto Collect</p>
      <Switch className='w-20' checked={isAutoTapping} onCheckedChange={(val)=>{
        setIsAutoTapping(val)
        
      }} />
    </div>

  )
}





