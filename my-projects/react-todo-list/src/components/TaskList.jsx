import React from "react";

const TaskList = () => {
  const [tarefas, setTarefa] = React.useState([]);
  function addTask() {
    const taskInput = document.getElementById("task");
    if (taskInput.value) {
      setTarefa([...tarefas, taskInput.value]);
      taskInput.value = ''
    }
  }
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Informe uma tarefa..."
          id="task"
        ></input>{" "}
        <button onClick={addTask}>+ Adicionar</button>
      </div>

      <div>
        <ul>
          {tarefas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
