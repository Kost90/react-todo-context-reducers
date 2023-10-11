import { memo, useState } from "react";
import { useDispatch} from "../context/Tasks";
import { TASK_ACTION_TYPES } from "../context/TasksReducer";

const Task = memo(({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handelChangeDone = (e) => {
    dispatch({
      type: TASK_ACTION_TYPES.changeTask,
      payload: {
        task: {
          ...task,
          done: e.target.checked,
        },
      },
    });
  };

  const handleEdit = (e) => {
    dispatch({
      type: TASK_ACTION_TYPES.changeTask,
      payload: {
        task: {
          ...task,
          text: e.target.value,
        },
      },
    });
  };

  const handelDelete = () => {
    dispatch({
      type: TASK_ACTION_TYPES.deleteTask,
      payload: {
        taskId: task.id,
      },
    });
  };

  const showForm = () => {
    setIsEditing(true);
  };

  const hideForm = () => {
    setIsEditing(false);
  };

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input value={task.text} onChange={handleEdit} />
        <button onClick={hideForm}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={showForm}>Edit</button>
      </>
    );
  }

  return (
    <div key={task.id}>
      <input type="checkbox" checked={task.done} onChange={handelChangeDone} />
      {taskContent}
      <button onClick={handelDelete}>Delete</button>
    </div>
  );
});

export default Task;
