import { useState } from "react";
import Clock from "./Clock.js";
import style from "./Timer.module.css";
import TimerText from "./TimerText.js"
//  import Button from "./Button.js";
import TaskForm from "./TaskForm.js";

let timerId;

function Timer(props){
    let [time, setTime]=useState(0);
    const [isTimerStarted, setisTimerStarted]=useState(false);
   // let timerId;//Tsy mety vao atao ato ny timerId noho le setInterval
    const handleStart=({title, description})=>{
        if (!isTimerStarted) {
            timerId = setInterval(() => {
                // setTime(time=time+1); //Mety iahny ito ka
                setTime ((prevTime)=>{
                    return prevTime+1;
                })
            }, 1000);

            setisTimerStarted(true);
        }
        else{
           
            props.saveTime(time, title, description);
            clearInterval(timerId); 
            setisTimerStarted(false);
            setTime(0);
            
        }

        
    };
    // const displayTimerText=useMemo(()=>{
    //     return(
    //         <p>
    //         {console.log("RENDER!!!!!!")}
    //         Le Timer est {isTimerStarted ? 'démarré' : 'arrété'}
    //     </p> 
            
    //     );
    // }, [isTimerStarted]);// Rehefa miova ihany ny isTimerStarted vao mirecharge ito paragraphe ito fa tsy hoe rerendu isan-tsengondra

    return(
           <>
           
                <p className={style['clock-timer']}><Clock time={time} /></p>
                <TaskForm isTimerStarted={isTimerStarted} onSubmit={handleStart}/>
                {/* <Button onClick={handleStart} isTimerStarted={isTimerStarted} /> */}
                {/* Ny bouton maivana dia tsy maninona na rerendu foana aza fa ny zavatra mavesatra no mila memorisena fa mandany mémoire */}
                {/* {displayTimerText} */}
                <TimerText isTimerStarted={isTimerStarted} />
            </>
    );
}

export default Timer;