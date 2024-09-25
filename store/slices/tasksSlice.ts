import { Task } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    {
      id: "1",
      name: "Dog walking",
      dueDate: "2024-10-01",
      description: "Take sandy on a walk",
      status: "To Do",
    },
    {
      id: "2",
      name: "Deliver medicines",
      dueDate: "2024-10-02",
      description: "Deliver medicines to the Dada ji",
      status: "In Progress",
    },
    {
      id: "3",
      name: "Client meeting",
      dueDate: "2024-10-03",
      description: "Prepare for client meeting",
      status: "Done",
    },
    {
      id: "4",
      name: "Diljit Concert",
      dueDate: "2024-10-04",
      description: "Attend Diljit Concert on the 4th of January",
      status: "To Do",
    },
  ],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: string; status: Task["status"] }>
    ) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
