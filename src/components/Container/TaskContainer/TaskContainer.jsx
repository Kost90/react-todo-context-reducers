import { useState, useLayoutEffect } from "react";
import TaskInput from "../../TaskInput/TaskInput";
import TaskList from "../../TaskList/TaskList";
import { useTheme } from "../../context/Theme";
import { useTasks } from "../../context/Tasks";

function TaskContainer() {
  const [numTodo, setNumTodo] = useState(0);
  const { theme, onChangeTheme } = useTheme();
  const tasks = useTasks();

  useLayoutEffect(() => {
    setNumTodo(tasks.length);
    document.title = `${numTodo} tasks`;
  }, [numTodo, tasks]);

  return (
    <div className={theme}>
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={onChangeTheme}
        />
        Dark mode
      </label>
      <TaskInput />
      <TaskList />
      <p>You have {numTodo} tasks</p>
    </div>
  );
}

export default TaskContainer;
