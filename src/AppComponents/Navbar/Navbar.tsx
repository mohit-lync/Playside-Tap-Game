
import { Sidebar } from './Sidebar/Sidebar'
import navLogo from '../../assets/Navbar/nav-logo.png'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'






export const Navbar = () => {
    const location = useLocation()
    
    
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
                <Link to={"/learn"} className={cn('font-poppins font-bold text-xs py-[4px] px-[9px]',
                    location.pathname === '/learn'? `
                    text-white
                    bg-activeNavLinkBg
                    shadow-activeNavLinkBoxShadow
                    
                    rounded-[4px]
                    ` : 'text-[#9EA1A1]'
                )}>Learn</Link>
                <Link to={"/scores"} className={cn('font-poppins font-bold text-xs py-[4px] px-[9px]',
                    location.pathname === '/scores'? `
                    text-white
                    bg-activeNavLinkBg
                    shadow-activeNavLinkBoxShadow
                    
                    rounded-[4px]
                    ` : 'text-[#9EA1A1]'
                )}>Scores</Link>
                
            </div>
        </div>
        <Sidebar/>
    </div>
  )
}
