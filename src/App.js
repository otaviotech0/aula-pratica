import { useState, useEffect } from "react";
import Task from "./components/task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("Lista atualizada:", tasks);
  }, [tasks]);

  function addTask() {
    setTasks([...tasks, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} text={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;