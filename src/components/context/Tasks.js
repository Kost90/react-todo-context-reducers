import { createContext, useContext, useReducer } from 'react';
import { TasksReducer } from './TasksReducer';

const initialTasks = []

export const taskContext = createContext(null);
const TasksDispatchContext = createContext(null);

export const TaskProvider = ({children}) => {
const [tasks, dispatch] = useReducer(TasksReducer, initialTasks)

return(
    <taskContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
        {children}
        </TasksDispatchContext.Provider> 
    </taskContext.Provider>
)
}

export const useTasks = () => {
    const value = useContext(taskContext)

    if(value === null){
        throw new Error('useTasks must be used within a TasksProvider')
    }

    return value
}

export const useDispatch = () =>{
    const value = useContext(TasksDispatchContext)

    if(value === null){
        throw new Error('useDispatch must be used within a TasksProvider')
    }

    return value
}



