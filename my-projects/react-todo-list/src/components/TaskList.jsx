import React from "react";

const TaskList = () => {
  const [tarefas, setTarefa] = React.useState([]);
  function addTask() {
    const taskInput = document.getElementById("task");
    if (taskInput.value) {
      setTarefa([...tarefas, taskInput.value]);
      taskInput.value = "";
    }
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div style={{ width: "500px", display: "flex", gap: "10px" }}>
          <input
            style={{
              border: "1px solid #6C63FF",
              borderRadius: "4px",
              padding: "10px",
              flex: "1",
              color: "#6C63FF",
            }}
            type="text"
            placeholder="Informe uma tarefa..."
            id="task"
          ></input>{" "}
          <button
            style={{
              background: "#6C63FF",
              color: "#fff",
              border: "none",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={addTask}
          >
            + Adicionar
          </button>
        </div>
        {tarefas.length > 0 ? (
          <ul style={{ width: "500px", margin: "0", padding: "0" }}>
            {tarefas.map((item) => (
              <ol
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: "5px",
                  margin: "0",
                  borderBottom: "1px solid #6C63FF70",
                  padding: "10px 0px",
                  fontFamily: "Arial",
                  color: "#252525",
                  textTransform: "uppercase",
                }}
              >
                <input type="checkbox" id={item} name={item} />
                <label htmlFor={item}>{item}</label>
              </ol>
            ))}
          </ul>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "Arial",
            }}
          >
            <img src="./empty.svg" alt="Vazio" />
            <p>Sem tarefas...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
