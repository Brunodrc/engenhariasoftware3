import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AddTask } from './componentes/add_task'
import { TaskList } from './componentes/list_tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  function handleAddTask(text: string){
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ])
  }
  function handleChangeTask(task: Task){
    setTasks(
      tasks.map((t)=>{
        if(t.id === task.id){
          return task
        } else {
          return t
        }
      })
    )
  }

  function handleDeleteTask(taskId:number){
    setTasks(tasks.filter((t)=>t.id !== taskId))
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Tasks</h2>

      <AddTask onAddTask={handleAddTask}/>
      <TaskList 
        tasks={tasks} 
        onchangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        />
    </div>
  )
}

export interface Task{
  id: number
  text: string
  done: boolean
}

let nextId = 3

const initialTasks: Task[] = [
  {id:0, text: 'Elaborar aula', done: true },
  {id:1, text: 'Estudar Flutter', done: false },
  {id:2, text: 'Correr na Av. Raul Lopes', done: false },
]

export default App
