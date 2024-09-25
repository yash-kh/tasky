import { useAppDispatch } from "@/store/hooks";
import { addTask } from "@/store/slices/tasksSlice";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface TaskFormProps {
  onSubmit?: () => void;
}

const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name,
      dueDate,
      description,
      status: "To Do" as const,
    };
    dispatch(addTask(newTask));
    if (onSubmit) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white">
      <div className="flex flex-col space-y-4">
        <Input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="Task Name"
          required
          className="w-full"
        />
        <Input
          type="date"
          value={dueDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDueDate(e.target.value)
          }
          required
          className="w-full"
        />
        <Textarea
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
          placeholder="Task Description"
          className="w-full"
        />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;
