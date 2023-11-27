import { useContext, useState, useTransition } from 'react';
import Timer from './Timer.js';
import TimersTable from './TimerTable.js';
import style from './App.module.css';
import { ThemeContexte } from './context/theme.js';
import { TaskContexte } from './context/tasks.js';




function App() {

  const{ searchTasks} = useContext(TaskContexte);
  const{theme, toogleTheme} =useContext(ThemeContexte);
  // const [timers, setTimers]=useState(aLotOfTimer);
  // let timers=[
  //   {
  //     date: new Date(),
  //     time: 234,
  //   }
  // ];
//   

const [searchValue, setSearchValue]=useState('');    
const [isPending, startTransition]=useTransition();

const onSearch=(value)=>{
  startTransition(()=>{
    setSearchValue(value);
  });
}

const searchedTasks=searchTasks(searchValue);

  return (
    <div className={`${style.container} ${style[theme]}`}>
      <h1 className={style['main-title']}>Chronométrage de tâche</h1>
      <button onClick={toogleTheme}>Theme mode</button>
      <Timer/>
      <input type='search' onChange={(e)=>{onSearch(e.target.value)}} placeholder="Rechercher des tâches"/>
      {isPending && <p>loading...</p>}
      <TimersTable tasks={searchedTasks}/>
      
    </div>
  );
}

export default App;
