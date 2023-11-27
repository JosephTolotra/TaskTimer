import { createContext, useState } from "react";

const TaskContexte=createContext({
    tasks: [],
    addTask: ()=>{},
    removeTask: ()=>{},
    searchTasks: ()=>{}
});

export {TaskContexte};

const generateALotOfTask=()=>{
    const ALotOfTask=[];
    for(let i=0;i<10;i++){
      ALotOfTask.push({
        date: new Date(),
        title: 'Fake Task ' + i,
        description: 'This Task is Fake',
        time: 250 +i,
      });
    };
     return ALotOfTask;
  }
  const aLotOfTasks=generateALotOfTask();

const TaskContexteProvider = ({children})=>{

    const [tasks, setTasks]=useState(aLotOfTasks);
    const addTask=(task)=>{
        setTasks([...tasks, task]);
    }

    const removeTask=(taskIndex)=>{
        const taskCop=[...tasks];
        taskCop.splice(taskIndex, 1);
        setTasks(taskCop);

    }

    const searchTasks =(searchValue)=>{

        if(!searchValue || searchValue.length<2){
          return tasks;
        }  
      
       const foundTasks = tasks.filter(task =>{
          if(task.title.trim().toLowerCase().includes(searchValue.trim().toLowerCase())){
         return task;
         }
       
       });
       return foundTasks;  
      
   };
    const value={
        tasks,
        addTask,
        removeTask,
        searchTasks
    }
    return(
        <TaskContexte.Provider value={value}>
            {children}
        </TaskContexte.Provider>
    );
}

export default TaskContexteProvider;




  
