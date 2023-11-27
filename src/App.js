import { useContext, useState, useTransition } from 'react';
import Timer from './Timer.js';
import TimersTable from './TimerTable.js';
import style from './App.module.css';
import { ThemeContexte } from './context/theme.js';

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
const aLotOfTimer=generateALotOfTask();



function App() {

  const{theme, toogleTheme} =useContext(ThemeContexte);
  const [timers, setTimers]=useState(aLotOfTimer);
  // let timers=[
  //   {
  //     date: new Date(),
  //     time: 234,
  //   }
  // ];
  const [searchValue, setSearchValue]=useState('');
  const [isPending, startTransition]=useTransition();

  const onSearch=(value)=>{
    startTransition(()=>{
      setSearchValue(value);
    });
  }
  
  const saveTime=(time, title, description)=>{
      const date= new Date();
      // timers=[...timers, {time, date}]
      setTimers([...timers, {date, title, description, time}]);
  };
  const searchTimers =(searchValue)=>{

     if(!searchValue || searchValue.length<2){
       return timers;
     }  
    
    const foundTimers = timers.filter(times =>{
       if(times.title.trim().toLowerCase().includes(searchValue.trim().toLowerCase())){
      return times;
      }
     
    });
    return foundTimers;  
    
};
  
  const searchedTimer=searchTimers(searchValue);
  
  const removeTask=(taskIndex)=>{
    const taskCop=[...timers];
    taskCop.splice(taskIndex, 1);
    setTimers(taskCop);
}
 
  return (
    <div className={`${style.container} ${style[theme]}`}>
      <h1 className={style['main-title']}>Chronométrage de tâche</h1>
      <button onClick={toogleTheme}>Theme mode</button>
      <Timer saveTime={saveTime}/>
      <input type='search' onChange={(e)=>{onSearch(e.target.value)}} placeholder="Rechercher des tâches"/>
      {isPending && <p>loading...</p>}
      <TimersTable timers={searchedTimer} removeTask={removeTask} />
      
    </div>
  );
}

export default App;
