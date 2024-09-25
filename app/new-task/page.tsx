"use client";

import TaskForm from "@/components/TaskForm";
import { useRouter } from "next/navigation";

const NewTaskPage = () => {
  const navigate = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Create New Task</h1>
      <div className="w-full max-w-md">
        <TaskForm onSubmit={() => navigate.push("/tasks")} />
      </div>
    </div>
  );
};

export default NewTaskPage;
