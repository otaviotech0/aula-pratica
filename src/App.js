import { useState, useEffect } from "react";
import Task from "./components/task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("Lista atualizada:", tasks);
  }, [tasks]);

  function addTask() {
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function toggleTask(index) {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    ));
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <p>Total: {tasks.length} tarefa(s)</p>
      <p>Concluídas: {tasks.filter(t => t.done).length}</p>
      <p>Pendentes: {tasks.filter(t => !t.done).length}</p>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            done={task.done}
            onRemove={() => removeTask(index)}
            onToggle={() => toggleTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;