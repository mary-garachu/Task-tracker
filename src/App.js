import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "do the dishes",
      day: "Monday",
      reminder: "true",
    },
    {
      id: 2,
      text: "update CV",
      day: "Tuesday",
      reminder: "false",
    },
    {
      id: 3,
      text: "babys checkup",
      day: "Wednesday",
      reminder: "false",
    },
  ])

 const deleteTask =(id) => {
    setTasks(tasks.filter((task) => task.id !== id
    ))
  }

  const onDoubleClick = () => {
    
  }
  
  return (
    <div className='container'>
      <Header text = {'Task Tracker'} />
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} /> : 'There are no tasks'}
    </div>
  );
}

export default App;
