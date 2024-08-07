import { useEffect, useState } from "react"

const InitializeLocalStorage = () =>{
    if(!localStorage.getItem('userTaps')){
        localStorage.setItem('userTaps',JSON.stringify(22));
    }
}
const GetTotalTaps = () =>{
    InitializeLocalStorage();
    const userTaps = JSON.parse(localStorage.getItem('userTaps') || '');
    console.log(JSON.parse(localStorage.getItem('userTaps') + ''));
    
    return userTaps;
}

const IncrementTotalTaps = (amount:number) =>{
    if(!localStorage.getItem('userTaps'))return

    const userTaps = JSON.parse(localStorage.getItem('userTaps') || '');
    console.log(userTaps);
    
    localStorage.setItem('userTaps',JSON.stringify(userTaps + amount));
    return Number(userTaps) + amount;
}



export const useLocalStorage = () => {
    const [totalTaps,setTotalTaps] = useState<any>(0);

    useEffect(()=>{
        setTotalTaps(GetTotalTaps());
    },[])

    const handleTapIncrement = () =>{
        setTotalTaps(IncrementTotalTaps(1));
    }
    return {
        totalTaps,
        handleTapIncrement
        
    }
}
