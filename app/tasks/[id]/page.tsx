"use client";

import { useParams, useRouter } from "next/navigation";
import { Task } from "@/interface";
import { Button } from "@/components/ui/button";
import TaskDetails from "@/components/TaskDetails";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { deleteTask } from "@/store/slices/tasksSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

const TaskDetailsPage = () => {
  const { id } = useParams();
  const navigate = useRouter();
  const task = useAppSelector((state) =>
    state.tasks.tasks.find((task: Task) => task.id === id)
  );
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    if (id) {
      dispatch(deleteTask(id as string));
      navigate.push("/tasks");
      setOpen(false);
    }
  };

  if (!task) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-2xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Task not found
          </h2>
          <Link href="/tasks">
            <Button>Go back to tasks</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-6">
      <TaskDetails task={task} />

      <div className="mt-6 flex justify-end space-x-4">
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete Task</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                task.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
