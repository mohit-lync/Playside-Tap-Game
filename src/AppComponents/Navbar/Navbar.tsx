
import { Sidebar } from './Sidebar/Sidebar'
import navLogo from '../../assets/Navbar/nav-logo.png'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useToast } from '@/components/ui/use-toast'
import clock from '/assets/Toast/clock.png'





export const Navbar = () => {
    const location = useLocation()
    const { toast } = useToast()
    
  return (
    <div className='bg-navbarBg z-10 backdrop-blur-[5px] flex items-center justify-between h-14 px-3 w-full'>
        <div>
            <img src={navLogo} alt="navlogo" className='w-16' />
        </div>
        <div>
            <div className='flex items-center justify-center p-1 rounded-[6.9px] bg-navLinks gap-2 h-8'>
                <Link to={"/"} className={cn('font-poppins font-bold text-xs py-[4px] px-[9px] leading-4',
                    location.pathname === '/'? `
                    text-white
                    bg-activeNavLinkBg
                    shadow-activeNavLinkBoxShadow
                    
                    rounded-[4px]
                    ` : 'text-[#9EA1A1]'
                )}
                style={{
                    textShadow:location.pathname === '/' ? '0px 0px 4px #4158BF' : ''
                }}
                >
                    Collect
                </Link>
                <div onClick={()=>{
                    toast({
                        
                        description: <div className='flex items-center h-full gap-2'>
                            <div className='self-start'>
                                <img className='w-7' src={clock} alt="" />
                            </div>
                            <div className='flex-1'>
                                <p className='text-white font-bold text-lg'>Coming soon</p>
                                <p className='font-light rounded-tr-lg rounded-br-lg text-white text-xs'>Join our TapTapPLAY Telegram to be the first to know what's coming next!</p>
                            </div>
                        </div>,
                        className:"w-5/6 rounded-none border-l-[7px] rounded-tr-xl rounded-br-xl border-r-0 border-y-0    border-l-[#635EB0] bg-toastBg",
                        duration:10000000000
                      })
                }} className={cn('font-poppins font-bold text-xs py-[4px] px-[9px]',
                    location.pathname === '/learn'? `
                    text-white
                    bg-activeNavLinkBg
                    shadow-activeNavLinkBoxShadow
                    
                    rounded-[4px]
                    ` : 'text-[#9EA1A1]'
                )}>Learn</div>
                <div onClick={()=>{
                    toast({
                        
                        description: <div className='flex items-center h-full gap-2'>
                            <div className='self-start'>
                                <img className='w-7' src={clock} alt="" />
                            </div>
                            <div className='flex-1'>
                                <p className='text-white font-bold text-lg'>Coming soon</p>
                                <p className='font-light rounded-tr-lg rounded-br-lg text-white text-xs'>Join our TapTapPLAY Telegram to be the first to know what's coming next!</p>
                            </div>
                        </div>,
                        className:"w-5/6 rounded-none border-l-[7px] rounded-tr-xl rounded-br-xl border-r-0 border-y-0    border-l-[#635EB0] bg-toastBg",
                        duration:10000000000
                      })
                }} className={cn('font-poppins font-bold text-xs py-[4px] px-[9px]',
                    location.pathname === '/scores'? `
                    text-white
                    bg-activeNavLinkBg
                    shadow-activeNavLinkBoxShadow
                    
                    rounded-[4px]
                    ` : 'text-[#9EA1A1]'
                )}>Scores</div>
                
            </div>
        </div>
        <Sidebar/>
    </div>
  )
}
