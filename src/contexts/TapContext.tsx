import React, { useContext, useEffect, useReducer, useRef, useState } from "react";

import TapAnimation from '../assets/Animations/Tap/tap-anim.json'
import level1_ball from '/assets/Orbs/level1.png';
import level2_ball from '/assets/Orbs/level2.png';
import level3_ball from '/assets/Orbs/level3.svg';
import level4_ball from '/assets/Orbs/level4.svg';
import level5_ball from '/assets/Orbs/level5.svg';
import level6_ball from '/assets/Orbs/level6.png';
import level7_ball from '/assets/Orbs/level7.svg';
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Meteors from "@/components/ui/meteors";

const SHOWER = <Meteors number={40}/>


export const TAP_BALLS = {
    LEVEL_1: level1_ball,
    LEVEL_2: level2_ball,
    LEVEL_3: level3_ball,
    LEVEL_4: level4_ball,
    LEVEL_5: level5_ball,
    LEVEL_6: level6_ball,
    LEVEL_7: level7_ball
}

type LEVEL_CONFIG = {

    
    CURRENT_GAME_SCREEN_BG:string | any,
    NEXT_TRANSITION_SCREEN_BG:string | any,
    BALL:any,
    PROGRESS_ICON_REF:any,
    SCORE_ICON_REF:any
}
export const GAME_BACKGROUNDS = {
    LEVEL_1:'level1Bg',
    LEVEL_2:'level2Bg',
    LEVEL_3:'level3Bg',
    LEVEL_4:'level4Bg',
    LEVEL_5:'level5Bg',
    LEVEL_6:'level6Bg',
    LEVEL_7:'level7Bg',
}
export const TRANSITION_BACKGROUNDS = {
    LEVEL_1:'level1TransitionBg',
    LEVEL_2:'level2TransitionBg',
    LEVEL_3:'level3TransitionBg',
    LEVEL_4:'level4TransitionBg',
    LEVEL_5:'level5TransitionBg',
    LEVEL_6:'level6TransitionBg',
    LEVEL_7:'level7TransitionBg',
}

export const PROGRESS_BAR_LEVELS_REF = {
    LEVEL_1:'progress-bar-level1',
    LEVEL_2:'progress-bar-level2',
    LEVEL_3:'progress-bar-level3',
    LEVEL_4:'progress-bar-level4',
    LEVEL_5:'progress-bar-level5',
    LEVEL_6:'progress-bar-level6',
    LEVEL_7:'progress-bar-level7',
}
export const SCORE_ICON_LEVELS_REF = {
    LEVEL_1:'score-icon-level1',
    LEVEL_2:'score-icon-level2',
    LEVEL_3:'score-icon-level3',
    LEVEL_4:'score-icon-level4',
    LEVEL_5:'score-icon-level5',
    LEVEL_6:'score-icon-level6',
    LEVEL_7:'score-icon-level7',
}

const initialState : LEVEL_CONFIG = {
    
    CURRENT_GAME_SCREEN_BG:GAME_BACKGROUNDS.LEVEL_1,
    NEXT_TRANSITION_SCREEN_BG:TRANSITION_BACKGROUNDS.LEVEL_2,
    BALL:TAP_BALLS.LEVEL_1,
    PROGRESS_ICON_REF: PROGRESS_BAR_LEVELS_REF.LEVEL_1,
    SCORE_ICON_REF:SCORE_ICON_LEVELS_REF.LEVEL_1

}


interface ITapContext {
    progress: number;
    isTapping: boolean;
    incrementProgress: () => void;
    decrementProgress: () => void;
    setIsTapping: (condition:boolean) => void;
    progressBar: any;
    tapButton: any;
    decrementInterval: any;
    handleTap: ()=>void;
    tapAnimationRef: any;
    isPaused: boolean;
    setIsPaused: any;
    state:LEVEL_CONFIG;
    dispatch:any;
    isAutoTapping: boolean;
    setIsAutoTapping:any;
    renderHelper:number;
    tapAnimationPosition:any;
    setTapAnimationPosition:any;
    totalTaps:number;
    particlesShowerRef:any;
    isShowering:boolean;
    setIsShowering:any;
}


const TapContext = React.createContext<ITapContext>({
    progress: 0,
    isTapping: false,
    incrementProgress: () => null,
    decrementProgress: () => null,
    setIsTapping: () => null,
    progressBar: null,
    tapButton: null,
    decrementInterval: null,
    handleTap:()=>null,
    tapAnimationRef: null,
    isPaused: false,
    setIsPaused: null,
    state: initialState,
    dispatch: ()=>null,
    isAutoTapping: false,
    setIsAutoTapping:null,
    renderHelper: 0,
    tapAnimationPosition:null,
    setTapAnimationPosition:()=>null,
    totalTaps:0,
    particlesShowerRef:null,
    isShowering: false,
    setIsShowering: ()=>null


})


export const ProgressConfigurations = {
    LIMIT:700,
    INCREMENT_RATE:1,
    DECREMENT_RATE:0.1,
    INTERVALS:{
        FIRST:100,
        SECOND:200,
        THIRD:300,
        FOURTH:400,
        FIFTH:500,
        SIXTH:600,
        // FIRST:10,
        // SECOND:20,
        // THIRD:30,
        // FOURTH:40,
        // FIFTH:50,
        // SIXTH:60,
    }    
}




export const useTap = () =>{
    return useContext(TapContext)
}



export const TRANSITION_ACTIONS = {
    TO_LEVEL_2_MIDWAY:'to-level-2',
    TO_LEVEL_2_FINAL:'to-level-2-final',
    
    TO_LEVEL_3_MIDWAY:'to-level-3',
    TO_LEVEL_3_FINAL:'to-level-3-final',

    TO_LEVEL_4_MIDWAY:'to-level-4',
    TO_LEVEL_4_FINAL:'to-level-4-final',

    TO_LEVEL_5_MIDWAY:'to-level-5',
    TO_LEVEL_5_FINAL:'to-level-5-final',

    TO_LEVEL_6_MIDWAY:'to-level-6',
    TO_LEVEL_6_FINAL:'to-level-6-final',


    TO_LEVEL_7_MIDWAY:'to-level-7',
    TO_LEVEL_7_FINAL:'to-level-7-final',
}


const ParticlesDisplayAllower = (tap_value:number) =>{
    if(
        tap_value === ProgressConfigurations.INTERVALS.FIRST ||
        tap_value === ProgressConfigurations.INTERVALS.SECOND ||
        tap_value === ProgressConfigurations.INTERVALS.THIRD ||
        tap_value === ProgressConfigurations.INTERVALS.FOURTH ||
        tap_value === ProgressConfigurations.INTERVALS.FIFTH||
        tap_value === ProgressConfigurations.INTERVALS.SIXTH
    ) return false;

    return tap_value % 45 === 0 && tap_value !== 0;
}

const reducer = (state: any, {type}: any) => {
    switch(type){
        case TRANSITION_ACTIONS.TO_LEVEL_2_MIDWAY:
            return {
                
                
                CURRENT_GAME_SCREEN_BG: GAME_BACKGROUNDS.LEVEL_1,
                NEXT_TRANSITION_SCREEN_BG: TRANSITION_BACKGROUNDS.LEVEL_1,
                
            }
        case TRANSITION_ACTIONS.TO_LEVEL_2_FINAL:
            return{
                ...state,
                CURRENT_GAME_SCREEN_BG: GAME_BACKGROUNDS.LEVEL_2,
                BALL: TAP_BALLS.LEVEL_2,
                PROGRESS_ICON_REF: PROGRESS_BAR_LEVELS_REF.LEVEL_2,
                SCORE_ICON_REF: SCORE_ICON_LEVELS_REF.LEVEL_2,

            }


        case TRANSITION_ACTIONS.TO_LEVEL_3_MIDWAY:
            return {
                
                
                CURRENT_GAME_SCREEN_BG: GAME_BACKGROUNDS.LEVEL_2,
                NEXT_TRANSITION_SCREEN_BG: TRANSITION_BACKGROUNDS.LEVEL_3,
                
            }
        case TRANSITION_ACTIONS.TO_LEVEL_3_FINAL:
            return{
                ...state,
                CURRENT_GAME_SCREEN_BG: GAME_BACKGROUNDS.LEVEL_3,
                BALL: TAP_BALLS.LEVEL_3,
                PROGRESS_ICON_REF: PROGRESS_BAR_LEVELS_REF.LEVEL_3,
                SCORE_ICON_REF: SCORE_ICON_LEVELS_REF.LEVEL_3,
            }



        case TRANSITION_ACTIONS.TO_LEVEL_4_MIDWAY:
            return {
                
                
                CURRENT_GAME_SCREEN_BG: GAME_BACKGROUNDS.LEVEL_3,
                NEXT_TRANSITION_SCREEN_BG: TRANSITION_BACKGROUNDS.LEVEL_4,
                
            }
        case TRANSITION_ACTIONS.TO_LEVEL_4_FINAL:
            return{
                ...state,
                CURRENT_GAME_SCREEN_BG: GAME_BACKGROUNDS.LEVEL_4,
                BALL: TAP_BALLS.LEVEL_4,
                PROGRESS_ICON_REF: PROGRESS_BAR_LEVELS_REF.LEVEL_4,
                SCORE_ICON_REF: SCORE_ICON_LEVELS_REF.LEVEL_4,
            }


        case TRANSITION_ACTIONS.TO_LEVEL_5_MIDWAY:
            return {
                
                
                CURRENT_GAME_SCREEN_BG: GAME_BACKGROUNDS.LEVEL_4,
                NEXT_TRANSITION_SCREEN_BG: TRANSITION_BACKGROUNDS.LEVEL_5,
                
            }
        case TRANSITION_ACTIONS.TO_LEVEL_5_FINAL:
            return{
                ...state,
                CURRENT_GAME_SCREEN_BG: GAME_BACKGROUNDS.LEVEL_5,
                BALL: TAP_BALLS.LEVEL_5,
                PROGRESS_ICON_REF: PROGRESS_BAR_LEVELS_REF.LEVEL_5,
                SCORE_ICON_REF: SCORE_ICON_LEVELS_REF.LEVEL_5,
            }

        
        case TRANSITION_ACTIONS.TO_LEVEL_6_MIDWAY:
            return {
                
                
                CURRENT_GAME_SCREEN_BG: GAME_BACKGROUNDS.LEVEL_5,
                NEXT_TRANSITION_SCREEN_BG: TRANSITION_BACKGROUNDS.LEVEL_6,
                
            }
        case TRANSITION_ACTIONS.TO_LEVEL_6_FINAL:
            return{
                ...state,
                CURRENT_GAME_SCREEN_BG: GAME_BACKGROUNDS.LEVEL_6,
                BALL: TAP_BALLS.LEVEL_6,
                PROGRESS_ICON_REF: PROGRESS_BAR_LEVELS_REF.LEVEL_6,
                SCORE_ICON_REF: SCORE_ICON_LEVELS_REF.LEVEL_6,
            }

        
        case TRANSITION_ACTIONS.TO_LEVEL_7_MIDWAY:
            return {
                
                
                CURRENT_GAME_SCREEN_BG: GAME_BACKGROUNDS.LEVEL_6,
                NEXT_TRANSITION_SCREEN_BG: TRANSITION_BACKGROUNDS.LEVEL_7,
                
            }
        case TRANSITION_ACTIONS.TO_LEVEL_7_FINAL:
            return{
                ...state,
                CURRENT_GAME_SCREEN_BG: GAME_BACKGROUNDS.LEVEL_7,
                BALL: TAP_BALLS.LEVEL_7,
                PROGRESS_ICON_REF: PROGRESS_BAR_LEVELS_REF.LEVEL_7,
                SCORE_ICON_REF: SCORE_ICON_LEVELS_REF.LEVEL_7,
            }
        default:
            return state;
    }
}


const TapProvider = ({children,}: Readonly<{children: React.ReactNode;}>) => {
    // const [progress,setProgress] = useState<number>(0);
    const progress = useRef<number>(0);
    const {totalTaps,handleTapIncrement} = useLocalStorage() //from here taps are different and progress is different
    
    

    const [isTapping,setIsTapping] = useState<boolean>(false);
    const [isPaused,setIsPaused] = useState<boolean>(false);
    const [isAutoTapping,setIsAutoTapping] = useState<boolean>(false);
    const [renderHelper,setRenderHelper] = useState<number>(0);
    const [tapAnimationPosition,setTapAnimationPosition] = useState<any>(null)
    const [isShowering,setIsShowering] = useState<boolean>(false)
    

    const autoTapInterval = useRef<any>(null);
    // const decrementInterval = useRef<any>(null);
    const progressBar = useRef(null);
    const tapButton = useRef(null);
    const tapAnimationRef = useRef<any>(null);
    const particlesShowerRef = useRef<any>(null);

    const [state,dispatch] = useReducer(reducer,initialState);



    
        
    



    /*-------------------------------------------setting the current level code----------------------------- */

    // setTimeout(()=>{
    //     progress.current = 12;
    //     console.log("done");
        

    //     setRenderHelper(Math.random())
    // },2000)

    useEffect(()=>{
        
        if(ParticlesDisplayAllower(totalTaps)){
            console.log(particlesShowerRef.current);
            particlesShowerRef.current = SHOWER;
            setIsShowering(true)
            setTimeout(()=>{
                console.log("particles off");
                console.log(particlesShowerRef.current.props.className);
                setIsShowering(false)
                particlesShowerRef.current = null
                particlesShowerRef.current = <div className="hidden"></div>;

            },3000)
            
        }

        progress.current = Math.floor(totalTaps * 100 / ProgressConfigurations.LIMIT);
        setRenderHelper(Math.random());

        if(totalTaps < ProgressConfigurations.INTERVALS.FIRST){

        }else if(totalTaps < ProgressConfigurations.INTERVALS.SECOND){
            
            dispatch({type: TRANSITION_ACTIONS.TO_LEVEL_2_FINAL})
            
        }else if(totalTaps < ProgressConfigurations.INTERVALS.THIRD){

            dispatch({type: TRANSITION_ACTIONS.TO_LEVEL_3_FINAL})
            
        }else if(totalTaps < ProgressConfigurations.INTERVALS.FOURTH){
            
            dispatch({type: TRANSITION_ACTIONS.TO_LEVEL_4_FINAL})
            
        }else if(totalTaps < ProgressConfigurations.INTERVALS.FIFTH){
            
            dispatch({type: TRANSITION_ACTIONS.TO_LEVEL_5_FINAL})
            
        }else if(totalTaps < ProgressConfigurations.INTERVALS.SIXTH){
            
            dispatch({type: TRANSITION_ACTIONS.TO_LEVEL_6_FINAL})
            
        }else{

            dispatch({type: TRANSITION_ACTIONS.TO_LEVEL_7_FINAL})
            
        }
    },[totalTaps])

    /*-------------------------------------------setting the current level code END----------------------------- */






    
    useEffect(()=>{
        // console.log(progress);
        
        if(totalTaps === ProgressConfigurations.INTERVALS.FIRST){
            setIsPaused(true);
            
            dispatch({type: TRANSITION_ACTIONS.TO_LEVEL_2_MIDWAY})
        }
        if(totalTaps === ProgressConfigurations.INTERVALS.SECOND){
            setIsPaused(true);
            dispatch({type: TRANSITION_ACTIONS.TO_LEVEL_3_MIDWAY})
            
        }

        if(totalTaps === ProgressConfigurations.INTERVALS.THIRD){
            setIsPaused(true);
            dispatch({type: TRANSITION_ACTIONS.TO_LEVEL_4_MIDWAY})
        }

        if(totalTaps === ProgressConfigurations.INTERVALS.FOURTH){
            setIsPaused(true);
            dispatch({type: TRANSITION_ACTIONS.TO_LEVEL_5_MIDWAY})
        }

        if(totalTaps === ProgressConfigurations.INTERVALS.FIFTH){
            setIsPaused(true);
            dispatch({type: TRANSITION_ACTIONS.TO_LEVEL_6_MIDWAY})
        }
        if(totalTaps === ProgressConfigurations.INTERVALS.SIXTH){
            setIsPaused(true);
            dispatch({type: TRANSITION_ACTIONS.TO_LEVEL_7_MIDWAY})
        }
    },[totalTaps])
    
    useEffect(()=>{
        if(isPaused){
            if(autoTapInterval.current)clearInterval(autoTapInterval.current)
        }
        if(isAutoTapping){
            autoTapInterval.current = setInterval(()=>{
                if(isPaused)return
                console.log("interval");
                handleTap()
                setRenderHelper(Math.random())
            },200)
        }else{
            clearInterval(autoTapInterval.current)
        }
    },[isAutoTapping,isPaused])

    const incrementProgress = () =>{
        
        
        if(progress.current < ProgressConfigurations.LIMIT){

            progress.current = progress.current + ProgressConfigurations.INCREMENT_RATE;
        }
    }

    // const decrementProgress = () =>{
    //     if(progress > 0){
    //         setProgress(progress - ProgressConfigurations.DECREMENT_RATE);
    //         ((progressBar.current as unknown) as HTMLElement).style.width = `${progress}%`;
    //     }
    // }

    

    const handleTap = ()=>{
        if(isPaused)return
        setIsTapping(true);
        if(!isAutoTapping)tapAnimationRef.current = TapAnimation;
        incrementProgress();
        handleTapIncrement()
        setTimeout(() => {
            tapAnimationRef.current = null;
            setIsTapping(false)
        }, 100);
    }

    const value : any = {
        progress:progress.current,
        isTapping,
        progressBar,
        tapButton,
        handleTap,
        setIsTapping,
        tapAnimationRef,
        isPaused,
        setIsPaused,
        state,
        dispatch,
        isAutoTapping,
        setIsAutoTapping,
        renderHelper,
        tapAnimationPosition,
        setTapAnimationPosition,
        totalTaps,
        particlesShowerRef,
        isShowering,
        setIsShowering,

    }

    return (
        <TapContext.Provider value={value}>
            {children}
        </TapContext.Provider>
    )
}

export default TapProvider;