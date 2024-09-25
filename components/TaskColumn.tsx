"use client";

import { Droppable } from "react-beautiful-dnd";
import TaskItem from "./TaskItem";
import { Task } from "@/interface";

interface TaskColumnProps {
  status: Task["status"];
  tasks: Array<Task>;
}

const TaskColumn = ({ status, tasks }: TaskColumnProps) => {
  const getStatusBgColor = () => {
    switch (status) {
      case "To Do":
        return "bg-blue-200 hover:bg-blue-300";
      case "In Progress":
        return "bg-yellow-200 hover:bg-yellow-300";
      case "Done":
        return "bg-green-200 hover:bg-green-300";
      default:
        return "bg-gray-200 hover:bg-gray-300";
    }
  };

  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`rounded-lg shadow-lg p-4 w-80 transition-all ${getStatusBgColor()}`}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{status}</h2>
          {tasks.map((task, index) => (
            <TaskItem key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskColumn;
