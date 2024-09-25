import { Task } from "@/interface";

interface TaskDetailsProps {
  task: Task;
}

const TaskDetails = ({ task }: TaskDetailsProps) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "To Do":
        return "text-blue-600 bg-blue-100";
      case "In Progress":
        return "text-yellow-600 bg-yellow-100";
      case "Done":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white space-y-2">
      <h1 className="text-xl font-bold text-gray-800">{task.name}</h1>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
      <p className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyle(task.status)}`}>
        {task.status}
      </p>
    </div>
  );
};

export default TaskDetails;
