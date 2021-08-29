// import './App.css';
import { useState } from "react"
import  Header  from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"
//racx

const App = () => {
  const [showAddTask,setShowAddTask]=useState(true)
  const [tasks,setTasks]=useState([
    {
      id:1,
      text:'aaaaaaaaa',
      day: '1:30pm',
      reminder:true,
    },
    {
      id:2,
      text:'bbbbbbbbb',
      day: '2:30pm',
      reminder:true,
    },
    {
      id:3,
      text:'ccccccccc',
      day: '3:30pm',
      reminder:true,
    },
    
])
//add Task
const addTask=(task)=>{
  const id= Math.floor(Math.random()* 10000)+1
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}
//delete task
const deleteTask=(id)=>{
 setTasks(tasks.filter((task)=>task.id !== id))
}

//toggle Reminder
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>
  task.id===id? {...task,reminder:!task.reminder }:task))
}
  return (
    <div className='container'>
    <Header onAdd={()=>setShowAddTask(!showAddTask)} 
    showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? 
    <Tasks tasks={tasks} onDelete={deleteTask}
    onToggle={toggleReminder}/>
    : 'NO Tasks To Show'}
    </div>
  )
}

export default App