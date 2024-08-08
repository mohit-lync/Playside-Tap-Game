"use client";

import { useEffect, useState } from "react";

import { cn } from "../../lib/utils";



import { GAME_BACKGROUNDS, useTap } from "@/contexts/TapContext";

const ShowerTypes = {
  LEVEL_1: (idx:any,style:any)=>{
    return <div
    key={idx}
    className={cn(
      "pointer-events-none absolute rotate-[0deg] animate-meteor rounded-full z-30 ml-14",
      ['size-10','size-20'][Math.floor(Math.random() * 2)]
    )}
    style={style}
  >
    {/* <p className="text-lg text-green-400 z-30">PM</p> */}
    <img src={"/assets/Animations/Showers/Level1/shower.png"} className="w-20 relative  -top-32 rotate-90" alt="" />
    {/* Meteor Tail */}
    {/* <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" /> */}
  </div>
  },
  LEVEL_2: (idx:any,style:any)=>{
    return <div
      key={idx}
      className={cn(
        "pointer-events-none absolute rotate-[0deg] animate-meteor rounded-full z-30 ml-14",
        ['size-10','size-16'][Math.floor(Math.random() * 2)]
      )}
      style={style}
    >
      {/* <p className="text-lg text-green-400 z-30">PM</p> */}
      <img src={"/assets/Animations/Showers/Level2/shower.png"} className="w-32 relative  -top-32 rotate-90" alt="" />
      {/* Meteor Tail */}
      {/* <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" /> */}
    </div>
  },
  LEVEL_3: (idx:any,style:any)=>{
    return <div
      key={idx}
      className={cn(
        "pointer-events-none absolute rotate-[0deg] animate-meteor rounded-full z-30 ml-14",
        ['size-8','size-12'][Math.floor(Math.random() * 2)]
      )}
      style={style}
    >
      {/* <p className="text-lg text-green-400 z-30">PM</p> */}
      <img src={"/assets/Animations/Showers/Level3/shower.gif"} className="w-12 relative  -top-32 rotate-90" alt="" />
      {/* Meteor Tail */}
      {/* <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" /> */}
    </div>
  },
  LEVEL_4: (idx:any,style:any)=>{
    return <div
    key={idx}
    className={cn(
      "pointer-events-none absolute rotate-[0deg] animate-meteor rounded-full z-30 ml-14",
      ['size-8','size-12'][Math.floor(Math.random() * 2)]
    )}
    style={style}
  >
    {/* <p className="text-lg text-green-400 z-30">PM</p> */}
    <img src={"/assets/Animations/Showers/Level4/shower.gif"} className="w-12 relative  -top-32 rotate-90" alt="" />
    {/* Meteor Tail */}
    {/* <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" /> */}
  </div>
  },
  LEVEL_5: (idx:any,style:any)=>{
    return <div
      key={idx}
      className={cn(
        "pointer-events-none absolute rotate-[0deg] animate-meteor rounded-full z-30 ml-14",
        ['size-8','size-12'][Math.floor(Math.random() * 2)]
      )}
      style={style}
    >
      {/* <p className="text-lg text-green-400 z-30">PM</p> */}
      <img src={"/assets/Animations/Showers/Level5/shower.png"} className="w-12 relative  -top-32 rotate-90" alt="" />
      {/* Meteor Tail */}
      {/* <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" /> */}
    </div>
  },
  LEVEL_6: (idx:any,style:any)=>{
    return <div
      key={idx}
      className={cn(
        "pointer-events-none absolute rotate-[0deg] animate-meteor rounded-full z-30 ml-14",
        ['size-8','size-12'][Math.floor(Math.random() * 2)]
      )}
      style={style}
    >
      {/* <p className="text-lg text-green-400 z-30">PM</p> */}
      <img src={"/assets/Animations/Showers/Level6/shower.gif"} className="w-12 relative  -top-32 rotate-90" alt="" />
      {/* Meteor Tail */}
      {/* <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" /> */}
    </div>
  },
  LEVEL_7: (idx:any,style:any)=>{
    
    return <div
      key={idx}
      className={cn(
        "pointer-events-none absolute  size-48 rotate-[0deg] animate-meteor rounded-full z-30",
      )}
      style={style}
    >
      {/* <p className="text-lg text-green-400 z-30">PM</p> */}
      <img src={"/assets/Animations/Showers/Level7/shower.gif"} className="w-48 relative  -top-32 rotate-90" alt="" />
      {/* Meteor Tail */}
      {/* <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" /> */}
    </div>
  },
}

interface MeteorsProps {
  number?: number;
}
export const Meteors = ({ number = 20 }: MeteorsProps) => {
  
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );
  
  
  const {state} = useTap();
  const get_shower_type = (level:any) =>{
    
    
    if(level === GAME_BACKGROUNDS.LEVEL_1)return ShowerTypes.LEVEL_1;
    if(level === GAME_BACKGROUNDS.LEVEL_2)return ShowerTypes.LEVEL_2;
    if(level === GAME_BACKGROUNDS.LEVEL_3)return ShowerTypes.LEVEL_3;
    if(level === GAME_BACKGROUNDS.LEVEL_4)return ShowerTypes.LEVEL_4;
    if(level === GAME_BACKGROUNDS.LEVEL_5)return ShowerTypes.LEVEL_5;
    if(level === GAME_BACKGROUNDS.LEVEL_6)return ShowerTypes.LEVEL_6;
    if(level === GAME_BACKGROUNDS.LEVEL_7)return ShowerTypes.LEVEL_7;
  }

  useEffect(()=>{
    get_shower_type(state.CURRENT_GAME_SCREEN_BG)
    
    
  },[state])

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: 1.7+"s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        
        // ShowerTypes.LEVEL_5(idx,style)
        // showerType != null && showerType()
        
        (get_shower_type(state.CURRENT_GAME_SCREEN_BG) as any)(idx,style)
        // <div
        //   key={idx}
        //   className={cn(
        //     "pointer-events-none absolute rotate-[0deg] animate-meteor rounded-full z-30 ml-14",
        //     ['size-10','size-16'][Math.floor(Math.random() * 2)]
        //   )}
        //   style={style}
        // >
        //   {/* <p className="text-lg text-green-400 z-30">PM</p> */}
        //   <img src={"/assets/Animations/Showers/Level2/shower.png"} className="w-32 relative  -top-32 rotate-90" alt="" />
        //   {/* Meteor Tail */}
        //   {/* <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" /> */}
        // </div>
      ))}
    </>
  );
};

export default Meteors;




