"use client";

import { Draggable } from "react-beautiful-dnd";
import Link from "next/link";
import { Task } from "@/interface";

interface TaskItemProps {
  task: Task;
  index: number;
}

const TaskItem = ({ task, index }: TaskItemProps) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="task-item bg-white p-4 mb-2 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <Link href={`/tasks/${task.id}`}>
            <div>
              <h3 className="text-lg font-semibold">{task.name}</h3>
              <p className="text-gray-600">{task.dueDate}</p>
            </div>
          </Link>
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
