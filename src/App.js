import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "kgku",
        day: "jhkhh",
        reminder: true
    },
    {
        id: 2,
        text: "kgkmku",
        day: "jhkhh",
        reminder: true
    },
    {
        id: 3,
        text: "kgjhnkjku",
        day: "jhkhh",
        reminder: true
    },
])

// Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Togle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
