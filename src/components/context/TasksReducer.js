export const TASK_ACTION_TYPES = {
  addTask: "ADD_TASK",
  changeTask: "CHANGE_TASK",
  deleteTask: "DELETE_TASK",
};

export const TasksReducer = (tasks, action) => {
  switch (action.type) {
    case TASK_ACTION_TYPES.addTask: {
      return [
        ...tasks,
        {
          id: action.payload.id,
          text: action.payload.text,
          done: action.payload.done,
        },
      ];
    }
    case TASK_ACTION_TYPES.changeTask: {
      return tasks.map((t) => {
        if (t.id === action.payload.task.id) {
          return action.payload.task;
        } else {
          return t;
        }
      });
    }
    case TASK_ACTION_TYPES.deleteTask: {
      return tasks.filter((t) => t.id !== action.payload.taskId);
    }
    default: {
      throw new Error(`Unknown action type ${action.type}`);
    }
  }

};
