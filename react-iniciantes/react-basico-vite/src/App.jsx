import React from "react";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  const total = dados.compras
    .map((item) => +item.preco.replace("R$ ", ""))
    .reduce((acc, currentValue) => acc + currentValue, 0);

  return (
    <>
      <p>
        <b>Nome: </b> {dados.cliente}
      </p>
      <p>
        <b>Idade: </b> {dados.idade}
      </p>
      <p>
        <b>Situação: </b>{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>
        <b>Total gasto: </b> R$ {total}
      </p>
      {total > 10000 && <p>Você está gastando muito.</p>}
    </>
  );
};

export default App;
