import { memo, useMemo } from "react";
import Task from "../Task/Task";
import { useTasks } from "../context/Tasks";
import useTheme from "../hooks/useTheme/useTheme";
import { createTodos } from "../utils/Utils";

const TaskList = memo(() => {
  const tasks = useTasks();
  const theme = useTheme();
  const actualTodos = useMemo(() => createTodos(tasks), [tasks]);

  return (
    <ul className={theme}>
      {actualTodos.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
});

export default TaskList;
