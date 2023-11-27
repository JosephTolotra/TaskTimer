import { useContext, useMemo, useRef } from "react";
import Clock from "./Clock";
import style from "./TimersTable.module.css";
import { TaskContexte } from "./context/tasks";
function TimersTable(props){

    const {removeTask} = useContext(TaskContexte);
    // console.log(tasks);
    const timersRef=useRef(null);

    const addTimerRef=(element)=>{
        if(timersRef.current && !timersRef.current.includes(element) && element){
            timersRef.current.push(element);
        }

    }

    const memoTableth=useMemo(()=>{
        return(
            <tr>
            <th>Date</th>
            <th>Tâche</th>
            <th>Description</th>
            <th>Temps</th>
            <th></th>
            
        </tr>
        );
    }, [])

    

    return(
    
            <table className={style['timer-table']}>
                <thead>
                   {memoTableth}
                </thead>
                <tbody>
                        {
                            props.tasks.map((time, index)=>(
                                // <tr ref={addTimerRef} key={time.date.getMilliseconds()}>

                                
                                <tr ref={addTimerRef} key={Date.parse(time.date) - index}>
                                    {/* {console.log(time.date.getMilliseconds())} */}
                                    <td>{time.date.toLocaleString()}</td>
                                    <td>{time.title}</td>
                                    <td>{time.description}</td>
                                    <td><Clock time={time.time} /></td>
                                    <td> <button onClick={()=> {if(window.confirm(`Voulez-vous vraiment supprimer le tâche "${time.title}"? \n\n Attention!! Cette action est irreversible.`)){removeTask(index)}}}>Supprimer</button></td>
                                </tr>
                            )
                            ).reverse()
                        }
                </tbody>
            </table>
        
    );
}

export default TimersTable;