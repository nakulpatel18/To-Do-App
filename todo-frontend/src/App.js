import React, { useEffect, useState } from "react";
import { fetchTasks, addTask, updateTask, deleteTask } from "./api";
import "./App.css"; // Import CSS file

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        async function loadTasks() {
            const data = await fetchTasks();
            setTasks(data);
        }
        loadTasks();
    }, []);

    const handleAddTask = async () => {
        if (!newTask.trim()) return;
        const task = await addTask({ title: newTask, completed: false });
        setTasks([...tasks, task]);
        setNewTask("");
    };

    const handleToggleComplete = async (id, completed) => {
        const updatedTask = await updateTask(id, { completed: !completed });
        setTasks(tasks.map(task => (task._id === id ? updatedTask : task)));
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter(task => task._id !== id));
    };

    return (
        <div className="app-container">
            <h1>To-Do App</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button onClick={handleAddTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id} className="task">
                        <span
                            className={task.completed ? "completed" : ""}
                            onClick={() => handleToggleComplete(task._id, task.completed)}
                        >
                            {task.title}
                        </span>
                        <button className="delete-btn" onClick={() => handleDeleteTask(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
