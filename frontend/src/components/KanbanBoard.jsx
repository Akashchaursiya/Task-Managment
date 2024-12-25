import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { v4 as uuidv4 } from "uuid";

const KanbanBoard = () => {
  const columns = ["To Do", "In Progress", "Done"];
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "To Do",
  });

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleUpdateStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };
  const handleAddTask = () => {
    if (newTask.title.trim() === "" || newTask.description.trim() === "") {
      alert("Please fill out all fields!");
      return;
    }
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        ...newTask,
        createdAt: new Date().toISOString(),
        deadline: newTask.deadline || null,
      },
    ]);
    setNewTask({ title: "", description: "", status: "To Do", deadline: "" });
  };

  return (
    <div className="p-4">
      <div className="bg-white shadow p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-4">Add a New Task</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Task Title"
            className="p-2 border border-gray-300 rounded"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Task Description"
            className="p-2 border border-gray-300 rounded"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
          <input
            type="datetime-local"
            placeholder="Deadline"
            className="p-2 border border-gray-300 rounded"
            value={newTask.deadline}
            onChange={(e) =>
              setNewTask({ ...newTask, deadline: e.target.value })
            }
          />

          <select
            className="p-2 border border-gray-300 rounded"
            value={newTask.status}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          >
            {columns.map((column) => (
              <option key={column} value={column}>
                {column}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((column) => (
          <div key={column} className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4 text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-2 rounded">
              {column}
            </h2>

            <div className="space-y-4">
              {tasks
                .filter((task) => task.status === column)
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={handleDeleteTask}
                    onUpdateStatus={handleUpdateStatus}
                    columns={columns}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
