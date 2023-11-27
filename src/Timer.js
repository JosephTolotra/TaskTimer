import { useContext, useState } from "react";
import Clock from "./Clock.js";
import style from "./Timer.module.css";
import TimerText from "./TimerText.js";
import TaskForm from "./TaskForm.js";
import { TaskContexte } from "./context/tasks.js";

let timerId;

function Timer(props){

    const {addTask}= useContext(TaskContexte);
    let [time, setTime]=useState(0);
    const [isTimerStarted, setisTimerStarted]=useState(false);
    const handleStart=({title, description})=>{
        if (!isTimerStarted) {
            timerId = setInterval(() => {
                setTime ((prevTime)=>{
                    return prevTime+1;
                })
            }, 1000);

            setisTimerStarted(true);
        }
        else{
           
            addTask({
                time: time,
                date: new Date(),
                title,
                description
            });
            clearInterval(timerId); 
            setisTimerStarted(false);
            setTime(0);
            
        }

        
    };
   
    return(
           <>
           
                <p className={style['clock-timer']}><Clock time={time} /></p>
                <TaskForm isTimerStarted={isTimerStarted} onSubmit={handleStart}/>
                <TimerText isTimerStarted={isTimerStarted} />
            </>
    );
}

export default Timer;