import React from "react";
import { FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TaskCard = ({ task, onDelete, onUpdateStatus, columns }) => {
  const currentIndex = columns.indexOf(task.status);

  return (
    <div
      className="bg-white p-4 rounded shadow-lg animate-fade-in-up relative"
      style={{ animation: "fade-in-up 0.5s ease-in-out" }}
    >
      <h3 className="font-semibold text-lg">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      
      <div className="mt-2 text-xs text-gray-500">
        Created: {new Date(task.createdAt).toLocaleString()}
        {task.deadline && (
          <div>
            Deadline: <span className="text-red-500">{new Date(task.deadline).toLocaleString()}</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex space-x-2">
          {currentIndex > 0 && (
            <button
              className="text-blue-500 hover:text-blue-700 transition"
              onClick={() =>
                onUpdateStatus(task.id, columns[currentIndex - 1])
              }
            >
              <FaChevronLeft />
            </button>
          )}
          {currentIndex < columns.length - 1 && (
            <button
              className="text-blue-500 hover:text-blue-700 transition"
              onClick={() =>
                onUpdateStatus(task.id, columns[currentIndex + 1])
              }
            >
              <FaChevronRight />
            </button>
          )}
        </div>
        <button
          className="text-red-500 hover:text-red-700 transition"
          onClick={() => onDelete(task.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
