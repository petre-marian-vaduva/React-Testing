import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {

  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30',
            reminder: true,
        },  
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 2:30',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food shopping',
            day: 'Feb 5th at 2:30',
            reminder: false,
        },
    ] 
)

//delete Task
const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}


export default App
