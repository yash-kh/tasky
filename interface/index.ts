export interface Task {
  id: string;
  name: string;
  dueDate: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
}
