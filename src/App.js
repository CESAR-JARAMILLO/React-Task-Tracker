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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
