import './App.css'
import { useState } from 'react'
import DeleteTask from './DeleteTask'

function App() {

  const [newTask, setNewTask] = useState('')
  const [toDoList, setToDos] = useState([])

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    // console.log(toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1); //setting previous item's id+1 as new id number
    // const t = newTask == '' ? (alert("Please enter something!")): newTask;
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }

    if (task.taskName == '') {
      document.getElementById('in').style.borderColor = 'red';
      alert("Please Enter a ToDo you wish!")
    }
    else if (task.taskName != '') {
      document.getElementById('in').style.borderColor = 'green';
      setToDos([...toDoList, task]) //set array to the toDoList Array
    }
    document.getElementById('in').value = ''
    setNewTask('')
  }

  const deleteTask = (id) => { // setToDos(toDoList.filter((i) => i == id ? false : true))  } //OR
    setToDos(toDoList.filter((obj) => obj.id !== id))
  }

  function completeTask(id) {
    setToDos(
      toDoList.map((item) => {
        if (item.id == id && item.completed) { return { ...item, completed: false } }
        else if (item.id == id && !item.completed) { return { ...item, completed: true } }
        else { return item }
      }))
  }

  return (
    <div className="App">
      <div className="addTask">
        <input id='in' onChange={handleChange} />
        <button id='inbtn' onClick={addTask}>Add Task</button>
      </div>

      <div className="list">
        {toDoList.map((item) => {
          return <>
            <div id="disp" style={{ backgroundColor: item.completed ? 'greenyellow' : 'white' }}>
              <h3 id='dispTxt'>{item.taskName}</h3>
              <button id='completed' onClick={() => completeTask(item.id)}>Completed</button>
              <DeleteTask id={item.id} taskName={item.taskName} deleteTask={deleteTask} />
            </div>
          </>
        })}
      </div>
    </div>
  )
}

export default App;