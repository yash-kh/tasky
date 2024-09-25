"use client";

import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateTask } from "@/store/slices/tasksSlice";
import TaskColumn from "@/components/TaskColumn";
import TaskForm from "@/components/TaskForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Task } from "@/interface";

const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { draggableId, source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      dispatch(
        updateTask({
          id: draggableId,
          status: destination.droppableId as Task["status"],
        })
      );
    }
  };

  return (
    <div className="p-4 bg-white">
      <div className="mb-4">
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setDialogOpen(true)}>Add Task</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Create New Task</DialogTitle>
            <TaskForm onSubmit={() => setDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex justify-center space-x-4 h-[82vh]">
          {["To Do", "In Progress", "Done"].map((status) => (
            <TaskColumn
              key={status}
              status={status as Task["status"]}
              tasks={tasks.filter((task: Task) => task.status === status)}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskList;
