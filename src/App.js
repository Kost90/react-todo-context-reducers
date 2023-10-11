import TaskContainer from "./components/Container/TaskContainer/TaskContainer";
import { ThemeProvider } from "./components/context/Theme";
import { TaskProvider } from "./components/context/Tasks";
import './App.css'

function App() {
  
  return (
    <ThemeProvider>
      <TaskProvider>
        <TaskContainer/>
      </TaskProvider>
    </ThemeProvider>
    
  );
}

export default App;
